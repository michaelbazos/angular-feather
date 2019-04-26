import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-align-justify',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-justify">
    <line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>
  </svg>`
})
export class IconAlignJustifyComponent {}

@NgModule({
  declarations: [ IconAlignJustifyComponent ],
  entryComponents: [ IconAlignJustifyComponent ],
  exports: [ IconAlignJustifyComponent ]
})
export class IconAlignJustify {}
