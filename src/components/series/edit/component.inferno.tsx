import { Component } from 'inferno';

import { EditorSerieComponent } from '../editor/component.inferno';
import { EditorForm } from '../editor/editor.form';
import { EditSerieController } from './controller';

export class EditSerieComponent extends Component {
  public $ctrl: EditSerieController;

  public constructor(props) {
    super(props);
    this.$ctrl = new EditSerieController(props.serie);
    console.log(this.$ctrl.editorForm);
  }

  public render() {
    return (
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          this.$ctrl.onSubmit();
        }}
      >
        <h5>Edit a new measuring serie</h5>
        <EditorSerieComponent editorForm={this.$ctrl.editorForm} />
        <button>Edit</button>
      </form>
    );
  }
}
