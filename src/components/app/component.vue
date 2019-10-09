<template>
  <div>
    <h4>{{ $ctrl.helloWorld }}</h4>
    <small>
      {{ $ctrl.framework.name }} v{{ $ctrl.framework.version }} |
      {{ $ctrl.finishedRendering }} ms upcomming time
    </small>
    <app-input :props="$ctrl.vornameProps"></app-input>
    <pre>{{ $ctrl.vornameProps.value }}</pre>
  </div>
</template>

<script>
import { AppController } from "./controller";
import InputComponent from "../input/component";

export default {
  components: {
    "app-input": InputComponent
  },
  setup() {
    setInterval(() => {}, 1000);
    return {
      $ctrl: new AppController()
    };
  }
};
</script>
