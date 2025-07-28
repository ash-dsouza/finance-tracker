import { Component } from '@angular/core';
import {
  ChartConfiguration,
  ChartData
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

  // Info cards content
  dashboardCards = [
    { title: 'Total Entries', value: this.totalEntries },
    { title: 'Monthly Spending', value: `₹${this.monthlySpending}` },
    { title: 'Today', value: this.today.toDateString() }
  ];

  // Bar chart labels and data
  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [650, 590, 800, 810, 560, 450],
        label: 'Spending ₹',
        backgroundColor: '#4e73df',
        hoverBackgroundColor: '#2e59d9',
        borderRadius: 5,
        barThickness: 30
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
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

  // Transactions data
  transactions = [
    { date: '2025-06-01', desc: 'Groceries', amt: 550 },
    { date: '2025-06-10', desc: 'Electricity Bill', amt: 950 },
    { date: '2025-06-16', desc: 'Internet', amt: 335 }
  ];
}
