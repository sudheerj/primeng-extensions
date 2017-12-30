import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {BadgeDemo} from './badgedemo';
import {BadgeDemoRoutingModule} from './badgedemo-routing.module';
import {BadgeModule} from '../../../components/badge/badge.module';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		BadgeDemoRoutingModule,
        BadgeModule,
        CodeHighlighterModule
	],
	declarations: [
		BadgeDemo
	]
})
export class BadgeDemoModule {}
