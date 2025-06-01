import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export function TechStackPieChart() {
  const data = {
    labels: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Vite'],
    datasets: [
      {
        label: 'Tech Stack Usage',
        data: [35, 25, 20, 10, 10],
        backgroundColor: [
          '#61dafb',
          '#38bdf8',
          '#e1306c',
          '#ffcd56',
          '#9966ff',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#fff'
        }
      },
      title: {
        display: true,
        text: 'Tech Stack Breakdown',
        color: '#FFD700',
        font: {
          size: 18
        }
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export function TimelineBarChart() {
  const data = {
    labels: ['Plan', 'Design', 'Build', 'Refine', 'Launch'],
    datasets: [
      {
        label: 'Days Spent',
        data: [1, 2, 3, 2, 1],
        backgroundColor: ['#6c5ce7', '#00b894', '#0984e3', '#fdcb6e', '#e17055'],
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Project Timeline (days)',
        color: '#FFD700',
        font: {
          size: 18
        }
      },
    },
    scales: {
      x: {
        ticks: { color: '#fff' },
        grid: { color: '#333' },
      },
      y: {
        ticks: { color: '#fff' },
        grid: { color: '#333' },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
