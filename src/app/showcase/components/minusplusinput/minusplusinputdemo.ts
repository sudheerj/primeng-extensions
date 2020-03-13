import {Component} from '@angular/core';

@Component({
    templateUrl: './minusplusinputdemo.html'
})
export class MinusPlusInputDemoComponent {
  value1 = 10;
  value2 = 5;
  value3 = 10;
  inputHeader = 'Total points are:';
  decrementDesc = 'Win';
  incrementDesc = 'Loss';

}
