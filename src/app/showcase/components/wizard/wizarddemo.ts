import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
    templateUrl: './wizarddemo.html'
})
export class WizardDemoComponent {

    activeIndex = 0;
    firstName: string;
    lastName: string;
    address: string;

    next() {
        this.activeIndex++;
    }

    ok() {
        this.activeIndex = 0;
    }

    onChange(label: string) {
        this.messageService.add({severity: 'info', summary: label});
    }

  constructor(private messageService: MessageService) {
  }
}
