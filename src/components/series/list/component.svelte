<script>
  import { ListSerieController } from './controller';
  import CreateSerieComponent from '../create/component.svelte';
  import EditSerieComponent from '../edit/component.svelte';

  const ctrl = new ListSerieController();
  let measuredSeriesRef = ctrl.measuredSeries;
  let measuredSerieRef = ctrl.measuredSerie;
</script>

<div>
  <h5>List</h5>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Unit</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {#each measuredSeriesRef as serie, index}
        <tr key={index}>
          <td>{serie.getTitle()}</td>
          <td>{serie.getUnit()}</td>
          <td>
            <button
              class="btn btn-info"
              type="button"
              on:click={() => {
                ctrl.edit(serie);
                measuredSerieRef = ctrl.measuredSerie;
              }}>
              Edit
            </button>
            <button
              class="btn btn-danger"
              type="button"
              on:click={() => {
                ctrl.delete(serie);
                measuredSeriesRef = ctrl.measuredSeries;
              }}>
              Delete
            </button>
          </td>
        </tr>
      {/each}

    </tbody>
  </table>
  <CreateSerieComponent />
  {#if measuredSerieRef !== null}
    <EditSerieComponent measuredSerie={measuredSerieRef} />
  {/if}
</div>
