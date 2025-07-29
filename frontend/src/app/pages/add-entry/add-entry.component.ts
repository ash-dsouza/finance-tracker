import { Component } from '@angular/core';
import { EntryService } from 'src/app/services/entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent {
  entry = {
    title: '',
    amount: null,
    category: '',
    date: ''
  };

  categories: string[] = [
    'Food & Dining',
    'Utilities',
    'Rent',
    'Entertainment',
    'Transportation',
    'Healthcare',
    'Education',
    'Savings',
    'Miscellaneous'
  ];

  constructor(private entryService: EntryService, private router: Router) {}

  onSubmit(): void {
    // Map title → desc to match the service interface
    const entryToAdd = {
      desc: this.entry.title,
      amount: Number(this.entry.amount),
      category: this.entry.category,
      date: this.entry.date
    };

    this.entryService.addEntry(entryToAdd);
    alert('Entry added!');
    this.router.navigate(['/dashboard']);
  }
}
