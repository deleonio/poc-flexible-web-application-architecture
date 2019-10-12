<template>
  <div class="form-group">
    <label :for="props.control.id">{{ props.control.label }}</label>
    <input
      class="form-control"
      :id="props.control.id"
      :name="props.control.name"
      v-model="props.control.value"
      @keyup="handleChange"
    />
    <pre>Input(props): {{props.control}}</pre>
  </div>
</template>

<script>
import Vue from 'vue';
import { reactive, ref, onMounted, onUnmounted, onUpdated, watch } from '@vue/composition-api';

export default {
  props: ['control'],
  setup(props, context) {
    const state = reactive({
      model: props.control.value
    });
    console.log(ref(props.control.value));

    watch(() => {
      console.log(props.control.name, props.control);
    });

    onMounted(() => {
      console.log('mounted');
    });

    onUpdated(() => {
      console.log('updated');
    });

    onUnmounted(() => {
      console.log('unmounted');
    });

    const handleChange = event => {
      props.control.value = event.target.value;
      context.parent.$forceUpdate();
    };

    return {
      props,
      state,
      handleChange
    };
  }
};
</script>
