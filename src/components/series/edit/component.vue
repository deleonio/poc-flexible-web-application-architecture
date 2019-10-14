<template>
  <form @submit="onSubmit">
    <h5>Edit a existing measuring serie</h5>
    <editor-serie v-if="editorFormRef !== null" :editor-form="editorFormRef"></editor-serie>
    <button class="btn btn-primary">Edit</button>
  </form>
</template>

<script>
import { EditSerieController } from './controller';
import EditorSerieComponent from '../editor/component.vue';
import { ref, watch } from '@vue/composition-api';
import { EditorForm } from '../editor/editor.form';

export default {
  props: ['serie'],
  components: {
    'editor-serie': EditorSerieComponent
  },
  setup(props, context) {
    const $ctrl = new EditSerieController();
    const editorFormRef = ref(null);

    watch(
      // this function is required for the following function
      () => {
        return props.serie;
      },
      // get the return value of the previous function
      serie => {
        $ctrl.updateProps(serie);
        editorFormRef.value = $ctrl.editorForm;
      }
    );

    const onSubmit = event => {
      event.preventDefault();
      $ctrl.editorForm = editorFormRef.value;
      $ctrl.onSubmit();
    };

    return {
      $ctrl,
      editorFormRef,
      onSubmit
    };
  }
};
</script>
