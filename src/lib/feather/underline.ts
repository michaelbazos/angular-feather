import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-underline',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-underline">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>
  </svg>`
})
export class IconUnderlineComponent {}

@NgModule({
  declarations: [ IconUnderlineComponent ],
  exports: [ IconUnderlineComponent ]
})
export class IconUnderline {}
