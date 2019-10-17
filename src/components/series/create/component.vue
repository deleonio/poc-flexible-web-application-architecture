<template>
  <form @submit="onSubmit">
    <h5>Create a new measuring serie</h5>
    <editor-serie :editor-form="editorFormRef"></editor-serie>
    <button class="btn btn-primary" id="submit-add">Add</button>
  </form>
</template>

<script lang="ts">
import { CreateSerieController } from './controller';
import EditorSerieComponent from '../editor/component.vue';
import { ref } from '@vue/composition-api';

export default {
  components: {
    'editor-serie': EditorSerieComponent
  },
  setup() {
    const $ctrl = new CreateSerieController();
    const editorFormRef: any = ref($ctrl.editorForm);

    const onSubmit = (event: Event) => {
      event.preventDefault();
      $ctrl.onSubmit();
      editorFormRef.value = $ctrl.editorForm;
    };

    return {
      editorFormRef,
      onSubmit
    };
  }
};
</script>
