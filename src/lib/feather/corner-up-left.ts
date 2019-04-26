import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-corner-up-left',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-up-left">
    <polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
  </svg>`
})
export class IconCornerUpLeftComponent {}

@NgModule({
  declarations: [ IconCornerUpLeftComponent ],
  entryComponents: [ IconCornerUpLeftComponent ],
  exports: [ IconCornerUpLeftComponent ]
})
export class IconCornerUpLeft {}
