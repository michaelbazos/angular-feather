import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-folder',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/folder.svg'
})
export class IconFolderComponent {}

@NgModule({
  declarations: [ IconFolderComponent ],
  exports: [ IconFolderComponent ]
})
export class IconFolder {}
