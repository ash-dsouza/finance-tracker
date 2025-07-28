import { Component} from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent {
  
  entry = {
    title: '',
    amount: '',
    category:'',
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

  
  entryForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.entryForm = this.fb.group({
      name: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPhone: ['', [Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]]
    
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.entryForm.valid) {
      console.log('Entry Submitted:', this.entryForm.value);
      // Handle API call or state update here
      alert('Entry submitted successfully!');
      this.entryForm.reset();
      this.submitted = false;
    }
  }




}
