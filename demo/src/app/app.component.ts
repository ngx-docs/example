import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = {
    box_shadow: '0 0 15px #bfbfbf',
    border: '1px solid #d72000'
  };
  title = 'Inputs in a form';
  launch = {
    location: 'https://plnkr.co/edit/?p=preview',
    tooltip: `Edit in plunker`
  };
  html = `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Company (disabled)" disabled value="Google">
  </mat-form-field>

  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="First name">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="Long Last Name That Will Be Truncated">
    </mat-form-field></td>
  </tr></table>

  <p>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address">1600 Amphitheatre Pkwy</textarea>
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address 2"></textarea>
    </mat-form-field>
  </p>

  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="City">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="State">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput #postalCode maxlength="5" placeholder="Postal Code" value="94043">
      <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
    </mat-form-field></td>
  </tr></table>
</form>
  `;
  ts = `
import {Component} from '@angular/core';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'input-form-example',
  templateUrl: 'input-form-example.html',
  styleUrls: ['input-form-example.css'],
})
export class InputFormExample {}
  `;
  css = `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
  `;

  form: FormGroup;
  formComponent: FormGroup;
  payload: string;

  /**
   * Creates an instance of AppComponent.
   * @param {FormBuilder} formBuilder
   * @memberof AppComponent
   */
  constructor(public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstname: 'Ścibor',
      lastname: 'Rudnicki',
      address: 'Głuszyna',
      city: 'Poznań',
      postalCode: '61-329'
    });

    this.formComponent = formBuilder.group({
      // config
      config: formBuilder.group({
        border: this.config.border,
        box_shadow: this.config.box_shadow
      }),

      // rest
      css: this.css,
      html: this.html,
      launch: formBuilder.group({
        location: this.launch.location,
        tooltip: this.launch.tooltip
      }),
      title: this.title,
      ts: this.ts
    });
  }

  submit(form) {
    this.payload = JSON.stringify(form.value);
    console.log(JSON.stringify(form.value));
    return false;
  }

  submitComponent(form) {
    console.log(JSON.stringify(form.value));
    for (const key in form.value) {
      if (key) {
        this[key] = form.value[key];
      }
    }
    return false;
  }
}
