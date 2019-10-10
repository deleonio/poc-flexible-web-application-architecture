<template>
  <div>
    <h5>List</h5>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Unit</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(serie, index) in $ctrl.measuredSeries" :key="index">
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
    <edit-serie v-if="$ctrl.measuredSerie !== null" serie="$ctrl.measuredSerie"></edit-serie>
  </div>
</template>

<script>
import { ListSerieController } from './controller';
import CreateSerieComponent from '../create/component';
import EditSerieComponent from '../edit/component';

export default {
  components: {
    'create-serie': CreateSerieComponent,
    'edit-serie': EditSerieComponent
  },
  setup() {
    const $ctrl = new ListSerieController();
    const onDelete = measuredSerie => {
      $ctrl.delete(measuredSerie);
    };
    const onEdit = measuredSerie => {
      $ctrl.edit(measuredSerie);
    };
    return {
      $ctrl,
      onDelete,
      onEdit
    };
  }
};
</script>
