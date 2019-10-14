<script>
  import { beforeUpdate } from 'svelte';
  import { EditSerieController } from './controller';
  import EditorSerieComponent from '../editor/component.svelte';

  export let measuredSerie;

  const ctrl = new EditSerieController();
  ctrl.updateProps(measuredSerie);
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
  <button class="btn btn-primary">Edit</button>
</form>
