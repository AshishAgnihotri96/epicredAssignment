import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
function Graph({ data }) {
    const chartRef = useRef(null);
    console.log("data in graph",data)
    useEffect(() => {
        if (chartRef.current && chartRef.current.chartInstance) {
            // Destroy the previous chart instance
            chartRef.current.chartInstance.destroy();
        }
    }, [data]);

    // Check if data is available
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    const chartData = {
        labels: data.map(item => `${item.branch} - ${item.country}`),
        datasets: [{
            label: 'Incremental Savings',
            data: data.map(item => item.incrementalSavings),
            backgroundColor: data.map((item, index) => `hsl(${index * (360 / data.length)}, 100%, 50%)`),
        }]
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'bar',
                title: {
                    display: true,
                    text: 'Number of years after your course starts'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Savings'
                },
                ticks: {
                    stepSize: 1000
                }
            }
        }
    };
    
    return (
        <div>
            {/* <Bar ref={chartRef} data={chartData} options={chartOptions} /> */}
        </div>
    );
}

export default Graph;
