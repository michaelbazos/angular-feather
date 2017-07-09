import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-upload',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/upload.svg'
})
export class IconUploadComponent {}

@NgModule({
  declarations: [ IconUploadComponent ],
  exports: [ IconUploadComponent ]
})
export class IconUpload {}
