<script>
  import { ListSerieController } from './controller';
  import CreateSerieComponent from '../create/component.svelte';
  import EditSerieComponent from '../edit/component.svelte';

  const ctrl = new ListSerieController();
  let measuredSeriesRef = ctrl.measuredSeries;
  let measuredSerieRef = ctrl.measuredSerie;
  ctrl.renderView = () => {
    measuredSeriesRef = ctrl.measuredSeries;
  };
</script>

<div>
  <h5>List</h5>
  <div>
    <button
      class="btn btn-success"
      id="add"
      type="button"
      on:click={() => {
        ctrl.add();
      }}>
      Add
    </button>
  </div>
  <br />
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
      {#each measuredSeriesRef as serie, index (index)}
        <tr>
          <td>{index + 1}</td>
          <td>{serie.getTitle()}</td>
          <td>{serie.getUnit()}</td>
          <td>
            <button
              class="btn btn-info"
              id="edit-{index}"
              type="button"
              on:click={() => {
                ctrl.edit(serie);
                measuredSerieRef = ctrl.measuredSerie;
              }}>
              Edit
            </button>
            <button
              class="btn btn-danger"
              id="delete-{index}"
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
</div>
