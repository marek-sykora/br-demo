import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  aaa: any = {};
  bbb: any = {};

  private formValue: any[] = [];

  /**
   * Just simple output to dev console.
   */
  public applyFilters(): void {
    this.formValue = [this.aaa, this.bbb];

    // called by this way to prevent JS and linter errors
    console && console['log'].call(this, '>>>', JSON.stringify(this.formValue));
  }

  /**
   *
   */
  public resetFilters(): void {
    this.aaa = 123;
  }
}
