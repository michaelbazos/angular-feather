import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-unlock',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-unlock">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
  </svg>`
})
export class IconUnlockComponent {}

@NgModule({
  declarations: [ IconUnlockComponent ],
  exports: [ IconUnlockComponent ]
})
export class IconUnlock {}
