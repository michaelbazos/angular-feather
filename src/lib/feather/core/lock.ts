import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-lock',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/lock.svg'
})
export class IconLockComponent {}

@NgModule({
  declarations: [ IconLockComponent ],
  exports: [ IconLockComponent ]
})
export class IconLock {}
