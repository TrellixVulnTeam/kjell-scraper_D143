import React, { useEffect, useState } from "react";
import './Statistics.scss'
import FunFactCard from "./components/FunFactCard";

function Statistics() {

    const [test, setTest] = useState("test")

    useEffect(() => {
        setTest("effect loaded")
    })

    return (
        <div className="statistics-page">
            <h1>Statistik</h1>
            <div>
                <FunFactCard title="Antal körningar" value="56" />
                <FunFactCard title="Antal artiklar" value="56" />
                <FunFactCard title="Genomsnittlig tid" value="56" />
            </div>
            <table>
                <tr>
                    <th>Test</th>
                    <th>test</th>
                    <th>test</th>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
            </table>
        </div>
    );
}

export default Statistics;