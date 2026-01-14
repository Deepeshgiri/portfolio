import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsChart = () => {
  const data = {
    labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#0d6efd',
          '#198754',
          '#ffc107',
          '#dc3545',
          '#6f42c1'
        ],
        borderColor: [
          '#0d6efd',
          '#198754',
          '#ffc107',
          '#dc3545',
          '#6f42c1'
        ],
        borderWidth: 2,
        hoverOffset: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    }
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title text-center mb-4">Skills Distribution</h5>
        <div style={{ height: '300px' }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SkillsChart;