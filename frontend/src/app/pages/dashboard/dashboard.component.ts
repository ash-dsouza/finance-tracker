import { Component } from '@angular/core';
import {
  ChartConfiguration,
  ChartData
} from 'chart.js';
import { Entry, EntryService } from 'src/app/services/entry.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  entries: Entry[] = [];
  totalEntries = 0;
  monthlySpending = 0;
  today = new Date();

  constructor(private entryService: EntryService) {}

  ngOnInit(): void {
    this.entryService.entries$.subscribe((entries) => {
      this.entries = entries;
      this.totalEntries = entries.length;

      const currentMonth = new Date().getMonth();
      this.monthlySpending = entries
        .filter(e => new Date(e.date).getMonth() === currentMonth)
        .reduce((sum, e) => sum + e.amount, 0);
    });
  }

  // today = new Date();
  // totalEntries = 24;
  // monthlySpending = 1835;



  // // Info cards content
  dashboardCards = [
    { title: 'Total Entries', value: this.totalEntries },
    { title: 'Monthly Spending', value: `₹${this.monthlySpending}` },
    { title: 'Today', value: this.today.toDateString() }
  ];

  // // Bar chart labels and data
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

  // // Transactions data
  get recentTransactions() {
    return this.entries.slice(-5).reverse(); // last 5 entries, newest first
  }


  

}
