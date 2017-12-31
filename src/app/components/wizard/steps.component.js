var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChildren, QueryList, EventEmitter, Input, Output } from '@angular/core';
import { StepComponent } from './step.component';
var StepsComponent = (function () {
    function StepsComponent() {
        this.activeIndex = 0;
        this.activeIndexChange = new EventEmitter();
        this.change = new EventEmitter();
        this.items = [];
    }
    StepsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.steps.toArray().forEach(function (step, index) {
            if (!step.styleClass) {
                // set style class if it was not set on step component directly
                step.styleClass = _this.stepClass;
            }
            if (index === _this.activeIndex) {
                // show this step on init
                step.active = true;
            }
            _this.items[index] = {
                label: step.label,
                command: function (event) {
                    // hide all steps
                    _this.steps.toArray().forEach(function (s) { return s.active = false; });
                    // show the step the user has clicked on.
                    step.active = true;
                    _this.activeIndex = index;
                    // emit currently selected index (two-way binding)
                    _this.activeIndexChange.emit(index);
                    // emit currently selected label
                    _this.change.next(step.label);
                }
            };
        });
    };
    StepsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this.steps) {
            // we could also check changes['activeIndex'].isFirstChange()
            return;
        }
        var _loop_1 = function (prop) {
            if (prop === 'activeIndex') {
                var curIndex_1 = changes[prop].currentValue;
                this_1.steps.toArray().forEach(function (step, index) {
                    // show / hide the step
                    var selected = index === curIndex_1;
                    step.active = selected;
                    if (selected) {
                        // emit currently selected label
                        _this.change.next(step.label);
                    }
                });
            }
        };
        var this_1 = this;
        for (var prop in changes) {
            _loop_1(prop);
        }
    };
    StepsComponent.prototype.previous = function () {
        this.activeIndex--;
        // emit currently selected index (two-way binding)
        this.activeIndexChange.emit(this.activeIndex);
        // show / hide steps and emit selected label
        this.ngOnChanges({
            activeIndex: {
                currentValue: this.activeIndex,
                previousValue: this.activeIndex + 1,
                firstChange: false,
                isFirstChange: function () { return false; }
            }
        });
    };
    StepsComponent.prototype.next = function () {
        this.activeIndex++;
        // emit currently selected index (two-way binding)
        this.activeIndexChange.emit(this.activeIndex);
        // show / hide steps and emit selected label
        this.ngOnChanges({
            activeIndex: {
                currentValue: this.activeIndex,
                previousValue: this.activeIndex - 1,
                firstChange: false,
                isFirstChange: function () { return false; }
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], StepsComponent.prototype, "activeIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], StepsComponent.prototype, "styleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], StepsComponent.prototype, "stepClass", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], StepsComponent.prototype, "activeIndexChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], StepsComponent.prototype, "change", void 0);
    __decorate([
        ContentChildren(StepComponent),
        __metadata("design:type", QueryList)
    ], StepsComponent.prototype, "steps", void 0);
    StepsComponent = __decorate([
        Component({
            selector: 'pe-steps',
            template: "\n        <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\"\n            [class]=\"styleClass\" [readonly]=\"false\"></p-steps>            \n        <ng-content></ng-content>\n        <button pButton type=\"text\" *ngIf=\"activeIndex > 0\"\n            (click)=\"previous()\" icon=\"fa-hand-o-left\" label=\"Previous\"></button>\n        <button pButton type=\"text\" *ngIf=\"activeIndex < items.length - 1\"\n            (click)=\"next()\" icon=\"fa-hand-o-right\" iconPos=\"right\" label=\"Next\"></button>\n    "
        })
    ], StepsComponent);
    return StepsComponent;
}());
export { StepsComponent };
//# sourceMappingURL=steps.component.js.map