import React from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";

export default function SalesChart() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December']
    const data = {
        labels: months,
        datasets: [{
            label: "# Sales",
            data: months.map(() => Math.random(0, 100) * 10),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132, 0.5)',
        }]
    }
    
    const config = {
        // type: "line",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    }

    return (
        <div className={"sales-chart"}>
            <Line {...config} />
        </div>
    )
}