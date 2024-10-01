import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ExpenseChart({ income = 0, expense = 0 }) {
  const chartContainer = useRef(null);  // Single ref for both canvas and chart

  useEffect(() => {
    // Ensure that chartContainer.current is not null
    if (!chartContainer.current) return;

    const ctx = chartContainer.current.getContext('2d');  // Get canvas context

    // Destroy the chart instance if it exists
    if (chartContainer.current.chartInstance) {
      chartContainer.current.chartInstance.destroy();
    }

    const data = income || expense ? [income, expense] : [0, 0];  // Use default [0, 0] when no data

    // Create the chart instance
    chartContainer.current.chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Income', 'Expense'],
        datasets: [{
          label: 'Income and Expense Ratio',
          data: data,
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
          hoverOffset: 4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw || 0}%`
            }
          }
        }
      }
    });

    return () => {
      // Clean up the chart instance if it exists
      if (chartContainer.current?.chartInstance) {
        chartContainer.current.chartInstance.destroy();
      }
    };
  }, [income, expense]);

  return (
    <div>
      <canvas ref={chartContainer}></canvas>  {/* Attach ref to canvas */}
    </div>
  );
}

export default ExpenseChart;
