import {
    NgModule,
    Component,
    ElementRef,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    OnInit,
    ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import Qrious from 'qrious';

@Component({
    selector: 'pe-qrcode',
    template: `<div class="ui-widget ui-corner-all">
                <canvas #qrcode></canvas>
                </div>`
})
export class QRCode implements OnDestroy, OnInit{

    @Input() value: string;

    @Input() background: string = 'white';

    @Input() backgroundAlpha: number = 1.0;

    @Input() foreground: string = 'black';

    @Input() foregroundAlpha: number = 1.0;

    @Input() level: string = 'L';

    @Input() mime: string = 'image/png';

    @Input() padding: number = null;

    @Input() size: number = 100;

    @ViewChild('qrcode') containerViewChild: ElementRef;

    qrcode: null;

    constructor(public el: ElementRef) {

    }

    ngOnInit() {
        this.init();
    }

    init() {
        let qrObject = {
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
        this.qrcode = new Qrious(qrObject);
    }

    ngOnDestroy() {
        this.qrcode = null;
    }

}

