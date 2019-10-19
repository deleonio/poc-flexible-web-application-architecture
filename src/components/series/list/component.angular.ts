import { ApplicationRef, Component } from '@angular/core';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { ListSerieController } from './controller';

@Component({
  selector: 'list-serie',
  template: `
    <div>
      <h5>List</h5>
      <div>
        <button class="btn btn-success" id="add" type="button" (click)="add()">
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
          <tr *ngFor="let serie of measuredSeries; index as i">
            <td>{{ i + 1 }}</td>
            <td>{{ serie.getTitle() }}</td>
            <td>{{ serie.getUnit() }}</td>
            <td>
              <button class="btn btn-info" id="edit-{{ i }}" type="button" (click)="edit(serie)">
                Edit
              </button>
              <button class="btn btn-danger" id="delete-{{ i }}" type="button" (click)="onDelete(serie)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class ListSerieComponent extends ListSerieController {
  public constructor(private appRef: ApplicationRef) {
    super();
  }

  public onDelete(measuredSerie: MeasuredSerieModel) {
    this.delete(measuredSerie);
    this.appRef.tick();
  }
}
