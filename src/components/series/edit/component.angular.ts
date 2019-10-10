import { Component, Input, OnChanges } from '@angular/core';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { EditSerieController } from './controller';

@Component({
  selector: 'edit-serie',
  template: `
    <form (ngSubmit)="this.onSubmit()">
      <h5>Edit a new measuring serie</h5>
      <editor-serie [editorForm]="this.editorForm"></editor-serie>
      <button class="btn btn-primary">Edit</button>
    </form>
  `
})
export class EditSerieComponent extends EditSerieController implements OnChanges {
  @Input() public serie: MeasuredSerieModel;

  public ngOnChanges() {
    this.updateProps(this.serie);
  }
}
