import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-trello',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trello">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>
  </svg>`
})
export class IconTrelloComponent {}

@NgModule({
  declarations: [ IconTrelloComponent ],
  entryComponents: [ IconTrelloComponent ],
  exports: [ IconTrelloComponent ]
})
export class IconTrello {}
