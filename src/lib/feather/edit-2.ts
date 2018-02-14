import { Component } from '@angular/core';

@Component({
  selector: 'i-edit-2',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit-2">
    <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
  </svg>`
})
export class IconEdit2 {}
