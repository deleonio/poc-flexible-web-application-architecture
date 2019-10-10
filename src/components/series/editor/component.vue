<template>
  <div>
    <app-input :control="props.editorForm.titleInput"></app-input>
    <app-input :control="props.editorForm.unitInput"></app-input>
  </div>
</template>

<script>
import { CreateSerieController, EditorSerieController } from './controller';
import InputComponent from '../../input/component';

export default {
  props: ['editor-form'],
  components: {
    'app-input': InputComponent
  },
  setup(props) {
    const $ctrl = new EditorSerieController();

    return {
      $ctrl,
      props
    };
  }
};
</script>
