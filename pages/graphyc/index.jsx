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

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const scores2 = [0, 2, 4, 6, 4, 2, 7, 5, 6];
const labels = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const bgColors = ['#ea80fc','#e040fb', '#d500f9', '#aa00ff', '#f8bbd0', '#f06292', '#ec407a', '#d81b60', '#1de9b6', '#00bfa5', '#e65100']
const options = {
    responsive: true,
    // Ajustar el grafico al tamaño del lienzo
    maintainAspectRatio: false,
    // Decir que ingrese desde 0 en eje Y
    scales: {
        y: {
            min: 0,
        }
    },

    // Deshabilitar legenda
    plugins: {
        legend: {
            display: true
        }
    }, 

    // Si queremos pintar el area del grafico ( NOTA debe importarse ++ Filler ++)
    fill: true,
}

export default function Graphyc() {
    // Memorizar los datos que le vamos a pasar a nuestro grafico
    const data = useMemo(function() {
        // chart pide que le enviemos un objeto con propiedades para pintar el grafico
        return {
            // Set de datos que se pinten en nuestro grafico
            datasets: [
                // Grafico 1
                {
                    label: "Mis datos",
                    data: scores,
                    // Para que no sea tan recto, podemos suavisar con tension (valor entre 0 y 1)
                    tension: 0.5,

                    // Cambiar el tamaño de los puntos del borde
                    pointRadius: 10,
                    // --Cambiar su color de relleno
                    pointBackgroundColor: "rgb(255, 0, 0)", 

                    // Cambiar color del borde
                    // borderColor: "rgb(75, 20, 192)",
                    borderColor: bgColors,

                    // Colorear el area del grafico
                    backgroundColor: "rgba(75, 20, 192,0.4)"
                },
            
                // Grafico 2
                {
                    label: "Mis datos 2",
                    data: scores2,
                    // Para que no sea tan recto, podemos suavisar con tension (valor entre 0 y 1)
                    tension: 0.3,

                    // Cambiar el tamaño de los puntos del borde
                    pointRadius: 10,
                    // --Cambiar su color de relleno
                    pointBackgroundColor: "rgb(0, 0, 255)", 

                    // Cambiar color del borde
                    // borderColor: "rgb(75, 250, 192)",
                    borderColor: bgColors,

                    // Colorear el area del grafico
                    backgroundColor: "rgba(75, 250, 192,0.4)"
                }
            ],
            // valores en eje X
            labels
        }
    }, [])

    return (
        <div className="graphyc-container">
            <Line 
                data={data}
                // Optios permite una serie de opciones como:
                options={options}
                className="graphyc-container-chart"
            ></Line>
        </div>
    )
}