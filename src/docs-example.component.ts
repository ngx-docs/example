// external
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

// internal
import { DocsExampleClass } from './docs-example.class';
import { LaunchInterface } from './docs-example.interface';

/**
 * @export
 * @class DocsExampleComponent
 * @extends {DocsExampleClass}
 * @implements {OnInit}
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-docs-example',
  templateUrl: './docs-example.component.html'
})
export class DocsExampleComponent extends DocsExampleClass implements OnInit {

  @Input('css') public css: string;
  @Input('html') public html: string;
  @Input('launch') public launch: LaunchInterface | undefined = { location: '', tooltip: '' };
  @Input('title') public title: string;
  @Input('ts') public ts: string;

  constructor() {
    super();
  }

  /**
   * @memberof DocsExampleComponent
   */
  public openLocation() {
    if (this.launch) {
      if (this.launch.location) {
        window.open(this.launch.location, '_blank');
      }
    }
  }

  ngOnInit() { }
}
