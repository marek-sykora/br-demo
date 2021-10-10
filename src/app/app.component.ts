/**
 * Main component. App flow here. Responsible for add/remove filter rules, get/set values.
 *
 * Terminology:
 * - filters: list of filter rules used for seaching, logical AND is used between each rules, but OR could be implemented later
 * - filter rules: operator, operands, one logical condition
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /**
   * Just simple solution, Template driven form. It will be nice to implement Reactive forms and compare what is better solution.
   */
  filterRules: any[] = [];

  /**
   * Just simple list of rules now, but will be changes after implementing filter logic
   *
   * formValue = {
   *   rules: [
   *     {operand1: "val1", operator: "val2", operand2: "val3", ...},
   *     {}, ...
   *   ],
   *   logic: "1 AND 2 OR (3 AND 4)...",
   * }
   */
  private formValue: any[] = [];

  /**
   * Add first rule automatically.
   */
  ngOnInit(): void {
    this.addNewRule();
  }

  /**
   * Just simple output to dev console.
   */
  applyFilters(): void {
    this.formValue = this.filterRules; // TODO: exclude added but not filled rule

    // called by this way to prevent JS and linter errors
    console && console['log'].call(this, '>>>', JSON.stringify(this.formValue));
  }

  /**
   * Resets filter rules by passing enpty value. Setter is to implemented correctly yet, but good enough for reset.
   */
  resetFilters(): void {
    this.filterRules = [{}];
  }

  /**
   * Appends new rules at the end of filters.
   */
  addNewRule(): void {
    this.filterRules.push({});
  }

  /**
   * Necessary for proper rendering.
   */
  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
