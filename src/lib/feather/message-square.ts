import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-message-square',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-message-square">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>`
})
export class IconMessageSquareComponent {}

@NgModule({
  declarations: [ IconMessageSquareComponent ],
  entryComponents: [ IconMessageSquareComponent ],
  exports: [ IconMessageSquareComponent ]
})
export class IconMessageSquare {}
