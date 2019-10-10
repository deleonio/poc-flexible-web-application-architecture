import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { EditSerieController } from './controller';

ANGULARJS_MODULE.component('editSerie', {
  bindings: {
    serie: '<'
  },
  controller: class extends EditSerieController {
    public $onChanges() {
      this.updateProps(this.serie);
    }
  },
  template: `
    <form ng-submit="this.$ctrl.onSubmit()">
      <h5>Edit a new measuring serie</h5>
      <editor-serie editor-form="this.$ctrl.editorForm"></editor-serie>
      <button class="btn btn-primary">Edit</button>
    </form>
`
});
