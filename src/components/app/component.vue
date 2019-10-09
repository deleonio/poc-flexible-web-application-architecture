<template>
  <div>
    <h4>{{ this.$ctrl.helloWorld }}</h4>
    <small>
      {{ this.$ctrl.framework.name }} v{{ this.$ctrl.framework.version }} | {{ this.$ctrl.finishedRendering }} ms
      upcomming time
    </small>
  </div>
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