<template>
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
        <tr v-for="(serie, index) in measuredSeriesRef" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ serie.getTitle() }}</td>
          <td>{{ serie.getUnit() }}</td>
          <td>
            <button class="btn btn-info" type="button" @click="onEdit(serie)">Edit</button>
            <button class="btn btn-danger" type="button" @click="onDelete(serie)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <create-serie></create-serie>
    <edit-serie v-if="measuredSerieRef !== null" :serie="measuredSerieRef"></edit-serie>
  </div>
</template>

<script>
import { ListSerieController } from './controller';
import CreateSerieComponent from '../create/component.vue';
import EditSerieComponent from '../edit/component.vue';
import { reactive, ref } from '@vue/composition-api';

export default {
  components: {
    'create-serie': CreateSerieComponent,
    'edit-serie': EditSerieComponent
  },
  setup() {
    const $ctrl = new ListSerieController();
    const measuredSerieRef = ref($ctrl.measuredSerie);
    const measuredSeriesRef = ref($ctrl.measuredSeries);
    const onDelete = measuredSerie => {
      $ctrl.delete(measuredSerie);
    };
    const onEdit = measuredSerie => {
      $ctrl.edit(measuredSerie);
      measuredSerieRef.value = $ctrl.measuredSerie;
    };

    return {
      measuredSerieRef,
      measuredSeriesRef,
      onDelete,
      onEdit
    };
  }
};
</script>
