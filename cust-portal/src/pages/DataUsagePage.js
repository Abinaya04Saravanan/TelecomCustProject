// src/pages/DataUsagePage.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import './DataUsagePage.css';
import Footer from '../components/Footer';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function DataUsagePage() {
  const [viewMode, setViewMode] = useState('daily'); // daily or hourly
  const [dataUsage, setDataUsage] = useState({});

  useEffect(() => {
    if (viewMode === 'daily') {
      setDataUsage({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Daily Data Usage (GB)',
          data: [2, 3.5, 4.2, 5.8, 6.1, 4.7, 5.5],
          borderColor: '#685a9e',
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(104, 90, 158, 0.4)');
            gradient.addColorStop(1, 'rgba(104, 90, 158, 0)');
            return gradient;
          },
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#685a9e',
          pointHoverBackgroundColor: '#685a9e',
          pointHoverBorderColor: '#fff',
        }],
      });
    } else {
      setDataUsage({
        labels: ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
        datasets: [{
          label: 'Hourly Data Usage (MB)',
          data: [120, 90, 150, 300, 500, 450, 700, 400],
          borderColor: '#4a90e2',
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(74, 144, 226, 0.4)');
            gradient.addColorStop(1, 'rgba(74, 144, 226, 0)');
            return gradient;
          },
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#4a90e2',
          pointHoverBackgroundColor: '#4a90e2',
          pointHoverBorderColor: '#fff',
        }],
      });
    }
  }, [viewMode]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: { color: '#333', font: { size: 14, weight: '500' } }
      },
      tooltip: {
        backgroundColor: '#333',
        titleFont: { size: 14 },
        bodyFont: { size: 13 },
        bodyColor: '#fff'
      }
    },
    scales: {
      x: { ticks: { color: '#555', font: { size: 12 } }, grid: { display: false } },
      y: { ticks: { color: '#555', font: { size: 12 } }, grid: { color: 'rgba(0,0,0,0.1)' } }
    }
  };

  return (
    <div className="data-usage-page">
      <h2 className="title">Data Usage</h2>

      <div className="toggle-buttons">
        <button
          className={`toggle-btn ${viewMode === 'daily' ? 'active' : ''}`}
          onClick={() => setViewMode('daily')}
        >
          Daily
        </button>
        <button
          className={`toggle-btn ${viewMode === 'hourly' ? 'active' : ''}`}
          onClick={() => setViewMode('hourly')}
        >
          Hourly
        </button>
      </div>

      <div className="chart-container">
        <Line data={dataUsage} options={options} />
      </div>
      <Footer />
    </div>
  );
}
