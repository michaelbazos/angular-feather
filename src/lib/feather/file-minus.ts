import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-file-minus',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-minus">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>
  </svg>`
})
export class IconFileMinusComponent {}

@NgModule({
  declarations: [ IconFileMinusComponent ],
  entryComponents: [ IconFileMinusComponent ],
  exports: [ IconFileMinusComponent ]
})
export class IconFileMinus {}
