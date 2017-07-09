import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-trash',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/trash.svg'
})
export class IconTrashComponent {}

@NgModule({
  declarations: [ IconTrashComponent ],
  exports: [ IconTrashComponent ]
})
export class IconTrash {}
