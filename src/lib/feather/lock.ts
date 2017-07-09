import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-lock',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/lock.svg'
})
export class IconLockComponent {}

@NgModule({
  declarations: [ IconLockComponent ],
  exports: [ IconLockComponent ]
})
export class IconLock {}
