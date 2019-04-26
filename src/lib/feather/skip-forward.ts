import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-skip-forward',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-skip-forward">
    <polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>
  </svg>`
})
export class IconSkipForwardComponent {}

@NgModule({
  declarations: [ IconSkipForwardComponent ],
  entryComponents: [ IconSkipForwardComponent ],
  exports: [ IconSkipForwardComponent ]
})
export class IconSkipForward {}
