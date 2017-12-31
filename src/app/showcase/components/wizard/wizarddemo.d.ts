import { Message } from 'primeng/components/common/api';
export declare class WizardDemo {
    activeIndex: number;
    firstName: string;
    lastName: string;
    address: string;
    msgs: Message[];
    next(): void;
    ok(): void;
    onChange(label: string): void;
}
