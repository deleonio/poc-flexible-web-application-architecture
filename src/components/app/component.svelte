<script>
  import { AppController } from './controller';
  const ctrl = new AppController();
</script>

<div>
  <h4>{ctrl.framework.name} v{ctrl.framework.version}</h4>
  <small>{ctrl.finishedRendering} ms upcomming time</small>
  <!-- <list-serie /> -->
</div>
