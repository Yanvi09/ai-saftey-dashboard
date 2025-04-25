// components/ImpactTimelineGraph.jsx
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ImpactTimelineGraph = ({ incidents }) => {
  const chartRef = useRef();

  // Prepare data for the graph
  const getChartData = () => {
    const labels = [];
    const mediumData = [];
    const highData = [];
    const lowData = [];

    incidents.forEach(incident => {
      const date = new Date(incident.reported_at).toLocaleDateString();
      if (!labels.includes(date)) {
        labels.push(date);
      }

      if (incident.severity === 'High') {
        highData.push(1);
        mediumData.push(0);
        lowData.push(0);
      } else if (incident.severity === 'Medium') {
        highData.push(0);
        mediumData.push(1);
        lowData.push(0);
      } else {
        highData.push(0);
        mediumData.push(0);
        lowData.push(1);
      }
    });

    return {
      labels,
      datasets: [
        {
          label: 'High Severity',
          data: highData,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true,
        },
        {
          label: 'Medium Severity',
          data: mediumData,
          borderColor: 'orange',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          fill: true,
        },
        {
          label: 'Low Severity',
          data: lowData,
          borderColor: 'green',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    };
  };

  return (
    <div className="impact-timeline">
      <h2>🔺 Impact Timeline</h2>
      <Line data={getChartData()} ref={chartRef} />
    </div>
  );
};

export default ImpactTimelineGraph;
