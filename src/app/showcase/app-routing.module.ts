import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'badge', loadChildren: './components/badge/badgedemo.module#BadgeDemoModule'},
            {path: 'qrcode', loadChildren: './components/qrcode/qrcodedemo.module#QRCodeDemoModule'},
            {path: 'wizard', loadChildren: './components/wizard/wizarddemo.module#WizardDemoModule'},
            {path: 'minusplusinput', loadChildren: './components/minusplusinput/minusplusinputdemo.module#MinusPlusInputDemoModule'},
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
