var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';
import { StepsComponent } from './steps.component';
import { ButtonModule } from 'primeng/components/button/button';
import { StepsModule } from 'primeng/components/steps/steps';
var WizardModule = (function () {
    function WizardModule() {
    }
    WizardModule = __decorate([
        NgModule({
            imports: [CommonModule, ButtonModule, StepsModule],
            exports: [StepComponent, StepsComponent],
            declarations: [StepComponent, StepsComponent]
        })
    ], WizardModule);
    return WizardModule;
}());
export { WizardModule };
//# sourceMappingURL=wizard.module.js.map