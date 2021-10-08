import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  filterRules: any[] = [];

  private formValue: any[] = [];

  /**
   *
   */
  ngOnInit(): void {
    this.addNewRule();
  }

  /**
   * Just simple output to dev console.
   */
  applyFilters(): void {
    this.formValue = this.filterRules;

    // called by this way to prevent JS and linter errors
    console && console['log'].call(this, '>>>', JSON.stringify(this.formValue));
  }

  /**
   *
   */
  resetFilters(): void {
    this.filterRules = [{}];
  }


  public addNewRule(): void {
    this.filterRules.push({});
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
