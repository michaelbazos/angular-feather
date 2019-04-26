import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-book-open',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book-open">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>`
})
export class IconBookOpenComponent {}

@NgModule({
  declarations: [ IconBookOpenComponent ],
  entryComponents: [ IconBookOpenComponent ],
  exports: [ IconBookOpenComponent ]
})
export class IconBookOpen {}
