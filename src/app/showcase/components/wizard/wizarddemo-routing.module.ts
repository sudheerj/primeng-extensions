import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {WizardDemo} from './wizarddemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: WizardDemo}
		])
	],
	exports: [
		RouterModule
	]
})
export class WizardDemoRoutingModule {}
