import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-loader',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/loader.svg'
})
export class IconLoaderComponent {}

@NgModule({
  declarations: [ IconLoaderComponent ],
  exports: [ IconLoaderComponent ]
})
export class IconLoader {}
