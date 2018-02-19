import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-log-in',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-log-in">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>
  </svg>`
})
export class IconLogInComponent {}

@NgModule({
  declarations: [ IconLogInComponent ],
  exports: [ IconLogInComponent ]
})
export class IconLogIn {}
