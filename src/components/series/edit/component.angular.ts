import { Component, Input, OnChanges } from '@angular/core';

import { EditSerieController } from './controller';

@Component({
  selector: 'edit-serie',
  template: `
    <form (ngSubmit)="onSubmit()">
      <h5>Edit a existing measuring serie</h5>
      <editor-serie [editorForm]="editorForm"></editor-serie>
      <button class="btn btn-primary" type="submit" id="submit">Edit</button>
      <button class="btn btn-secondary" type="reset" id="cancel" (click)="onCancel()">
        Abbrechen
      </button>
      <button class="btn btn-danger" id="delete" type="button" (click)="onDelete()">
        Delete
      </button>
    </form>
  `
})
export class EditSerieComponent extends EditSerieController implements OnChanges {
  @Input() public resolvedRoute: any;

  public ngOnChanges() {
    this.changeMeasuredSerie(this.resolvedRoute.params.id);
  }
}
