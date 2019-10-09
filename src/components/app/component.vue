<template>
  <div>
    <h4>{{ this.$ctrl.helloWorld }}</h4>
    <small>Vue v{{version}} | {{ this.$ctrl.finishedRendering }} ms upcomming time</small>
  </div>
</template>

<script>
import { AppController } from "./controller";
import Vue from "vue";

export default {
  setup() {
    return {
      $ctrl: new AppController(),
      version: Vue.version
    };
  }
};
</script>