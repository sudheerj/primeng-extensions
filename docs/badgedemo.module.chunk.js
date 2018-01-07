webpackJsonp(["badgedemo.module"],{

/***/ "../../../../../src/app/components/badge/badge.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Badge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        return (this.data() || this.dot);
    };
    Badge.prototype.ngOnDestroy = function () {
    };
    Badge.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Badge.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], Badge.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], Badge.prototype, "dot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], Badge.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], Badge.prototype, "badgeClass", void 0);
    Badge = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pe-badge',
            template: "<div class=\"ui-badge ui-position\">\n        <ng-content></ng-content>\n        <span *ngIf=\"display()\"\n                [class]=\"badgeClass\" [ngStyle]=\"{'background-color': backgroundColor}\"\n                [ngClass]=\"{'ui-widget ui-widget-content ui-corner-all ui-badge-content':true,'fixed': true, 'dot': dot }\">\n            {{data()}}\n      </span>\n    </div>",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], Badge);
    return Badge;
}());

var BadgeModule = (function () {
    function BadgeModule() {
    }
    BadgeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            exports: [Badge],
            declarations: [Badge]
        })
    ], BadgeModule);
    return BadgeModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/badge/badgedemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__badgedemo__ = __webpack_require__("../../../../../src/app/showcase/components/badge/badgedemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BadgeDemoRoutingModule = (function () {
    function BadgeDemoRoutingModule() {
    }
    BadgeDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__badgedemo__["a" /* BadgeDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], BadgeDemoRoutingModule);
    return BadgeDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/badge/badgedemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Badge</span>\n        <span>A number or status mark on form components.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Numbers</h3>\n    <pe-badge value=\"100\">\n        <button pButton type=\"button\" icon=\"fa-thumbs-up\" label=\"Likes\"></button>\n    </pe-badge>\n    <pe-badge value=\"50\">\n        <button pButton type=\"button\" icon=\"fa-thumbs-down\" label=\"Dislikes\"></button>\n    </pe-badge>\n\n    <h3 class=\"first\">Color</h3>\n    <pe-badge value=\"100\" backgroundColor=\"red\">\n        <button pButton type=\"button\" icon=\"fa-thumbs-up\" label=\"Likes\"></button>\n    </pe-badge>\n    <pe-badge value=\"50\" backgroundColor=\"blue\">\n        <button pButton type=\"button\" icon=\"fa-thumbs-down\" label=\"Dislikes\"></button>\n    </pe-badge>\n\n    <h3>Max</h3>\n    <pe-badge value=\"200\" :max=\"100\">\n        <button pButton type=\"button\" icon=\"fa-thumbs-up\" label=\"Likes\"></button>\n    </pe-badge>\n    <pe-badge value=\"100\" :max=\"50\">\n        <button pButton type=\"button\" icon=\"fa-thumbs-down\" label=\"Dislikes\"></button>\n    </pe-badge>\n\n    <h3>Text</h3>\n    <pe-badge value=\"new\">\n        <button pButton type=\"button\" icon=\"fa-comments\" label=\"Comments\"></button>\n    </pe-badge>\n    <pe-badge value=\"old\">\n        <button pButton type=\"button\" icon=\"fa-comments\" label=\"Comments\"></button>\n    </pe-badge>\n\n    <h3>Notify</h3>\n    <pe-badge dot=\"true\">\n        <button pButton type=\"button\" label=\"Alert\"></button>\n    </pe-badge>\n    <pe-badge dot=\"true\">\n        <button pButton type=\"button\" icon=\"fa-exclamation-circle\"></button>\n    </pe-badge>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/badge/badgedemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeDemoModule", function() { return BadgeDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__badgedemo__ = __webpack_require__("../../../../../src/app/showcase/components/badge/badgedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badgedemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/badge/badgedemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_badge_badge__ = __webpack_require__("../../../../../src/app/components/badge/badge.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../primeng/components/codehighlighter/codehighlighter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_codehighlighter_codehighlighter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_components_codehighlighter_codehighlighter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_button_button__ = __webpack_require__("../../../../primeng/components/button/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_components_button_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_components_button_button__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BadgeDemoModule = (function () {
    function BadgeDemoModule() {
    }
    BadgeDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__badgedemo_routing_module__["a" /* BadgeDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_badge_badge__["a" /* BadgeModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_components_button_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_components_codehighlighter_codehighlighter__["CodeHighlighterModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__badgedemo__["a" /* BadgeDemo */]
            ]
        })
    ], BadgeDemoModule);
    return BadgeDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/badge/badgedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BadgeDemo = (function () {
    function BadgeDemo() {
    }
    BadgeDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/showcase/components/badge/badgedemo.html")
        })
    ], BadgeDemo);
    return BadgeDemo;
}());



/***/ })

});
//# sourceMappingURL=badgedemo.module.chunk.js.map