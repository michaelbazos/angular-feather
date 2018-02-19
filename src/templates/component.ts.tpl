import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-__ICON_NAME__',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-__ICON_NAME__">
    __PAYLOAD__
  </svg>`
})
export class __COMPONENT_NAME__ {}

@NgModule({
  declarations: [ __COMPONENT_NAME__ ],
  exports: [ __COMPONENT_NAME__ ]
})
export class __MODULE_NAME__ {}
