<script>
  import { CreateSerieController } from './controller';
  import EditorSerieComponent from '../editor/component.svelte';

  const ctrl = new CreateSerieController();
  let editorForm = ctrl.editorForm;
</script>

<form
  on:submit={event => {
    event.preventDefault();
    ctrl.onSubmit();
    editorForm = ctrl.editorForm;
  }}>
  <h5>Create a new measuring serie</h5>
  <EditorSerieComponent {editorForm} />
  <button class="btn btn-primary">Add</button>
</form>
