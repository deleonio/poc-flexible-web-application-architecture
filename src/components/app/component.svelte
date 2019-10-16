<script>
  import { AppController } from './controller';
  import { RouterService, NAVIGO } from '../../services/router/service';
  import ListSerieComponent from '../series/list/component.svelte';
  import CreateSerieComponent from '../series/create/component.svelte';
  const ctrl = new AppController();
  let resolveRoute = null;
  RouterService.subscribe((route, ...args) => {
    resolveRoute = route.url;
  });
</script>

<div id="app">
  <h4>{ctrl.framework.name} v{ctrl.framework.version}</h4>
  <small>{ctrl.finishedRendering} ms upcomming time</small>
  {#if resolveRoute === '/series'}
    <ListSerieComponent />
  {/if}
  {#if resolveRoute === '/series'}
    <CreateSerieComponent />
  {/if}
</div>
