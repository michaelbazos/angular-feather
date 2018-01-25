import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-terminal',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/terminal.svg'
})
export class IconTerminalComponent {}

@NgModule({
  declarations: [ IconTerminalComponent ],
  exports: [ IconTerminalComponent ]
})
export class IconTerminal {}
