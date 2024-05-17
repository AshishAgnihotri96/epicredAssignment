import React from "react"
import { Bar } from "react-chartjs-2"
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js"

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Test({data}) {
    if (!data || data.length === 0) {
        return <div></div>;
    }
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Your Estimated Savings Over the Years' },
        },
    }
 

    const chartData = {
        
        labels: data.map(item => `${item.branch} - ${item.country}`),
        datasets: [{
            label: 'Incremental Savings',
            data: data.map(item => item.incrementalSavings),
            backgroundColor: data.map((item, index) => `hsl(${index * (360 / data.length)}, 100%, 50%)`),
        }]
    }

    return <Bar options={options} data={chartData}/>
}