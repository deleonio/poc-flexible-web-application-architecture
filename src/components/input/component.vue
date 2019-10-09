<template>
  <div>
    <label>
      {{ $ctrl.props.label }}
      <input v-model="$ctrl.props.value" @keyup="handleChange" />
    </label>
    <pre>{{ $ctrl.props.value }}</pre>
  </div>
</template>

<script>
import { watch } from "vue";
import { InputController } from "./controller";
import { reactive } from "@vue/composition-api";

export default {
  props: ["props"],
  setup(props) {
    const $ctrl = reactive(new InputController(props.props));

    const handleChange = event => {
      $ctrl.props.value = event.target.value;
    };

    return {
      $ctrl: $ctrl,
      handleChange: handleChange
    };
  }
};
</script>
