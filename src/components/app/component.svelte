<script>
  import { AppController } from './controller';
  import { RouterService, NAVIGO } from '../../services/router/service';
  import ListSerieComponent from '../series/list/component.svelte';
  import CreateSerieComponent from '../series/create/component.svelte';
  import EditSerieComponent from '../series/edit/component.svelte';

  const ctrl = new AppController();
  let resolvedRoute = {
    url: 'series'
  };
  RouterService.subscribe((route, ...args) => {
    resolvedRoute = {
      url: route.url,
      params: args[0],
      query: args[1]
    };
  });
</script>

<div id="app">
  <h4>{ctrl.framework.name} v{ctrl.framework.version}</h4>
  <small>{ctrl.finishedRendering} ms upcomming time</small>
  {#if resolvedRoute.url === 'series'}
    <ListSerieComponent />
  {/if}
  {#if resolvedRoute.url === 'series/create'}
    <CreateSerieComponent />
  {/if}
  {#if resolvedRoute.url === 'series/:id/edit'}
    <EditSerieComponent {resolvedRoute} />
  {/if}
</div>
