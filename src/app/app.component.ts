import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  scriptName: string = '';
  scriptNameList: any[];

  propertyName: string = '';
  propertyNameList: any[];

  operator: string = '';
  operatorList: any[];

  searchValue: string = '';

  private formValue: any[] = [];

  /**
   *
   */
  constructor() {
    this.scriptNameList = this.getScriptNameList();
    this.propertyNameList = this.getPropertyNameList();
    this.operatorList = this.getOperatorList();
  }

  /**
   * Just simple output to dev console.
   */
  public applyFilters(): void {
    this.formValue = [{
      scriptName: this.scriptName && this.scriptName['code'],
      propertyName: this.propertyName && this.propertyName['code'],
      operator: this.operator && this.operator['code'],
      searchValue: this.searchValue,
    }];

    // called by this way to prevent JS and linter errors
    console && console['log'].call(this, '>>>', JSON.stringify(this.formValue));
  }

  /**
   *
   */
  public resetFilters(): void {
    this.scriptName = '';
    this.propertyName = '';
    this.operator = '';
    this.searchValue = '';
  }


  /// PRIVATE ZONE


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
