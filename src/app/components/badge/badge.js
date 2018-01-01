var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
var Badge = (function () {
    function Badge(el) {
        this.el = el;
        this.backgroundColor = '';
    }
    Badge.prototype.data = function () {
        if (this.dot) {
            return;
        }
        if (typeof this.value === 'number' && typeof this.max === 'number') {
            return this.max < this.value ? this.max + "+" : this.value;
        }
        else {
            return this.value;
        }
    };
    Badge.prototype.display = function () {
        return (this.data || this.dot);
    };
    Badge.prototype.ngOnDestroy = function () {
    };
    Badge.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Badge.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], Badge.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], Badge.prototype, "dot", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Badge.prototype, "backgroundColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Badge.prototype, "badgeClass", void 0);
    Badge = __decorate([
        Component({
            selector: 'pe-badge',
            template: "<div class=\"ui-badge ui-position\">\n        <ng-content></ng-content>\n        <span *ngIf=\"display()\"\n                [class]=\"badgeClass\" [ngStyle]=\"{'background-color': backgroundColor}\"\n                [ngClass]=\"{'ui-widget ui-widget-content ui-corner-all ui-badge-content':true,'fixed': true, 'dot': dot }\">\n            {{data}}\n      </span>\n    </div>",
            styleUrls: [
                'badge.css'
            ],
            encapsulation: ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], Badge);
    return Badge;
}());
export { Badge };
//# sourceMappingURL=badge.component.js.map