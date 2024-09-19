import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const AnalyticsChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Visitors',
        data: [], // Initialize with an empty array
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  useEffect(() => {
    // Fetch data from your API or source
    const fetchData = async () => {
      try {
        // Example of fetching data (replace with your actual data fetching logic)
        const response = await fetch('https://www.googletagmanager.com/gtag/js?id=G-8SHW5BBFQZ');
        const result = await response.json();
        
        // Update state with fetched data
        setData({
          labels: result.labels || [],
          datasets: [
            {
              label: 'Visitors',
              data: result.data || [], // Ensure data is not undefined
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Visitor Analytics</h2>
      <Line data={data} />
    </div>
  );
};

export default AnalyticsChart;
