// external
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';

// internal
import { DocsExampleClass } from './docs-example.class';
import { LaunchInterface } from './docs-example.interface';
import { PackageConfigInterface } from './package-config.interface';
import { PACKAGE_CONFIG_TOKEN } from './docs-example.module';

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
export class DocsExampleComponent extends DocsExampleClass {

  private element: ElementRef;

  @Input('config') set config(config: PackageConfigInterface) {
    this.setStyle(config);
  }
  @Input('css') public css: string;
  @Input('html') public html: string;
  @Input('launch') public launch: LaunchInterface | undefined;
  @Input('title') public title: string;
  @Input('ts') public ts: string;


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

  /**
   * Creates an instance of DocsExampleComponent.
   * @memberof DocsExampleComponent
   */
  constructor(element: ElementRef, @Optional() @Inject(PACKAGE_CONFIG_TOKEN) config?: PackageConfigInterface) {
    super({
      code: {
        active: false,
        tooltip: 'View code'
      },
      debug: {
        active: false,
        tooltip: 'Debug code'
      }
    });
    this.element = element;
    this.setStyle(config);
  }

  /**
   * @param {PackageConfigInterface} [config]
   * @memberof DocsExampleComponent
   */
  setStyle(config?: PackageConfigInterface): void {
    if (config) {
      for (const key in config) {
        if (key) {
          this.setProperty(key, config);
        }
      }
    }
  }

  /**
   * @private
   * @param {string} name
   * @param {PackageConfigInterface} config
   * @memberof DocsExampleComponent
   */
  private setProperty(name: string, config: PackageConfigInterface): void {
    this.element.nativeElement.style.setProperty(`--ngx-docs-example-${name.replace('_', '-')}`, config[name]);
  }
}
