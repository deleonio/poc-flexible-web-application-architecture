import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { CreateSerieController } from './controller';

ANGULARJS_MODULE.component('createSerie', {
  controller: CreateSerieController,
  template: `
  <form ng-submit="$ctrl.onSubmit()">
    <h5>Create a new measuring serie</h5>
    <editor-serie editor-form="$ctrl.editorForm"></editor-serie>
    <button class="btn btn-primary" id="submit-add">Add</button>
  </form>
`
});
