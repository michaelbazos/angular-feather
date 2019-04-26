import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-shuffle',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shuffle">
    <polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>
  </svg>`
})
export class IconShuffleComponent {}

@NgModule({
  declarations: [ IconShuffleComponent ],
  entryComponents: [ IconShuffleComponent ],
  exports: [ IconShuffleComponent ]
})
export class IconShuffle {}
