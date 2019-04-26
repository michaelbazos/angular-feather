import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-rss',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rss">
    <path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>
  </svg>`
})
export class IconRssComponent {}

@NgModule({
  declarations: [ IconRssComponent ],
  entryComponents: [ IconRssComponent ],
  exports: [ IconRssComponent ]
})
export class IconRss {}
