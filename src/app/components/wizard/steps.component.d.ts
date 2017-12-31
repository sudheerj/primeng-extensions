import { QueryList, AfterContentInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { StepComponent } from './step.component';
export declare class StepsComponent implements AfterContentInit, OnChanges {
    activeIndex: number;
    styleClass: string;
    stepClass: string;
    activeIndexChange: EventEmitter<any>;
    change: EventEmitter<{}>;
    items: MenuItem[];
    steps: QueryList<StepComponent>;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private previous();
    private next();
}
