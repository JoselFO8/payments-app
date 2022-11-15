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

// Importar graficos de linea
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
    // Ajustar el grafico al tamaño del lienzo
    maintainAspectRatio: false,
    
    // Deshabilitar legenda
    plugins: {
        legend: {
            display: false
        }
    }, 

    // Si queremos pintar el area del grafico ( NOTA debe importarse ++ Filler ++)
    fill: true,
}

export default function Graphyc({chartData}) {
    const data = useMemo(function() {
        // chart pide que le enviemos un objeto con propiedades para pintar el grafico
        return {
            // Set de datos que se pinten en nuestro grafico
            datasets: [
                // Grafico 1
                {
                    label: "Linea 1",
                    data: chartData.item1,
                    // Para que no sea tan recto, podemos suavisar con tension (valor entre 0 y 1)
                    tension: 0.5,
                    pointRadius: 0,
                    // Cambiar color del borde
                    borderColor: bdColors,
                    // Colorear el area del grafico
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
            // valores en eje X
            labels: chartData.labels
        }
    }, [])

    return (
        <div className="graphyc-container">
            {
                chartData 
                ?
                    <Line 
                        data={data}
                        options={options}
                    ></Line>
                : <div></div>
            }
        </div>
    )
}