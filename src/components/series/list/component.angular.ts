import { Component } from '@angular/core';
import { ListSerieController } from './controller';

@Component({
  selector: 'list-serie',
  template: `
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
          <tr *ngFor="let serie of this.measuredSeries; index as i">
            <td>{{ i + 1 }}</td>
            <td>{{ serie.getTitle() }}</td>
            <td>{{ serie.getUnit() }}</td>
            <td>
              <button class="btn btn-info" type="button" (click)="this.edit(serie)">
                Edit
              </button>
              <button class="btn btn-danger" type="button" (click)="this.delete(serie)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <create-serie></create-serie>
      <edit-serie *ngIf="this.measuredSerie !== null" [serie]="this.measuredSerie"></edit-serie>
    </div>
  `
})
export class ListSerieComponent extends ListSerieController {}
