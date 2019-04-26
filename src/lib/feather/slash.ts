import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-slash',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-slash">
    <circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
  </svg>`
})
export class IconSlashComponent {}

@NgModule({
  declarations: [ IconSlashComponent ],
  entryComponents: [ IconSlashComponent ],
  exports: [ IconSlashComponent ]
})
export class IconSlash {}
