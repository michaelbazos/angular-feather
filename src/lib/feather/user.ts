import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-user',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>`
})
export class IconUserComponent {}

@NgModule({
  declarations: [ IconUserComponent ],
  entryComponents: [ IconUserComponent ],
  exports: [ IconUserComponent ]
})
export class IconUser {}
