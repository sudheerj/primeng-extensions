import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {QRCodeDemo} from './qrcodedemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: QRCodeDemo}
		])
	],
	exports: [
		RouterModule
	]
})
export class QRCodeDemoRoutingModule {}
