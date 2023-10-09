import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const NewSignUps = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [
          "2021-02-03",
          "2021-02-04",
          "2021-02-05",
          "2021-02-06",
          "2021-02-07",
          "2021-02-08",
          "2021-02-09",
        ],
        datasets: [
          {
            label: "New SignUps",
            data: [65, 34, 65, 34, 56, 78, 50],
            fill: false,
            borderColor: "rgb(75 , 192 , 192)",
            borderWidth: 2,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} style={{ width: "80px", height: "60px" }} />
    </div>
  );
};

export default NewSignUps;
