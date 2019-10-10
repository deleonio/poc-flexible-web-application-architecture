import { Component } from 'inferno';

import { EditorSerieComponent } from '../editor/component.inferno';
import { CreateSerieController } from './controller';

export class CreateSerieComponent extends Component {
  public $ctrl: CreateSerieController = new CreateSerieController();
  public constructor(props) {
    super(props);
  }

  public render() {
    return (
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          this.$ctrl.onSubmit();
        }}
      >
        <h5>Create a new measuring serie</h5>
        <EditorSerieComponent editorForm={this.$ctrl.editorForm} />
        <button>Add</button>
      </form>
    );
  }
}
