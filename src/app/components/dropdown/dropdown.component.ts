import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostBinding, OnChanges  } from '@angular/core';
import { ClickOutsideDirective } from '../../directive/click-outside.directive';
export class DropdownValue {
  value: any;
  label: any;

  constructor(value: any, label: any) {
    this.value = value;
    this.label = label;
  }
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnChanges {

  @Input() values: DropdownValue[];
  @Input() activeValue: any;
  @Output() select: EventEmitter<any>;
  
  defaultValue: any;
  isShowDropdown = false;

  constructor(private _eref: ElementRef) {
    this.select = new EventEmitter();
  }
  
  ngOnChanges() {
    this.defaultValue = this.activeValue;
  }
  
  onClickOutside(event: Object) {
    if (event && event['value'] === true) {
      this.isShowDropdown = false;
    }
  }
  selectItem(value) {
    this.defaultValue = value;
    this.select.emit(value);
  }
  onShowDropdown(): void {
    this.isShowDropdown = !this.isShowDropdown;
  }

}
