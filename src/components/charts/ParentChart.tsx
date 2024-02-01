import React from 'react';
import { Bar } from 'react-chartjs-2';
import { QuarterlyData } from "../types";
import "chart.js/auto";


interface ParentChartProps {
  quarterlyData: QuarterlyData[];
  onQuarterSelect: (index: number) => void;
}

const ParentChart: React.FC<ParentChartProps> = ({ quarterlyData, onQuarterSelect }) => {
  // Calculate total values for each quarter
  const quarterTotals = quarterlyData.map(quarter => quarter.productA + quarter.productB + quarter.productC);

  // Convert quarterly data to percentage values
  const data = {
    labels: quarterlyData.map(data => data.quarter),
    datasets: [
      {
        label: 'Product A',
        data: quarterlyData.map((data, index) => (data.productA / quarterTotals[index]) * 100),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Product B',
        data: quarterlyData.map((data, index) => (data.productB / quarterTotals[index]) * 100),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Product C',
        data: quarterlyData.map((data, index) => (data.productC / quarterTotals[index]) * 100),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  const options = {
    onClick: (_: any, elements: any[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        onQuarterSelect(index);
      }
    },
    scales: {
      x: { stacked: true },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        callback: (value: number) => `${value.toFixed(2)}%`,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y.toFixed(2)}%`;
            }
            return label;
          },
        },
      },
    },
  };
  return (
    <div>
      <h2>Quarterly Data</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ParentChart;
