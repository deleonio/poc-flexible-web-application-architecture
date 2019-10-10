import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { ListSerieController } from './controller';

ANGULARJS_MODULE.component('listSerie', {
  controller: ListSerieController,
  template: `
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
        <tr ng-repeat="serie in this.$ctrl.measuredSeries" key={index}>
          <td>{{index + 1}}</td>
          <td>{{serie.getTitle()}}</td>
          <td>{{serie.getUnit()}}</td>
          <td>
            <button
              class="btn btn-info"
              type="button"
              ng-click="this.$ctrl.edit(serie)"
            >
              Edit
            </button>
            <button
              class="btn btn-danger"
              type="button"
              ng-click="this.$ctrl.delete(serie)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <create-serie></create-serie>
    <edit-serie ng-if="this.$ctrl.measuredSerie !== null" serie="this.$ctrl.measuredSerie"></edit-serie>
  </div>
`
});
