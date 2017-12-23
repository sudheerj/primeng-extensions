import {
    Component,
    ElementRef,
    OnDestroy,
    Input,
    OnInit,
} from '@angular/core';


@Component({
    selector: 'pe-badge',
    template: `<div class="ui-badge ui-position">
        <ng-content></ng-content>
        <span ngIf="display()"
                class="ui-badge-content" ngStyle="{'background-color': backgroundColor}"
                [ngClass]="{'ui-widget ui-widget-content ui-corner-all':true, badgeClass:true, 'fixed': true, 'dot': dot }">
            {{data}}
      </span>
    </div>`
})
export class Badge implements OnDestroy, OnInit{

    @Input() value: string;

    @Input() max: number;

    @Input() dot: boolean;

    @Input() backgroundColor: string = '';

    @Input() badgeClass: string;

    initialized: boolean;

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
        this.qrcode = null;
        this.initialized = false;
    }

}

