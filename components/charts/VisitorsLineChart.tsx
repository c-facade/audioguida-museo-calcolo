"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function VisitorsLineChart({ data }) {
  return (
    <Line
      data={{
        labels: data.map((d) => d.day),
        datasets: [
          {
            label: "Nuovi",
            data: data.map((d) => d.new),
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.3)",
            tension: 0.3,
          },
          {
            label: "Ritorno",
            data: data.map((d) => d.returning),
            borderColor: "rgb(255, 77, 0)",
            backgroundColor: "rgba(224, 71, 4, 0.3)",
            tension: 0.3,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
			    legend: {
					position: "top",
            labels: {
              color: "white",
              font: {
                size: 16,
			        },
			      },
					},
			},
			scales: {
				x: {
					ticks: {
						color: "white",
						font: {
							size: 14,
						},
					},
					grid: {
						color: "rgba(255, 255, 255, 0.1)",
					},
				},
				y: {
					ticks: {
						color: "white",
						font: {
							size: 14,
							weight: "bold",
						},
					},
					grid: {
						color: "rgba(255, 255, 255, 0.1)",
					},
				},
			},
		}}
    />
  );
}

