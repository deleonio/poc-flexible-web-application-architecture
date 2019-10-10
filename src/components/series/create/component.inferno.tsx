import { Component } from 'inferno';

import { InputComponent } from '../../input/component.inferno';
import { CreateSerieController } from './controller';
import { EditorSerieComponent } from '../editor/component.inferno';

export class CreateSerieComponent extends Component {
  public $ctrl: CreateSerieController = new CreateSerieController();
  public constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.$ctrl.onSubmit();
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>Create a new measuring serie</h5>
        <EditorSerieComponent serie={this.$ctrl.serie} />
        <button>Add</button>
      </form>
    );
  }
}
