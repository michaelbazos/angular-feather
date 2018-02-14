import { Component } from '@angular/core';

@Component({
  selector: 'i-stop-circle',
  styles: [`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-stop-circle">
    <circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>
  </svg>`
})
export class IconStopCircle {}
