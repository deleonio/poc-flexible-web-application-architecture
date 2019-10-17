<template>
  <form @submit="onSubmit">
    <h5>Edit a existing measuring serie</h5>
    <editor-serie v-if="editorFormRef !== null" :editor-form="editorFormRef"></editor-serie>
    <button class="btn btn-primary" id="submit-edit">Edit</button>
  </form>
</template>

<script lang="ts">
import { EditSerieController } from "./controller";
import EditorSerieComponent from "../editor/component.vue";
import { ref, watch } from "@vue/composition-api";
import { EditorForm } from "../editor/editor.form";

export default {
  props: ["serie"],
  components: {
    "editor-serie": EditorSerieComponent
  },
  setup(props: any) {
    const $ctrl = new EditSerieController();
    const editorFormRef: any = ref(null);

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

    const onSubmit = (event: Event) => {
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
