import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-navigation',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-navigation">
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
  </svg>`
})
export class IconNavigationComponent {}

@NgModule({
  declarations: [ IconNavigationComponent ],
  exports: [ IconNavigationComponent ]
})
export class IconNavigation {}
