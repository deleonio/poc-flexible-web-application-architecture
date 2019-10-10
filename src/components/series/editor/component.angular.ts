import { Component, Input, OnChanges } from '@angular/core';

import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

@Component({
  selector: 'editor-serie',
  template: `
    <div>
      <app-input [control]="this.editorForm.titleInput"></app-input>
      <app-input [control]="this.editorForm.unitInput"></app-input>
    </div>
  `
})
export class EditorSerieComponent implements OnChanges {
  public $ctrl: EditorSerieController = new EditorSerieController();
  @Input() public editorForm: EditorForm;

  public ngOnChanges() {
    console.log(this.editorForm);
  }
}
