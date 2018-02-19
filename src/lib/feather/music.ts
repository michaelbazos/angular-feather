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
    <path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path><polyline points="9 17 9 5 21 3 21 15"></polyline>
  </svg>`
})
export class IconMusicComponent {}

@NgModule({
  declarations: [ IconMusicComponent ],
  exports: [ IconMusicComponent ]
})
export class IconMusic {}
