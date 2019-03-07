import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-mouse-pointer',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mouse-pointer">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>
  </svg>`
})
export class IconMousePointerComponent {}

@NgModule({
  declarations: [ IconMousePointerComponent ],
  exports: [ IconMousePointerComponent ]
})
export class IconMousePointer {}
