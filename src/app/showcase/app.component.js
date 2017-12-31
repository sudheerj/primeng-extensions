var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
var AppComponent = (function () {
    function AppComponent() {
        this.notification = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.notification = true; }, 1000);
    };
    AppComponent.prototype.changeTheme = function (event, theme) {
        var themeLink = document.getElementById('theme-css');
        themeLink.href = 'assets/components/themes/' + theme + '/theme.css';
        event.preventDefault();
    };
    AppComponent.prototype.onMenuButtonClick = function (event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    };
    AppComponent.prototype.closeNotification = function (event) {
        this.notification = false;
        event.preventDefault();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            animations: [
                trigger('overlayState', [
                    state('hidden', style({
                        opacity: 0
                    })),
                    state('visible', style({
                        opacity: 1
                    })),
                    transition('visible => hidden', animate('400ms ease-in')),
                    transition('hidden => visible', animate('400ms ease-out'))
                ]),
                trigger('notificationTopbar', [
                    state('hidden', style({
                        height: '0',
                        opacity: 0
                    })),
                    state('visible', style({
                        height: '*',
                        opacity: 1
                    })),
                    transition('visible => hidden', animate('400ms ease-in')),
                    transition('hidden => visible', animate('400ms ease-out'))
                ])
            ],
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map