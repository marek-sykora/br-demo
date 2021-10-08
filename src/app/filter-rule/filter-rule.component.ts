import { Component } from '@angular/core';


@Component({
  selector: 'filter-rule',
  templateUrl: './filter-rule.component.html',
  styleUrls: ['./filter-rule.component.scss'],
})
export class FilterRuleComponent {
  scriptName: string = '';
  scriptNameList: any[];

  propertyName: string = '';
  propertyNameList: any[];

  operator: string = '';
  operatorList: any[];

  searchValue: string = '';

  /**
   *
   */
  constructor() {
    this.scriptNameList = this.getScriptNameList();
    this.propertyNameList = this.getPropertyNameList();
    this.operatorList = this.getOperatorList();
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
