import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BadgeDemoComponent} from './badgedemo';
import {BadgeDemoRoutingModule} from './badgedemo-routing.module';
import {BadgeModule} from '../../../components/badge/badge';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BadgeDemoRoutingModule,
    BadgeModule,
    ButtonModule,
    CodeHighlighterModule
  ],
  declarations: [
    BadgeDemoComponent
  ]
})
export class BadgeDemoModule {
}
