import { Component, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Icons } from './icons.provider';
import { uppercamelcase } from './utils';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'i-feather, feather-icon',
  templateUrl: './feather.component.html',
  styleUrls: [ './feather.component.scss' ],
})
export class FeatherComponent implements OnChanges {
  @Input() name!: string;

  constructor(
    private elem: ElementRef,
    private changeDetector: ChangeDetectorRef,
    @Inject(Icons) private icons: Icons
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    const svg = icons[ uppercamelcase(changes.name.currentValue) ] || '';

    if (!svg) {
      console.warn(
        `Icon not found: ${changes.name.currentValue}\n` +
        `Refer to documentation on https://github.com/michaelbazos/angular-feather`
      );
    }

    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
