import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo line plot",
      backgroundColor: "#2C7CFF",
      borderColor: "#A4C6FF",
      pointBorderWidth: 3,
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};

const LinePlot: React.FC = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LinePlot;
