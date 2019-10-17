<template>
  <div class="form-group">
    <label :for="props.control.id">{{ props.control.label }}</label>
    <input
      class="form-control"
      :id="props.control.id"
      :name="props.control.name"
      v-model="props.control.value"
    />
    <!-- <pre>Input(props): {{props.control}}</pre> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default {
  props: ['control'],
  setup(props: any) {
    return {
      props
    };
  }
};
</script>
