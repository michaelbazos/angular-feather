import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-minimize-2',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minimize-2">
    <polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>`
})
export class IconMinimize2Component {}

@NgModule({
  declarations: [ IconMinimize2Component ],
  entryComponents: [ IconMinimize2Component ],
  exports: [ IconMinimize2Component ]
})
export class IconMinimize2 {}
