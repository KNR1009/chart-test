import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo bar plot",
      backGroundColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      data: [50, 30, 70, 15, 50, 0, 100],
    },
  ],
};

export const BarPlot = () => {
  return <Bar data={data} />;
};
