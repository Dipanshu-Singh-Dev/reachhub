import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Chart = ({ ratings }) => {
  // Extracting labels and data from points array
  const labels = ratings.points.map((point) =>
    new Date(point[0], point[1], point[2]).toLocaleDateString()
  );
  const data = ratings.points.map((point) => point[3]);

  // Creating chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: ratings.name,
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div>
      <h2>{ratings.name}</h2>
      <Bar data={chartData} width={1000} height={400} />
    </div>
  );
};

export default Chart;
