import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-download-cloud',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-download-cloud">
    <polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
  </svg>`
})
export class IconDownloadCloudComponent {}

@NgModule({
  declarations: [ IconDownloadCloudComponent ],
  exports: [ IconDownloadCloudComponent ]
})
export class IconDownloadCloud {}
