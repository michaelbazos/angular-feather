import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-camera',
  templateUrl: '../../../../node_modules/feather-icons/icons/photo-and-video/camera.svg'
})
export class IconCameraComponent {}

@NgModule({
  declarations: [ IconCameraComponent ],
  exports: [ IconCameraComponent ]
})
export class IconCamera {}
