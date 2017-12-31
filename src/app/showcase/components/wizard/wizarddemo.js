var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var WizardDemo = (function () {
    function WizardDemo() {
        this.activeIndex = 0;
        this.msgs = [];
    }
    WizardDemo.prototype.next = function () {
        this.activeIndex++;
    };
    WizardDemo.prototype.ok = function () {
        this.activeIndex = 0;
    };
    WizardDemo.prototype.onChange = function (label) {
        this.msgs.length = 0;
        this.msgs.push({ severity: 'info', summary: label });
    };
    WizardDemo = __decorate([
        Component({
            templateUrl: './wizarddemo.html'
        })
    ], WizardDemo);
    return WizardDemo;
}());
export { WizardDemo };
//# sourceMappingURL=wizarddemo.js.map