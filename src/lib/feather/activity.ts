import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-activity',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-activity">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>`
})
export class IconActivityComponent {}

@NgModule({
  declarations: [ IconActivityComponent ],
  exports: [ IconActivityComponent ]
})
export class IconActivity {}
