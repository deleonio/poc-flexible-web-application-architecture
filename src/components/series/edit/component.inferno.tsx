import { Component } from 'inferno';

import { EditorSerieComponent } from '../editor/component.inferno';
import { EditSerieController } from './controller';

export class EditSerieComponent extends Component {
  public $ctrl: EditSerieController = new EditSerieController();
  constructor(props) {
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
        <h5>Edit a new measuring serie</h5>
        <EditorSerieComponent serie={this.props.serie} />
        <button>Edit</button>
      </form>
    );
  }
}
