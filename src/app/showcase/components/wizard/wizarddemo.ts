import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
    templateUrl: './wizarddemo.html'
})
export class WizardDemo {

    activeIndex: number = 0;
    firstName: string;
    lastName: string;
    address: string;

    msgs: Message[] = [];

    next() {
        this.activeIndex++;
    }

    ok() {
        this.activeIndex = 0;
    }

    onChange(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
