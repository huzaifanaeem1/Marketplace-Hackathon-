"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesChartProps {
  labels: string[];
  data: number[];
}

export default function SalesChart({ labels, data }: SalesChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Sales",
        data,
        borderColor: "rgb(39, 35, 67, 1)", 
        backgroundColor: "rgba(39, 35, 67, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sales Trend",
      },
    },
  };

  return <Line data={chartData} options={options} />;
}