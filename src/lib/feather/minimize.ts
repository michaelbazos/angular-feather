import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-minimize',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minimize">
    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
  </svg>`
})
export class IconMinimizeComponent {}

@NgModule({
  declarations: [ IconMinimizeComponent ],
  exports: [ IconMinimizeComponent ]
})
export class IconMinimize {}
