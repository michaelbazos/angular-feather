import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-feather',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-feather">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>
  </svg>`
})
export class IconFeatherComponent {}

@NgModule({
  declarations: [ IconFeatherComponent ],
  entryComponents: [ IconFeatherComponent ],
  exports: [ IconFeatherComponent ]
})
export class IconFeather {}
