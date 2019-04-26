import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-arrow-left',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-left">
    <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
  </svg>`
})
export class IconArrowLeftComponent {}

@NgModule({
  declarations: [ IconArrowLeftComponent ],
  entryComponents: [ IconArrowLeftComponent ],
  exports: [ IconArrowLeftComponent ]
})
export class IconArrowLeft {}
