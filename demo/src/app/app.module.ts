import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material';

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
    DocsExampleModule.forRoot({
      border: '1px solid red'
    }), // added

    MatButtonModule, // added
    MatInputModule, // added
    MatSidenavModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
