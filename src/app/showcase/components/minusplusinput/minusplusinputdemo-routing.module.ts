import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {MinusPlusInputDemo} from './minusplusinputdemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: MinusPlusInputDemo}
		])
	],
	exports: [
		RouterModule
	]
})
export class MinusPlusInputDemoRoutingModule {}
