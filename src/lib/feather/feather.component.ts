import { Component, ElementRef, Input, OnInit, Inject } from '@angular/core';
import { Icons } from './icons.provider';
import { uppercamelcase } from './utils';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'i-feather, feather-icon',
  templateUrl: './feather.component.html',
  styleUrls: [ './feather.component.scss' ],
})
export class FeatherComponent implements OnInit {

  @Input() name!: string;

  constructor(private elem: ElementRef, @Inject(Icons) private icons: Icons) {}

  ngOnInit() {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    const svg = icons[ uppercamelcase(this.name) ] || '';

    if (!svg) {
      console.warn(
        `Icon not found: ${this.name}\n` +
        `Refer to documentation on https://github.com/michaelbazos/angular-feather`
      );
    }

    this.elem.nativeElement.innerHTML = svg;
  }
}
