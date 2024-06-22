import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CountChart: React.FC = () => {
  const countHistory = useSelector((state: any) => state.counter.countHistory);

  if (!countHistory || countHistory.length === 0) {
    return <Typography variant="h6">No data available</Typography>;
  }

  const chartData = {
    labels: countHistory.map((_: number, index: number) => `${index + 1}`),
    datasets: [
      {
        label: "Counter Value",
        data: countHistory,
        borderColor: "lightblue",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box width={"100%"} m={'40px'} minWidth={'400px'} overflow={"hidden"}>
      <Typography variant="h6">Counter Button Log</Typography>
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default CountChart;
