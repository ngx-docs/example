import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
} from '@angular/material'; // added
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // added
import { FlexLayoutModule } from '@angular/flex-layout'; // added

// @ngx
import { DocsExampleModule } from '@ngx-docs/example'; // added
import { DocsApiModule } from '@ngx-docs/api';

// internal
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, // added
    BrowserModule,
    FlexLayoutModule,
    FormsModule, // added
    ReactiveFormsModule,

    DocsApiModule,
    DocsExampleModule.forRoot({
      border: '1px solid red',
      body_font_size: '0.875em',
      box_shadow: '0 0 30px #aaa',
      source_font_size: '0.875em'
    }), // added

    MatButtonModule, // added
    MatIconModule, // added
    MatInputModule, // added
    MatSelectModule, // added
    MatSidenavModule, // added
    MatSliderModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
