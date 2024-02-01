import React from 'react';
import { Bar } from 'react-chartjs-2';
import { MonthlyData } from "../types";

interface ChildChartProps {
  monthlyData: MonthlyData;
  selectedQuarter: string | null;
}

const ChildChart: React.FC<ChildChartProps> = ({ monthlyData, selectedQuarter }) => {

  const getLabels = () => {
    const quarterNumber = parseInt(selectedQuarter!.split(' Q')[1]); 
    const startMonthIndex = ((quarterNumber - 1) % 4) * 3;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const labels = [];
  
    for (let i = 0; i < 3; i++) {
      labels.push(months[(startMonthIndex + i) % 12]); 
    }
  
    return labels;
  };
  

  const getQuarterData = () => {
    if (!selectedQuarter) return null; 

    const [year, quarter] = selectedQuarter.split(' Q'); 

    return monthlyData[year]?.['Q' +quarter]; 
  };

  const quarterData = getQuarterData(); 
  if (!quarterData) {
    return <div>Error: Selected quarter data not found</div>;
  }


  const data = {
    labels: getLabels(),
    datasets: [
      {
        label: 'Product A',
        data: quarterData.productA,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Product B',
        data: quarterData.productB,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Product C',
        data: quarterData.productC,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
  <div>
    <h2>Mothly Data</h2>
    <Bar data={data} options={options} />
  </div>
  )
};

export default ChildChart;
