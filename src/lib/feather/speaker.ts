import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-speaker',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-speaker">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>
  </svg>`
})
export class IconSpeakerComponent {}

@NgModule({
  declarations: [ IconSpeakerComponent ],
  exports: [ IconSpeakerComponent ]
})
export class IconSpeaker {}
