import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {BadgeDemo} from './badgedemo';
import {BadgeDemoRoutingModule} from './badgedemo-routing.module';
import {BadgeModule} from 'primeng-extensions/components/badge/badge';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';
import {ButtonModule} from 'primeng/components/button/button';

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
    BadgeDemo
  ]
})
export class BadgeDemoModule {
}
