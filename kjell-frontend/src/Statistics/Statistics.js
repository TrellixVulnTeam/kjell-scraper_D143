import React, { useEffect, useState } from "react";
import './Statistics.scss'
import FunFactCard from "./components/FunFactCard";

function Statistics() {
    const [dataList, setDataList] = useState([])
    const [totalArticle, setTotalArticle] = useState(0)
    const [midTime, setMidTime] = useState(0)
    // The function for getting all the statistics 
    useEffect(() => {
        fetch("/api/getstats").then((res) => res.json().then((data) => {
            setDataList(data)
            var sum = 0;
            var time_sum = 0;
            data.map(x => {
                sum = sum + x.run_number
                time_sum = time_sum + x.time
            })
            setMidTime(String(Number(time_sum / data.length).toFixed(2))+"s")
            setTotalArticle(sum)
        })
        )
    }, [])


    return (
        <div className="statistics-page">
            <h1>Statistik</h1>
            <div>
                <FunFactCard title="Antal körningar" value={dataList.length} />
                <FunFactCard title="Totalt antal artiklar" value={totalArticle} />
                <FunFactCard title="Genomsnittlig tid" value={midTime} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Time</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map(x =>
                        <tr>
                            <td>{x.timestamp}</td>
                            <td>{String(Number(x.time).toFixed(2)) + "s"}</td>
                            <td>{x.run_number}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Statistics;