import {
  Component,
  ElementRef,
  Input,
  Inject,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from './icons.provider';
import { uppercamelcase } from './utils';

@Component({
  selector: 'i-feather, feather-icon',
  templateUrl: './feather.component.html',
  styleUrls: ['./feather.component.scss'],
})
export class FeatherComponent implements OnChanges {
  @Input() name!: string;

  constructor(
    @Inject(ElementRef) private elem: ElementRef,
    @Inject(ChangeDetectorRef) private changeDetector: ChangeDetectorRef,
    @Inject(Icons) private icons: Icons,
    @Inject(DomSanitizer) private sanitizer: DomSanitizer,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // icons are provided as an array of objects because of "multi: true"
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    const svg = icons[uppercamelcase(changes.name.currentValue)] || '';

    if (!svg) {
      console.warn(
        `Icon not found: ${changes.name.currentValue}\n` +
          `Refer to documentation on https://github.com/michaelbazos/angular-feather`
      );
    }

    // Since the icons are precompiled we can trust them as safe html.
    this.elem.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(svg));

    this.changeDetector.markForCheck();
  }
}
