import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-scissors',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-scissors">
    <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>
  </svg>`
})
export class IconScissorsComponent {}

@NgModule({
  declarations: [ IconScissorsComponent ],
  entryComponents: [ IconScissorsComponent ],
  exports: [ IconScissorsComponent ]
})
export class IconScissors {}
