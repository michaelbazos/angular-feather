import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-git-branch',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/git-branch.svg'
})
export class IconGitBranchComponent {}

@NgModule({
  declarations: [ IconGitBranchComponent ],
  exports: [ IconGitBranchComponent ]
})
export class IconGitBranch {}
