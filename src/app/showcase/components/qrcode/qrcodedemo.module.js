var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeDemo } from './qrcodedemo';
import { QRCodeDemoRoutingModule } from './qrcodedemo-routing.module';
import { QRCodeModule } from '../../../components/qrcode/qrcode.module';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';
var QRCodeDemoModule = (function () {
    function QRCodeDemoModule() {
    }
    QRCodeDemoModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                QRCodeDemoRoutingModule,
                QRCodeModule,
                CodeHighlighterModule,
            ],
            declarations: [
                QRCodeDemo
            ]
        })
    ], QRCodeDemoModule);
    return QRCodeDemoModule;
}());
export { QRCodeDemoModule };
//# sourceMappingURL=qrcodedemo.module.js.map