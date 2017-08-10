import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-crop',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/crop.svg'
})
export class IconCropComponent {}

@NgModule({
  declarations: [ IconCropComponent ],
  exports: [ IconCropComponent ]
})
export class IconCrop {}
