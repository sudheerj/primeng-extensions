webpackJsonp(["qrcodedemo.module"],{

/***/ "../../../../../src/app/components/qrcode/qrcode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QRCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeModule; });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QRCode.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QRCode.prototype, "background", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], QRCode.prototype, "backgroundAlpha", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QRCode.prototype, "foreground", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], QRCode.prototype, "foregroundAlpha", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QRCode.prototype, "level", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QRCode.prototype, "mime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], QRCode.prototype, "padding", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], QRCode.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('qrcode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], QRCode.prototype, "containerViewChild", void 0);
    QRCode = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pe-qrcode',
            template: "\n    <div class=\"ui-widget ui-corner-all\">\n      <canvas #qrcode></canvas>\n    </div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], QRCode);
    return QRCode;
}());

var QRCodeModule = (function () {
    function QRCodeModule() {
    }
    QRCodeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            exports: [QRCode],
            declarations: [QRCode]
        })
    ], QRCodeModule);
    return QRCodeModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/qrcode/qrcodedemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcodedemo__ = __webpack_require__("../../../../../src/app/showcase/components/qrcode/qrcodedemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QRCodeDemoRoutingModule = (function () {
    function QRCodeDemoRoutingModule() {
    }
    QRCodeDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__qrcodedemo__["a" /* QRCodeDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], QRCodeDemoRoutingModule);
    return QRCodeDemoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/qrcode/qrcodedemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">QRCode</span>\n        <span>A QRCode is a machine-readable optical label that contains information about the item to which it is attached.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Customized QRCode</h3>\n  <pe-qrcode value=\"https://github.com/sudheerj/primeng-extensions\" size=\"300\"  background=\"lightblue\" backgroundAlpha=\"0.7\" foreground=\"black\" foregroundAlpha=\"0.7\"></pe-qrcode>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/showcase/components/qrcode/qrcodedemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeDemoModule", function() { return QRCodeDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcodedemo__ = __webpack_require__("../../../../../src/app/showcase/components/qrcode/qrcodedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qrcodedemo_routing_module__ = __webpack_require__("../../../../../src/app/showcase/components/qrcode/qrcodedemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_qrcode_qrcode__ = __webpack_require__("../../../../../src/app/components/qrcode/qrcode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_codehighlighter_codehighlighter__ = __webpack_require__("../../../../primeng/components/codehighlighter/codehighlighter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_codehighlighter_codehighlighter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_codehighlighter_codehighlighter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QRCodeDemoModule = (function () {
    function QRCodeDemoModule() {
    }
    QRCodeDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__qrcodedemo_routing_module__["a" /* QRCodeDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_qrcode_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_components_codehighlighter_codehighlighter__["CodeHighlighterModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qrcodedemo__["a" /* QRCodeDemo */]
            ]
        })
    ], QRCodeDemoModule);
    return QRCodeDemoModule;
}());



/***/ }),

/***/ "../../../../../src/app/showcase/components/qrcode/qrcodedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QRCodeDemo = (function () {
    function QRCodeDemo() {
    }
    QRCodeDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/showcase/components/qrcode/qrcodedemo.html")
        })
    ], QRCodeDemo);
    return QRCodeDemo;
}());



/***/ })

});
//# sourceMappingURL=qrcodedemo.module.chunk.js.map