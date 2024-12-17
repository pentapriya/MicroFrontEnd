import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import TeamDetails from './TeamDetails';


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const teamDetails = TeamDetails

const PieChart = () => {
  
  const taskStatusCount = { open: 0, "in progress": 0, completed: 0 };

  
  teamDetails.forEach(member => {
    member.tasks.forEach(task => {
      taskStatusCount[task.status]++;
    });
  });

 
  const data = {
    labels: ['Open', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [taskStatusCount.open, taskStatusCount["in progress"], taskStatusCount.completed],
        backgroundColor: ['#FF6384', '#36A2EB', '#4CAF50'], 
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#4CAF50'],
      },
    ],
  };

 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          }
        }
      }
    },
  };

  return (
    <div className="pie-chart-container">
      <h2>Task Status Distribution</h2>
      <Pie data={data} options={options} className="pie-chart"/>
    </div>
  );
};

export default PieChart;
