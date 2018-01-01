var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
var QRCode = (function () {
    function QRCode(el) {
        this.el = el;
        this.background = 'white';
        this.backgroundAlpha = 1.0;
        this.foreground = 'black';
        this.foregroundAlpha = 1.0;
        this.level = 'L';
        this.mime = 'image/png';
        this.padding = null;
        this.size = 100;
        this.initialized = false;
    }
    QRCode.prototype.ngOnInit = function () {
    };
    QRCode.prototype.ngAfterViewChecked = function () {
        if (!this.initialized) {
            this.init();
        }
    };
    QRCode.prototype.init = function () {
        this.initialized = true;
        var qrObject = {
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
    };
    QRCode.prototype.ngOnDestroy = function () {
        this.qrcode = null;
        this.initialized = false;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], QRCode.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], QRCode.prototype, "background", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], QRCode.prototype, "backgroundAlpha", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], QRCode.prototype, "foreground", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], QRCode.prototype, "foregroundAlpha", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], QRCode.prototype, "level", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], QRCode.prototype, "mime", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], QRCode.prototype, "padding", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], QRCode.prototype, "size", void 0);
    __decorate([
        ViewChild('qrcode'),
        __metadata("design:type", ElementRef)
    ], QRCode.prototype, "containerViewChild", void 0);
    QRCode = __decorate([
        Component({
            selector: 'pe-qrcode',
            template: "<div class=\"ui-widget ui-corner-all\">\n                <canvas #qrcode></canvas>\n                </div>"
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], QRCode);
    return QRCode;
}());
export { QRCode };
//# sourceMappingURL=qrcode.component.js.map