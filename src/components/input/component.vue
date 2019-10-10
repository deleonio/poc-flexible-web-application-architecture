<template>
  <div class="form-group">
    <label :for="props.control.name">{{ props.control.label }}</label>
    <input
      class="form-control"
      :id="props.control.name"
      :name="props.control.name"
      v-model="state.model"
      @keyup="handleChange"
    />
  </div>
</template>

<script>
import { InputController } from './controller';
import Vue from 'vue';
import { reactive } from '@vue/composition-api';

export default {
  props: ['control'],
  setup(props, context) {
    const $ctrl = new InputController();

    const state = reactive({
      model: props.control.value
    });

    const handleChange = event => {
      props.control.value = event.target.value;
      context.parent.$forceUpdate();
    };

    return {
      $ctrl,
      props,
      state,
      handleChange
    };
  }
};
</script>
