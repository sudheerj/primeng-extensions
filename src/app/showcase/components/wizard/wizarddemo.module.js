var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardDemo } from './wizarddemo';
import { WizardDemoRoutingModule } from './wizarddemo-routing.module';
import { WizardModule } from '../../../components/wizard/wizard.module';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { GrowlModule } from 'primeng/components/growl/growl';
import { FormsModule } from '@angular/forms';
import { CodeHighlighterModule } from 'primeng/components/codehighlighter/codehighlighter';
var WizardDemoModule = (function () {
    function WizardDemoModule() {
    }
    WizardDemoModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                WizardDemoRoutingModule,
                WizardModule,
                ButtonModule,
                InputTextModule,
                GrowlModule,
                FormsModule,
                CodeHighlighterModule
            ],
            declarations: [
                WizardDemo
            ]
        })
    ], WizardDemoModule);
    return WizardDemoModule;
}());
export { WizardDemoModule };
//# sourceMappingURL=wizarddemo.module.js.map