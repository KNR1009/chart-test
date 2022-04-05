import React from "react";
// 円グラフとドーナッツデータ
import { Pie, Doughnut } from "react-chartjs-2";

export const PiePlot = () => {
  const data = {
    labels: ["windows", "mac", "linux"],
    datasets: [
      {
        // %で表記
        data: [90, 7, 3],
        // 背景色
        backgroundColor: ["#4169e1", "#ff1493", "#FFCE56"],
        // ホバー時の色
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        borderColor: ["transparent", "transparent", "transparent"],
      },
    ],
  };
  return <Doughnut data={data}></Doughnut>;
};
