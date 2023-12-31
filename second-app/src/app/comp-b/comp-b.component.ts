import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
  providers: [CounterService]
})
export class CompBComponent implements OnInit {

  constructor(private counterSev:CounterService) { }

  ngOnInit(): void {
  }

  showCounter() {
    return this.counterSev.getCounter();
  }

  updateCounter() {
    this.counterSev.updateCounter()
  }

}
