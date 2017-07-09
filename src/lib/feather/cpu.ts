import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-cpu',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/cpu.svg'
})
export class IconCpuComponent {}

@NgModule({
  declarations: [ IconCpuComponent ],
  exports: [ IconCpuComponent ]
})
export class IconCpu {}
