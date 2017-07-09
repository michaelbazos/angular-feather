import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-github',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/github.svg'
})
export class IconGithubComponent {}

@NgModule({
  declarations: [ IconGithubComponent ],
  exports: [ IconGithubComponent ]
})
export class IconGithub {}
