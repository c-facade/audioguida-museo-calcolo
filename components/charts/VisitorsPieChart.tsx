"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LANGUAGE_MAP = {
	en: "Inglese",
	it: "Italiano",
	fr: "Francese",
	eo: "Esperanto"
};

export default function NewVisitorsPieChart({ data }) {
  return (
    <Pie
      data={{
        labels: data.map((d) => LANGUAGE_MAP[d.language]),
        datasets: [
          {
            data: data.map((d) => d.count),
            backgroundColor: [
              "rgba(43, 209, 52, 0.7)",  // eo
              "rgba(54, 162, 235, 0.7)",  // en
              "rgba(255, 99, 132, 0.7)",  // it
              "rgba(255, 206, 86, 0.7)",  // fr
            ],
            borderWidth: 1,
          },
				],
			}}
      options={{
        plugins: {
          legend: {
            labels: {
              color: "white",
              font: {
                size: 16,
                weight: "bold",
              },
            },
          },
          tooltip: {
            bodyFont: { size: 16 },
            titleFont: { size: 16 },
          },
        },
      }}
    />
  );
}

