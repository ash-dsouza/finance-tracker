import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Entry {
  date: string;
  desc: string;
  category: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class EntryService {

 private entriesSubject = new BehaviorSubject<Entry[]>([]);
  entries$ = this.entriesSubject.asObservable();

  constructor() {}

  addEntry(entry: Entry): void {
    const current = this.entriesSubject.value;
    this.entriesSubject.next([...current, entry]);
  }

  getEntries(): Entry[] {
    return this.entriesSubject.value;
  }
}
