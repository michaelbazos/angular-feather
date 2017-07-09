import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-check',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/check.svg'
})
export class IconCheckComponent {}

@NgModule({
  declarations: [ IconCheckComponent ],
  exports: [ IconCheckComponent ]
})
export class IconCheck {}
