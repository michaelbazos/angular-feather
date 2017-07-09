import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-share',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/share.svg'
})
export class IconShareComponent {}

@NgModule({
  declarations: [ IconShareComponent ],
  exports: [ IconShareComponent ]
})
export class IconShare {}
