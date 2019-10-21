import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { EditSerieController } from './controller';

ANGULARJS_MODULE.component('editSerie', {
  bindings: {
    resolvedRoute: '<'
  },
  controller: class extends EditSerieController {
    public resolvedRoute: any;

    public $onChanges() {
      this.changeMeasuredSerie(this.resolvedRoute.params.id);
    }
  },
  template: `
    <form ng-submit="$ctrl.onSubmit()">
      <h5>Edit a existing measuring serie</h5>
      <editor-serie editor-form="$ctrl.editorForm"></editor-serie>
      <button class="btn btn-primary" type="submit" id="submit-edit">Edit</button>
      <button class="btn" type="reset" id="cancel-edit" (click)="$ctrl.onCancel()">
        Abbrechen
      </button>
    </form>
`
});
