import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {QRCodeDemoComponent} from './qrcodedemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path: '', component: QRCodeDemoComponent}
		])
	],
	exports: [
		RouterModule
	]
})
export class QRCodeDemoRoutingModule {}
