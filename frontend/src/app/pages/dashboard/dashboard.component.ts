import { Component } from '@angular/core';
import {
  ChartConfiguration,
  ChartOptions,
  ChartType,
  ChartData,
} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  today = new Date();
  totalEntries = 24;
  monthlySpending = 1835;

  // Correctly specify type as 'bar'
  public barChartType: 'bar' = 'bar';

  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  // Explicit type annotation with 'bar'
  public barChartData: ChartData<'bar', number[], string> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [650, 590, 800, 810, 560, 450],
        label: 'Spending ₹',
        backgroundColor: '#4e73df',
        hoverBackgroundColor: '#2e59d9',
        borderRadius: 4,
        barThickness: 30
      }
    ]
  };

  // Explicit options for 'bar'
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333'
        }
      }
    },
    scales: {
      x: {},
      y: {
        beginAtZero: true
      }
    }
  };

  transactions = [
    { date: '2025-06-01', desc: 'Groceries', amt: 550 },
    { date: '2025-06-10', desc: 'Electricity Bill', amt: 950 },
    { date: '2025-06-16', desc: 'Internet', amt: 335 }
  ];
}
