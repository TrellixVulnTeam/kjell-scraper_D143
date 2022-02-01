import React, { useEffect, useState } from "react";
import './Statistics.scss'
import FunFactCard from "./components/FunFactCard";

function Statistics() {
    const [dataList, setDataList] = useState([])

    // The function for getting all the statistics 
    useEffect(() => {
        fetch("/api/getstats").then((res) => res.json().then((data) => data.map(x => {
            setDataList(data)
        }))
        )
    }, [dataList])


    return (
        <div className="statistics-page">
            <h1>Statistik</h1>
            <div>
                <FunFactCard title="Antal körningar" value="56" />
                <FunFactCard title="Antal artiklar" value="56" />
                <FunFactCard title="Genomsnittlig tid" value="56" />
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
                            <td>{String(Number(x.time).toFixed(2))+"s"}</td>
                            <td>{x.run_number}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Statistics;