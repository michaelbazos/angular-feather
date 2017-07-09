import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-image',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/image.svg'
})
export class IconImageComponent {}

@NgModule({
  declarations: [ IconImageComponent ],
  exports: [ IconImageComponent ]
})
export class IconImage {}
