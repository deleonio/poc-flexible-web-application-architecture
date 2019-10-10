import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { EditorSerieController } from './controller';

ANGULARJS_MODULE.component('editorSerie', {
  bindings: {
    editorForm: '<'
  },
  controller: EditorSerieController,
  template: `
  <div>
    <app-input control="this.$ctrl.editorForm.titleInput"></app-input>
    <app-input control="this.$ctrl.editorForm.unitInput"></app-input>
  </div>
`
});
