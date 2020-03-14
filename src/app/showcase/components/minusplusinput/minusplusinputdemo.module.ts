import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import {MinusPlusInputDemoComponent} from './minusplusinputdemo';
import {MinusPlusInputDemoRoutingModule} from './minusplusinputdemo-routing.module';
import {MinusPlusInputModule} from '../../../components/minusplusinput/minusplusinput';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MinusPlusInputDemoRoutingModule,
    MinusPlusInputModule,
    ButtonModule,
    CodeHighlighterModule
  ],
  declarations: [
    MinusPlusInputDemoComponent
  ]
})
export class MinusPlusInputDemoModule {
}
