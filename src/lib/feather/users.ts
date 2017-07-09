import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-users',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/users.svg'
})
export class IconUsersComponent {}

@NgModule({
  declarations: [ IconUsersComponent ],
  exports: [ IconUsersComponent ]
})
export class IconUsers {}
