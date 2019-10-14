<template>
  <div>
    <h4>{{ $ctrl.framework.name }} v{{ $ctrl.framework.version }} (like v3 Composition-API)</h4>
    <small>{{ $ctrl.finishedRendering }} ms upcomming time</small>
    <list-serie></list-serie>
  </div>
</template>

<script>
import { AppController } from './controller';
import InputComponent from '../input/component.vue';
import ListSerieComponent from '../series/list/component.vue';

export default {
  components: {
    'app-input': InputComponent,
    'list-serie': ListSerieComponent
  },
  setup() {
    return {
      $ctrl: new AppController()
    };
  }
};
</script>
