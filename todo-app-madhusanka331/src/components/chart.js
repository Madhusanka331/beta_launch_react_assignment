import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(Tooltip, Legend, ArcElement);

const Chart = ({ tasks }) => {
  const [chartData, ] = useState({
    labels: ["LOW", "MEDIUM", "HIGH"],
    datasets: [
      {
        label: "# of Votes",
        data: [0, 0, 0], // Initialize with zeros
        backgroundColor: ["#FF5733", "#36A2EB", "#FFCD56"],
      },
    ],
  });

  useEffect(() => {
    if (tasks.length)
      tasks.map((el) => {
        if (el.priority === "LOW") return chartData.datasets[0].data[0]++;
        else if (el.priority === "MEDIUM") return chartData.datasets[0].data[1]++;
        else return chartData.datasets[0].data[2]++;
      });
  }, [chartData.datasets, tasks, tasks.length]);
  const options = {
    maintainAspectRatio: false,
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
    
      <Doughnut data={chartData} height={400} options={options} />
    </div>
  );
};

export default Chart;
