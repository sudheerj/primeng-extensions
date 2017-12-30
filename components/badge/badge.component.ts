import {
    Component,
    ElementRef,
    OnDestroy,
    Input,
    OnInit,
    ViewEncapsulation
} from '@angular/core';


@Component({
    selector: 'pe-badge',
    template: `<div class="ui-badge ui-position">
        <ng-content></ng-content>
        <span *ngIf="display()"
                class="ui-badge-content" [ngStyle]="{'background-color': backgroundColor}"
                [ngClass]="{'ui-widget ui-widget-content ui-corner-all':true, badgeClass, 'fixed': true, 'dot': dot }">
            {{data}}
      </span>
    </div>`,
    styleUrls: [
        './badge.css'
    ],
    encapsulation: ViewEncapsulation.None,
})
export class Badge implements OnDestroy, OnInit{

    @Input() value: string;

    @Input() max: number;

    @Input() dot: boolean;

    @Input() backgroundColor: string = '';

    @Input() badgeClass: string;


    constructor(public el: ElementRef) {
    }

    data() {
        if(this.dot) return;
        if(typeof this.value === 'number' && typeof this.max === 'number') {
            return this.max < this.value ? `${this.max}+` : this.value;
        } else {
            return this.value;
        }
    }

    display() {
        return (this.data || this.dot);
    }

    ngOnDestroy() {
    }

}

