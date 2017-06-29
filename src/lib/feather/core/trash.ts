import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-trash',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/trash.svg'
})
export class IconTrashComponent {}

@NgModule({
  declarations: [ IconTrashComponent ],
  exports: [ IconTrashComponent ]
})
export class IconTrash {}
