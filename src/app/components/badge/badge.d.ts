import { ElementRef, OnDestroy, OnInit } from '@angular/core';
export declare class Badge implements OnDestroy, OnInit {
    el: ElementRef;
    value: string;
    max: number;
    dot: boolean;
    backgroundColor: string;
    badgeClass: string;
    constructor(el: ElementRef);
    data(): string;
    display(): boolean | (() => string);
    ngOnDestroy(): void;
    ngOnInit(): void;
}
