import { h } from 'preact';

import { PreactComponent } from '../../preact.component';
import { EditorSerieComponent } from '../editor/component.preact';
import { EditSerieController } from './controller';

export class EditSerieComponent extends PreactComponent {
  public constructor(props: any) {
    super(props, new EditSerieController());
  }

  public render() {
    this.$ctrl.updateProps(this.props.serie);
    return (
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          event.stopPropagation();
          this.$ctrl.onSubmit();
        }}
      >
        <h5>Edit a existing measuring serie</h5>
        <EditorSerieComponent editorForm={this.$ctrl.editorForm} />
        <button className="btn btn-primary" type="submit" id="submit-edit">
          Edit
        </button>
      </form>
    );
  }
}
