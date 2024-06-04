"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughNutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Bank",
        data: ["1250", "2500", "3500"],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    lable: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughNutChart;
