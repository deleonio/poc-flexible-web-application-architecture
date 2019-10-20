<script>
  import { beforeUpdate } from 'svelte';
  import { EditSerieController } from './controller';
  import EditorSerieComponent from '../editor/component.svelte';

  export let measuredSerie;
  export let resolvedRoute;

  const ctrl = new EditSerieController(resolvedRoute.params.id);
  // ctrl.updateProps(measuredSerie);
  let editorForm = ctrl.editorForm;

  beforeUpdate(() => {
    ctrl.updateProps(measuredSerie);
    editorForm = ctrl.editorForm;
  });
</script>

<form
  on:submit={event => {
    event.preventDefault();
    ctrl.onSubmit();
    editorForm = ctrl.editorForm;
  }}>
  <h5>Edit a existing measuring serie</h5>
  <EditorSerieComponent {editorForm} />
  <button class="btn btn-primary" id="submit-edit">Edit</button>
  <button
    class="btn"
    id="cancel-edit"
    on:click={event => {
      event.preventDefault();
      ctrl.onCancel();
    }}>
    Abbrechen
  </button>
</form>
