import { Component } from 'inferno';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { CreateSerieComponent } from '../create/component.inferno';
import { ListSerieController } from './controller';
import { EditSerieComponent } from '../edit/component.inferno';
import { EditorForm } from '../editor/editor.form';

export class ListSerieComponent extends Component {
  public $ctrl: ListSerieController = new ListSerieController();
  constructor(props) {
    super(props);
    this.handleDelete.bind(this);
    this.handleEdit.bind(this);
  }

  private handleDelete(serie: MeasuredSerieModel) {
    this.$ctrl.delete(serie);
    this.forceUpdate();
  }

  private handleEdit(measuredSerie: MeasuredSerieModel) {
    this.$ctrl.edit(measuredSerie);
    this.forceUpdate();
  }

  public render() {
    return (
      <div>
        <h5>List</h5>
        <table>
          <thead>
            <th>#</th>
            <th>Title</th>
            <th>Unit</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.$ctrl.measuredSeries.map((serie: MeasuredSerieModel, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{serie.getTitle()}</td>
                  <td>{serie.getUnit()}</td>
                  <td>
                    <button
                      class="btn btn-info"
                      type="button"
                      onClick={() => {
                        this.handleEdit(serie);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-danger"
                      type="button"
                      onClick={() => {
                        this.handleDelete(serie);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CreateSerieComponent />
        {this.$ctrl.measuredSerie instanceof MeasuredSerieModel && (
          <div>
            <EditSerieComponent serie={this.$ctrl.measuredSerie} />
          </div>
        )}
      </div>
    );
  }
}
