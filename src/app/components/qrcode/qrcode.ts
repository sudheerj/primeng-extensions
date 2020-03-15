import {
  NgModule,
  Component,
  ElementRef,
  OnDestroy,
  Input,
  OnInit,
  ViewChild, AfterViewChecked
} from '@angular/core';
import {CommonModule} from '@angular/common';

declare var QRious: any;

@Component({
  selector: 'pe-qrcode',
  template: `
    <div class="ui-widget ui-corner-all">
      <canvas #qrcode></canvas>
    </div>`
})
export class QRCodeComponent implements OnDestroy, OnInit, AfterViewChecked {

  @Input() value: string;

  @Input() background = 'white';

  @Input() backgroundAlpha = 1.0;

  @Input() foreground = 'black';

  @Input() foregroundAlpha = 1.0;

  @Input() level = 'L';

  @Input() mime = 'image/png';

  @Input() padding: number = null;

  @Input() size = 100;

  @ViewChild('qrcode') containerViewChild: ElementRef;

  qrcode: null;

  initialized: boolean;

  ngOnInit() {
    this.initialized = false;
  }

  ngAfterViewChecked() {
    if (!this.initialized) {
      this.init();
    }
  }

  init() {
    this.initialized = true;
    const qrObject = {
      element: this.containerViewChild.nativeElement,
      background: this.background,
      backgroundAlpha: this.backgroundAlpha,
      foreground: this.foreground,
      foregroundAlpha: this.foregroundAlpha,
      level: this.level,
      mime: this.mime,
      padding: this.padding,
      size: this.size,
      value: this.value
    };
    this.qrcode = new QRious(qrObject);
  }

  ngOnDestroy() {
    this.qrcode = null;
    this.initialized = false;
  }

}

@NgModule({
  imports: [CommonModule],
  exports: [QRCodeComponent],
  declarations: [QRCodeComponent]
})
export class QRCodeModule {
}

