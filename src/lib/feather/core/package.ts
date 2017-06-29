import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-package',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/package.svg'
})
export class IconPackageComponent {}

@NgModule({
  declarations: [ IconPackageComponent ],
  exports: [ IconPackageComponent ]
})
export class IconPackage {}
