import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Badge} from './badge.component';

@NgModule({
    imports: [CommonModule],
    exports: [Badge],
    declarations: [Badge]
})
export class BadgeModule {
}
