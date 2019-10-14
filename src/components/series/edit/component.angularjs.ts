import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { EditSerieController } from './controller';

ANGULARJS_MODULE.component('editSerie', {
  bindings: {
    serie: '<'
  },
  controller: class extends EditSerieController {
    public serie: MeasuredSerieModel;

    public $onChanges() {
      this.updateProps(this.serie);
    }
  },
  template: `
    <form ng-submit="$ctrl.onSubmit()">
      <h5>Edit a existing measuring serie</h5>
      <editor-serie editor-form="$ctrl.editorForm"></editor-serie>
      <button class="btn btn-primary">Edit</button>
    </form>
`
});
