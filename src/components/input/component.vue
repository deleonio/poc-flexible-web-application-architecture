<template>
  <div>
    <label>
      {{ $ctrl.props.label }}
      <input v-model="state.model" @keyup="handleChange" />
    </label>
    <pre>{{ state.model }}</pre>
  </div>
</template>

<script>
import { InputController } from './controller';
import Vue from 'vue';
import { reactive } from '@vue/composition-api';

export default {
  props: ['props'],
  setup(props, context) {
    console.log(context);
    const $ctrl = new InputController(props.props);
    const state = reactive({
      model: $ctrl.props.value
    });

    const handleChange = event => {
      $ctrl.props.value = event.target.value;
      context.parent.$forceUpdate();
    };

    return {
      $ctrl,
      state,
      handleChange
    };
  }
};
</script>
