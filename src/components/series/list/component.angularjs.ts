import { ANGULARJS_MODULE } from '../../../angularjs.module';
import { ListSerieController } from './controller';

ANGULARJS_MODULE.component('listSerie', {
  controller: ListSerieController,
  template: `
    <div>
      <h5>List</h5>
      <div>
        <button class="btn btn-success" id="add" type="button" ng-click="$ctrl.add()">
          Add
        </button>
      </div>
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
          <tr ng-repeat="serie in $ctrl.measuredSeries" key="{index}">
            <td>{{ $index + 1 }}</td>
            <td>{{ serie.getTitle() }}</td>
            <td>{{ serie.getUnit() }}</td>
            <td>
              <button class="btn btn-info" id="edit-{{$index}}" type="button" ng-click="$ctrl.edit(serie)">
                Edit
              </button>
              <button class="btn btn-danger" id="delete-{{$index}}" type="button" ng-click="$ctrl.delete(serie)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
`
});
