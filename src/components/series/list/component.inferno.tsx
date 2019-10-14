import { Component } from 'inferno';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { CreateSerieComponent } from '../create/component.inferno';
import { EditSerieComponent } from '../edit/component.inferno';
import { ListSerieController } from './controller';

export class ListSerieComponent extends Component {
  public $ctrl: ListSerieController = new ListSerieController();

  constructor(props) {
    super(props);
    this.$ctrl.renderView = this.forceUpdate.bind(this);
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Unit</th>
              <th scope="col">Action</th>
            </tr>
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
                      className="btn btn-info"
                      type="button"
                      onClick={() => {
                        this.handleEdit(serie);
                      }}
                    >
                      Edit
                    </button>{' '}
                    <button
                      className="btn btn-danger"
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
