<template>
  <div>{{this.$ctrl.helloWorld}}</div>
</template>

<script>
import { AppController } from "./controller";

export default {
  setup() {
    return {
      $ctrl: new AppController()
    };
  }
};
</script>