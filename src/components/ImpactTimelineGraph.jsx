import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ImpactTimelineGraph = ({ incidents }) => {
  const chartRef = useRef();

  const getChartData = () => {
    const labelsSet = new Set();
    const labelToCounts = {};

    incidents.forEach((incident) => {
      const date = new Date(incident.reported_at).toLocaleDateString();

      if (!labelsSet.has(date)) {
        labelsSet.add(date);
        labelToCounts[date] = { High: 0, Medium: 0, Low: 0 };
      }

      labelToCounts[date][incident.severity] += 1;
    });

    const labels = Array.from(labelsSet);
    const highData = labels.map((date) => labelToCounts[date].High);
    const mediumData = labels.map((date) => labelToCounts[date].Medium);
    const lowData = labels.map((date) => labelToCounts[date].Low);

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

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            return `📅 ${tooltipItems[0].label}`;
          },
          label: (tooltipItem) => {
            return `🛑 ${tooltipItem.dataset.label}: ${tooltipItem.formattedValue} incident(s)`;
          },
          afterBody: (tooltipItem) => {
            const spikeThreshold = 5; // Define a threshold for what you consider a "spike"
            const dataValue = tooltipItem[0].raw;
            if (dataValue >= spikeThreshold) {
              return '🚨 High spike detected!';
            }
            return '';
          },
        },
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
      },
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="impact-timeline">
      <h2>🔺 Impact Timeline</h2>
      <Line data={getChartData()} options={chartOptions} ref={chartRef} />
    </div>
  );
};

export default ImpactTimelineGraph;
