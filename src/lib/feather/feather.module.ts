import { NgModule, ModuleWithProviders, Optional } from '@angular/core';
import { FeatherComponent } from './feather.component';
import { Icons } from './icons.provider';


@NgModule({
  declarations: [
    FeatherComponent
  ],
  exports: [
    FeatherComponent
  ]
})
export class FeatherModule {
  constructor(
    @Optional() private icons: Icons
  ) {
    if ( !this.icons ) {
      throw new Error(
        `No icon provided. Make sure to use 'FeatherModule.pick({ ... })' when importing the module\n` +
        `Refer to documentation on https://github.com/michaelbazos/angular-feather`
      );
    }
  }

  static pick(icons: {[key: string]: string}): ModuleWithProviders {
    return {
      ngModule: FeatherModule,
      providers: [
        { provide: Icons, multi: true, useValue: icons }
      ]
    };
  }
}
