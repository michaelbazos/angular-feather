import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-bookmark',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bookmark">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>`
})
export class IconBookmarkComponent {}

@NgModule({
  declarations: [ IconBookmarkComponent ],
  entryComponents: [ IconBookmarkComponent ],
  exports: [ IconBookmarkComponent ]
})
export class IconBookmark {}
