<script>
  import { AppController } from './controller';
  import ListSerieComponent from '../series/list/component.svelte';
  const ctrl = new AppController();
</script>

<div>
  <h4>{ctrl.framework.name} v{ctrl.framework.version}</h4>
  <small>{ctrl.finishedRendering} ms upcomming time</small>
  <br />
  <code>[TODO: Application context incomplete ...]</code>
  <ListSerieComponent />
</div>
