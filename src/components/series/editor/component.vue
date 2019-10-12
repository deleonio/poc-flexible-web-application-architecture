<template>
  <div>
    <app-input :control="props.editorForm.titleInput"></app-input>
    <app-input :control="props.editorForm.unitInput"></app-input>
    <pre>EditorForm(props): {{props.editorForm}}</pre>
  </div>
</template>

<script>
import { CreateSerieController, EditorSerieController } from './controller';
import { watch, reactive, ref } from '@vue/composition-api';
import InputComponent from '../../input/component';

export default {
  props: ['editor-form'],
  components: {
    'app-input': InputComponent
  },
  setup(props) {
    const $ctrl = new EditorSerieController();
    const inputTitle = ref(null);
    const inputUnit = ref(null);

    watch(() => {
      console.log('EditorSerie watched', props.editorForm);
      inputTitle.value = props.editorForm.titleInput;
      inputUnit.value = props.editorForm.unit;
    });

    return {
      $ctrl,
      inputTitle,
      inputUnit,
      props
    };
  }
};
</script>
