<template>
  <form @submit="onSubmit">
    <h5>Edit a new measuring serie</h5>
    <editor-serie :editor-form="$ctrl.editorForm"></editor-serie>
    <button class="btn btn-primary">Edit</button>
  </form>
</template>

<script>
import { EditSerieController } from './controller';
import EditorSerieComponent from '../editor/component';
import { onUpdated, ref } from '@vue/composition-api';

export default {
  props: ['serie'],
  components: {
    'editor-serie': EditorSerieComponent
  },
  setup(props) {
    const $ctrl = new EditSerieController();

    const onSubmit = event => {
      event.preventDefault();
      $ctrl.onSubmit();
    };

    $ctrl.updateProps(props.serie);

    onUpdated((...args) => {
      console.log(args);
      $ctrl.updateProps(props.serie);
    });

    return {
      $ctrl,
      onSubmit
    };
  }
};
</script>
