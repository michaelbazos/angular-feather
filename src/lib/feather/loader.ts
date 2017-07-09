import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-loader',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/loader.svg'
})
export class IconLoaderComponent {}

@NgModule({
  declarations: [ IconLoaderComponent ],
  exports: [ IconLoaderComponent ]
})
export class IconLoader {}
