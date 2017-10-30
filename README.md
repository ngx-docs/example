# @ngx-docs/example

Angular 4+ module with example material tabs to display.

[![GitHub version](https://badge.fury.io/gh/ngx-docs%2Fexample.svg)](https://badge.fury.io/gh/ngx-docs%2Fexample)
[![npm version](https://badge.fury.io/js/%40ngx-docs%2Fexample.svg)](https://badge.fury.io/js/%40ngx-docs%2Fexample)

[![GitHub issues](https://img.shields.io/github/issues/ngx-docs/example.svg)](https://github.com/ngx-docs/example/issues)
[![GitHub forks](https://img.shields.io/github/forks/ngx-docs/example.svg)](https://github.com/ngx-docs/example/network)
[![GitHub stars](https://img.shields.io/github/stars/ngx-docs/example.svg)](https://github.com/ngx-docs/example/stargazers)
[![GitHub license](https://img.shields.io/github/license/ngx-docs/example.svg)](https://github.com/ngx-docs/example/blob/master/LICENSE)


Pros:
* Component changeDetection is set to `OnPush`, it gives better overall performance.

Cons:
* Need to change `@Input()` instance to have changes visible on template.
* Tests are not ready yet.

Image preview: 

![Image preview](http://ngx-docs.wwwdev.io/example/preview.png)

----

## Table of contents
* [Demonstration](#demonstration)
* [Installation](#installation)
* [Usage](#usage)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Demonstration

[Live demonstration](http://ngx-docs.wwwdev.io/example)

Clone this repository:

```bash
git clone https://github.com/ngx-docs/example.git
```

Go to `demo` folder and by opening your command line do the following:

```bash
npm i && npm start
```

Open http://localhost:4200/ in your browser.



## Installation

To install, run:

```bash
npm install @ngx-docs/example --save
```

## Usage

To `app.module.ts` add the following lines:

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule } from '@angular/material'; // added
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // added

// @ngx
import { DocsExampleModule } from '@ngx-docs/example'; // added

// internal
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, // added
    BrowserModule,
    FormsModule, // added
    ReactiveFormsModule,
    DocsExampleModule, // added
    MatInputModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


In your component `app.component.ts` file:
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  payload: string;

  constructor(public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstname: 'none',
      lastname: '',
      address: ''
    });
  }

  submit(form) {
    this.payload = JSON.stringify(this.form.value);
    return false;
  }
}

```

In `app.component.html` write the following code:

```html
<ngx-docs-example [css]="css" [html]="html" [launch]="launch" [title]="title" [ts]="ts">
  <div class="body">
    <form class="example-form" (ngSubmit)="submit(form)" [formGroup]="form">
      <mat-form-field class="example-full-width">
        <input type="text" matInput placeholder="Company (disabled)" disabled value="Google">
      </mat-form-field>

      <table class="example-full-width" cellspacing="0"><tr>
        <td><mat-form-field class="example-full-width">
          <input type="text" name="firstname" matInput placeholder="First name" formControlName="firstname" required>
        </mat-form-field></td>
        <td><mat-form-field class="example-full-width">
          <input matInput placeholder="Long Last Name That Will Be Truncated" formControlName="lastname">
        </mat-form-field></td>
      </tr></table>

      <p>
        <mat-form-field class="example-full-width">
          <textarea matInput placeholder="Address" formControlName="address">1600 Amphitheatre Pkwy</textarea>
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
      </tr>
      </table>
      <input type="submit" value="Submit" />
    </form>
  </div>
  <div class="debug">
    <h3>Submitted data:</h3>
    {{payload}}
  </div>
</ngx-docs-example>
```

## Style guide

[Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html) 

## GIT

### Commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153
- http://karma-runner.github.io/0.10/dev/git-commit-msg.html

### Versioning
Semantic Versioning 2.0.0 http://semver.org/

**Given a version number MAJOR.MINOR.PATCH, increment the:**   
MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards-compatible manner, and  
PATCH version when you make backwards-compatible bug fixes.  
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**   
How should I deal with revisions in the 0.y.z initial development phase?  
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.


## License

MIT © ngx-docs

## Donate

[Click to donate](https://donorbox.org/help-creating-open-source-software)
