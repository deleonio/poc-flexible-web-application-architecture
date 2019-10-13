<template>
  <form @submit="onSubmit">
    <h5>Edit a new measuring serie</h5>
    <editor-serie v-if="editorFormRef !== null" :editor-form="editorFormRef"></editor-serie>
    <!-- <pre>Serie(props): {{props.serie}}</pre> -->
    <button class="btn btn-primary">Edit</button>
  </form>
</template>

<script>
import { EditSerieController } from './controller';
import EditorSerieComponent from '../editor/component';
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

    let serieRef = null;
    watch(() => {
      // if stop infinity loop
      if (serieRef !== props.serie) {
        $ctrl.updateProps(props.serie);
        serieRef = props.serie;
        const editorForm = new EditorForm('serie');
        editorForm.titleInput.value = props.serie.getTitle();
        editorForm.unitInput.value = props.serie.getUnit();
        editorFormRef.value = editorForm;
      }
    });

    const onSubmit = event => {
      event.preventDefault();
      $ctrl.editorForm = editorFormRef.value;
      $ctrl.onSubmit();
    };

    return {
      props,
      editorFormRef,
      onSubmit
    };
  }
};
</script>
