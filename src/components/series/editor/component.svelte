<script>
  import { EditorSerieController } from './controller';
  import InputComponent from '../../input/component.svelte';

  const ctrl = new EditorSerieController();
  export let editorForm;
</script>

<div>
  <InputComponent control={editorForm.titleInput} />
  <InputComponent control={editorForm.unitInput} />
</div>
