import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {WizardDemo} from './wizarddemo';
import {WizardDemoRoutingModule} from './wizarddemo-routing.module';
import {WizardModule} from '../../../components/wizard/wizard';
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {GrowlModule} from 'primeng/components/growl/growl';
import {FormsModule}    from '@angular/forms';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

@NgModule({
  imports: [
    CommonModule,
    WizardDemoRoutingModule,
    WizardModule,
    ButtonModule,
    InputTextModule,
    GrowlModule,
    FormsModule,
    CodeHighlighterModule
  ],
  declarations: [
    WizardDemo
  ]
})
export class WizardDemoModule {
}
