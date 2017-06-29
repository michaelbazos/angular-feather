import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-triangle',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/triangle.svg'
})
export class IconTriangleComponent {}

@NgModule({
  declarations: [ IconTriangleComponent ],
  exports: [ IconTriangleComponent ]
})
export class IconTriangle {}
