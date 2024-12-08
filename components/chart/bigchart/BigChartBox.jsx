"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./bigchart.scss"
import { useEffect, useState } from 'react';

const BigChartBox =  () => {
    const [chart, setChart] = useState([]);

    const data = [
        {
            name: "Sun",
            books: 4000,
            clothes: 2400,
            electronic: 2400,
        },
        {
            name: "Mon",
            books: 3000,
            clothes: 1398,
            electronic: 2210,
        },
        {
            name: "Tue",
            books: 2000,
            clothes: 9800,
            electronic: 2290,
        },
        {
            name: "Wed",
            books: 2780,
            clothes: 3908,
            electronic: 2000,
        },
        {
            name: "Thu",
            books: 1890,
            clothes: 4800,
            electronic: 2181,
        },
        {
            name: "Fri",
            books: 2390,
            clothes: 3800,
            electronic: 2500,
        },
        {
            name: "Sat",
            books: 3490,
            clothes: 4300,
            electronic: 2100,
        },
    ];


    const getCharts = async () => {
        const response = await fetch('/api/chart', {
            method: "GET",
        });
        const data = await response.json();
        setChart(data);
        console.log(response);
    };

    useEffect(() => {
        getCharts();
    }, []);


    return (
        <div className="bigChartBox">
            <h1>Revenue Analytics</h1>
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={chart}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line tick="¥" type="monotone" dataKey="totalIn" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="totalSave" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="totalOut" stroke="#FF8042" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox