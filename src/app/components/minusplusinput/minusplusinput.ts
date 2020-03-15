import {
  NgModule,
  Component,
  OnDestroy,
  Input,
  OnInit,
  ViewEncapsulation,
  forwardRef,
  Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {ButtonModule} from 'primeng/button';

export const MINUSPLUSINPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MinusPlusInputComponent),
  multi: true
};

@Component({
  selector: 'pe-minusplusinput',
  template: `
    <div
      [ngClass]="{styleClass: true,'ui-minusplus ui-widget ui-widget-content ui-corner-all': true,'ui-minusplus-vertical': vertical, 'ui-state-disabled': disabled}">
      <button pButton [ngClass]="getButtonClass(true)" (click)="decrement()" [label]="decrementLabel">
      </button>
      <div class="ui-minusplus-value">
        <ng-content></ng-content>
        {{ inputValue }}
      </div>
      <button pButton [ngClass]="getButtonClass(false)" (click)="increment()" [label]="incrementLabel">
      </button>
    </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [MINUSPLUSINPUT_VALUE_ACCESSOR]
})
export class MinusPlusInputComponent implements OnDestroy, OnInit, ControlValueAccessor {

  @Input() min = 0;

  @Input() max = 10;

  @Input() step = 1;

  @Input() vertical = false;

  @Input() disabled = false;

  @Input() decrementLabel = '-';

  @Input() incrementLabel = '+';

  @Input() styleClass: string = null;

  @Output() onInputChange: EventEmitter<any> = new EventEmitter();

  value = 0;

  inputValue = 0;

  onModelChange: Function = () => {
  };

  onModelTouched: Function = () => {
  };

  constructor(private cd: ChangeDetectorRef) {
  }

  writeValue(value: any): void {
    this.inputValue = value;
    this.cd.detectChanges();
  }

  isIncrement() {
    return (this.inputValue + this.step) <= this.max;
  }

  isDecrement() {
    return (this.inputValue - this.step) >= this.min;
  }

  getButtonClass(status) {
    let buttonClass = '';
    if (status) {
      if (!this.isDecrement()) buttonClass += ' ui-state-disabled';
    } else {
      if (!this.isIncrement()) buttonClass += ' ui-state-disabled';
    }
    return buttonClass;
  }

  increment() {
    if (this.isIncrement()) {
      this.inputValue = this.inputValue + this.step;
      this.onModelChange(this.inputValue);
      this.onModelTouched();
      this.onInputChange.emit(this.inputValue);
    }
  }

  decrement() {
    if (this.isDecrement()) {
      this.inputValue = this.inputValue - this.step;
      this.onModelChange(this.inputValue);
      this.onModelTouched();
      this.onInputChange.emit(this.inputValue);
    }
  }


  ngOnDestroy() {
  }

  ngOnInit() {
    this.inputValue = this.value;
    if (this.step < 1) {
      this.step = 1;
    }
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

}

@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [MinusPlusInputComponent],
  declarations: [MinusPlusInputComponent]
})
export class MinusPlusInputModule {
}

