import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-printer',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/printer.svg'
})
export class IconPrinterComponent {}

@NgModule({
  declarations: [ IconPrinterComponent ],
  exports: [ IconPrinterComponent ]
})
export class IconPrinter {}
