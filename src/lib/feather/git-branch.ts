import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-git-branch',
  styles: [`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-branch">
    <line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>`
})
export class IconGitBranchComponent {}

@NgModule({
  declarations: [ IconGitBranchComponent ],
  entryComponents: [ IconGitBranchComponent ],
  exports: [ IconGitBranchComponent ]
})
export class IconGitBranch {}
