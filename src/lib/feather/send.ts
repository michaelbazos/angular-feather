import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-send',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-send">
    <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>`
})
export class IconSendComponent {}

@NgModule({
  declarations: [ IconSendComponent ],
  entryComponents: [ IconSendComponent ],
  exports: [ IconSendComponent ]
})
export class IconSend {}
