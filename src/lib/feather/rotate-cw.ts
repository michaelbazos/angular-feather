import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-rotate-cw',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rotate-cw">
    <polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
  </svg>`
})
export class IconRotateCwComponent {}

@NgModule({
  declarations: [ IconRotateCwComponent ],
  entryComponents: [ IconRotateCwComponent ],
  exports: [ IconRotateCwComponent ]
})
export class IconRotateCw {}
