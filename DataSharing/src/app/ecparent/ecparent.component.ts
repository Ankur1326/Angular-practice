import { Component, OnInit, ViewChild } from '@angular/core';
import { EcchildComponent } from './ecchild/ecchild.component';

@Component({
  selector: 'app-ecparent',
  templateUrl: './ecparent.component.html',
  styleUrls: ['./ecparent.component.css']
})
export class EcparentComponent implements OnInit {

  @ViewChild(EcchildComponent)
  private counterComponent: EcchildComponent;
  seconds() { return 0; }
  ngOnInit() {

  }
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.counterComponent.seconds, 0);
  }
  start() { this.counterComponent.start(); }
  stop() { this.counterComponent.stop(); }
}