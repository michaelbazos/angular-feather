import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-music',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-music">
    <path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>
  </svg>`
})
export class IconMusicComponent {}

@NgModule({
  declarations: [ IconMusicComponent ],
  exports: [ IconMusicComponent ]
})
export class IconMusic {}
