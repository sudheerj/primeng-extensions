import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WizardDemo} from './wizarddemo';
import {WizardDemoRoutingModule} from './wizarddemo-routing.module';
import {WizardModule} from '../../../components/wizard/wizard';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {MessageService} from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    WizardDemoRoutingModule,
    WizardModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    FormsModule,
    CodeHighlighterModule
  ],
  declarations: [
    WizardDemo
  ],
  providers: [MessageService]
})
export class WizardDemoModule {
}
