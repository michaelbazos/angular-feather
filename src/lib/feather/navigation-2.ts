import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-navigation-2',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-navigation-2">
    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
  </svg>`
})
export class IconNavigation2Component {}

@NgModule({
  declarations: [ IconNavigation2Component ],
  exports: [ IconNavigation2Component ]
})
export class IconNavigation2 {}
