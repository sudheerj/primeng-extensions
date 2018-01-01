import { ElementRef, OnDestroy, OnInit } from '@angular/core';
export declare class QRCode implements OnDestroy, OnInit {
    el: ElementRef;
    value: string;
    background: string;
    backgroundAlpha: number;
    foreground: string;
    foregroundAlpha: number;
    level: string;
    mime: string;
    padding: number;
    size: number;
    containerViewChild: ElementRef;
    qrcode: null;
    initialized: boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    init(): void;
    ngOnDestroy(): void;
}
