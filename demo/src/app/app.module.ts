import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatButtonModule, // added
    MatInputModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
