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

export default {
  components: {
    'editor-serie': EditorSerieComponent
  },
  setup() {
    const $ctrl = new EditSerieController();

    const onSubmit = event => {
      event.preventDefault();
      $ctrl.onSubmit();
    };

    const onUpdated = props => {
      $ctrl.updateProps(props.serie);
    };

    return {
      $ctrl,
      onSubmit
    };
  }
};
</script>
