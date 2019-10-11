import { Component, Input } from '@angular/core';

import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

@Component({
  selector: 'editor-serie',
  template: `
    <div>
      <app-input [control]="editorForm.titleInput"></app-input>
      <app-input [control]="editorForm.unitInput"></app-input>
    </div>
  `
})
export class EditorSerieComponent extends EditorSerieController {
  @Input() public editorForm: EditorForm;
}
