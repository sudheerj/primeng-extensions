import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {MinusPlusInputDemoComponent} from './minusplusinputdemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: MinusPlusInputDemoComponent}
		])
	],
	exports: [
		RouterModule
	]
})
export class MinusPlusInputDemoRoutingModule {}
