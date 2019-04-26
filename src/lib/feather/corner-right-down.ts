import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-corner-right-down',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-right-down">
    <polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
  </svg>`
})
export class IconCornerRightDownComponent {}

@NgModule({
  declarations: [ IconCornerRightDownComponent ],
  entryComponents: [ IconCornerRightDownComponent ],
  exports: [ IconCornerRightDownComponent ]
})
export class IconCornerRightDown {}
