import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-pen-tool',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pen-tool">
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
  </svg>`
})
export class IconPenToolComponent {}

@NgModule({
  declarations: [ IconPenToolComponent ],
  exports: [ IconPenToolComponent ]
})
export class IconPenTool {}
