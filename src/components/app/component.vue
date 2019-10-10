<template>
  <div>
    <h4>{{ $ctrl.helloWorld }}</h4>
    <small>
      {{ $ctrl.framework.name }} v{{ $ctrl.framework.version }} |
      {{ $ctrl.finishedRendering }} ms upcomming time
    </small>
  </div>
</template>

<script>
import { AppController } from './controller';
import InputComponent from '../input/component';

export default {
  components: {
    'app-input': InputComponent
  },
  setup() {
    return {
      $ctrl: new AppController()
    };
  }
};
</script>
