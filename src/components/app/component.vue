<template>
  <div>
    <h4>{{ $ctrl.helloWorld }}</h4>
    <small>
      {{ $ctrl.framework.name }} v{{ $ctrl.framework.version }} |
      {{ $ctrl.finishedRendering }} ms upcomming time
    </small>
    <list-serie></list-serie>
  </div>
</template>

<script>
import { AppController } from './controller';
import InputComponent from '../input/component';
import ListSerieComponent from '../series/list/component';

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
