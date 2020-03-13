import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {WizardDemoComponent} from './wizarddemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path: '', component: WizardDemoComponent}
		])
	],
	exports: [
		RouterModule
	]
})
export class WizardDemoRoutingModule {}
