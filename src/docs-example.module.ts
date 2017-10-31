import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTabsModule, MatTooltipModule } from '@angular/material';

// @ngx
import { PrismModule } from '@ngx-prism/rxjs';

// internal
import { DocsExampleComponent } from './docs-example.component';

/**
 * @export
 * @class DocsExampleModule
 */
@NgModule({
  declarations: [ DocsExampleComponent ],
  exports: [
    DocsExampleComponent
  ],
  imports: [
    CommonModule,

    // material
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,

    // @ngx
    PrismModule
  ],
  providers: [],
})
export class DocsExampleModule { }
