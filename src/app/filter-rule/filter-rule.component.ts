import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'filter-rule',
  templateUrl: './filter-rule.component.html',
  styleUrls: ['./filter-rule.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilterRuleComponent),
    multi: true,
  }],
})
export class FilterRuleComponent implements ControlValueAccessor {
  // form fields
  scriptName: any;
  scriptNameList: any[];

  propertyName: any;
  propertyNameList: any[];

  operator: any;
  operatorList: any[];

  searchValue: string = '';

  // ControlValueAccessor stuff
  private innerValue: any = {};

  /**
   *
   */
   constructor() {
    this.scriptNameList = this.getScriptNameList();
    this.propertyNameList = this.getPropertyNameList();
    this.operatorList = this.getOperatorList();
  }

  /// ControlValueAccessor API

  /**
   *
   */
   registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  /**
   *
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   *
   */
  writeValue(value: any): void {
    this.innerValue = value;

    // TODO: not correct, but good enough just for reset
    if (value) {
      this.scriptName = value.scriptName;
      this.propertyName = value.scriptName;
      this.operator = value.scriptName;
      this.searchValue = value.searchValue;
    }
  }

  /**
   *
   */
  changeHandler(): void {
    this.innerValue = {
      scriptName: this.scriptName && this.scriptName.code,
      propertyName: this.propertyName && this.propertyName.code,
      operator: this.operator && this.operator.code,
      searchValue: this.searchValue,
    };

    this.onChanged(this.innerValue);
  }

  /// PRIVATE ZONE

  // ControlValueAccessor stuff
  private onChanged: any = () => {};
  private onTouched: any = () => {};

  private getScriptNameList(): any[] {
    return [{
      code: 'sid1',
      name: 'python_script_1',
    }, {
      code: 'sid2',
      name: 'python_script_2',
    }, {
      code: 'sid3',
      name: 'python_script_2',
    }, {
      code: 'sid4',
      name: 'tcl_script_2',
    }];
  }

  private getPropertyNameList(): any[] {
    return [{
      code: 'pid1',
      name: 'price',
    }, {
      code: 'pid2',
      name: 'number of items',
    }, {
      code: 'pid3',
      name: 'timestamp',
    }, {
      code: 'pid4',
      name: 'index',
    }];
  }

  private getOperatorList(): any[] {
    return [{
      code: 'oid1',
      name: 'equal to',
    }, {
      code: 'oid2',
      name: 'in between',
    }, {
      code: 'oid3',
      name: 'less then',
    }, {
      code: 'oid4',
      name: 'greater then',
    }];
  }
}
