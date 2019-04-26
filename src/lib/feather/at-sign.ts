import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-at-sign',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-at-sign">
    <circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
  </svg>`
})
export class IconAtSignComponent {}

@NgModule({
  declarations: [ IconAtSignComponent ],
  entryComponents: [ IconAtSignComponent ],
  exports: [ IconAtSignComponent ]
})
export class IconAtSign {}
