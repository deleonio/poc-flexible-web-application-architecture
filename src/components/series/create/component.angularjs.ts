import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { CreateSerieController } from './controller';

ANGULARJS_MODULE.component('createSerie', {
  controller: CreateSerieController,
  template: `
  <form ng-submit="this.$ctrl.onSubmit()">
    <h5>Create a new measuring serie</h5>
    <editor-serie editor-form="this.$ctrl.editorForm"></editor-serie>
    <button class="btn btn-primary">Add</button>
  </form>
`
});
