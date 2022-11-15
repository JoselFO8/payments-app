import {useMemo} from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const bdColors = [ '#E39EC9', '#E5A662', '#e67b00', '#ec407a', '#e2e600', '#1de9b6', '#0053bf' ]
const bgColors = [ '#e39ec900', '#E5A6622f', '#e67b002f', '#ec407a2f', '#e2e6002f', '#1de9b62f', '#0053bf2f' ]
const options = {
    responsive: true,
    maintainAspectRatio: false,
    
    // Disable legend
    plugins: {
        legend: {
            display: false
        }
    }, 

    // Color in graphic area (Filler is required)
    fill: true,
}

export default function Graphyc({chartData}) {
    const data = useMemo(function() {
        return {
            datasets: [
                // Grafico 1
                {
                    label: "Linea 1",
                    data: chartData.item1,
                    tension: 0.5,
                    pointRadius: 0,
                    borderColor: bdColors,
                    backgroundColor: bgColors
                },
                // Grafico 2
                {
                    label: "Linea 2",
                    data: chartData.item2,
                    tension: 0.5,
                    pointRadius: 0,
                    borderColor: bdColors,
                    backgroundColor: bgColors
                }
            ],
            // Values in X axis
            labels: chartData.labels
        }
    }, [])

    return (
        <div className="graphyc-container">
            
            <Line 
                data={data}
                options={options}
            ></Line>
            
        </div>
    )
}