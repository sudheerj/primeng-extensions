import { OnInit } from '@angular/core';
export declare class AppComponent implements OnInit {
    menuActive: boolean;
    activeMenuId: string;
    notification: boolean;
    ngOnInit(): void;
    changeTheme(event: Event, theme: string): void;
    onMenuButtonClick(event: Event): void;
    closeNotification(event: any): void;
}
