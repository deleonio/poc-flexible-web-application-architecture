import { Component, Input, OnChanges } from '@angular/core';

import { RouterService } from '../../../services/router/service';
import { EditSerieController } from './controller';

@Component({
  selector: 'edit-serie',
  template: `
    <form (ngSubmit)="onSubmit()">
      <h5>Edit a existing measuring serie</h5>
      <editor-serie [editorForm]="editorForm"></editor-serie>
      <button class="btn btn-primary" type="submit" id="submit-edit">Edit</button>
      <button class="btn" type="reset" id="cancel-edit" (click)="onCancel()">
        Abbrechen
      </button>
    </form>
  `
})
export class EditSerieComponent extends EditSerieController implements OnChanges {
  @Input() public resolvedRoute: any;

  public constructor() {
    super(null);
    RouterService.subscribe((route: any, params: any, query: any) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url
      };
    });
  }

  public ngOnChanges() {
    this.changeMeasuredSerie(this.resolvedRoute.params.id);
  }
}
