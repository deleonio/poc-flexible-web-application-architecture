import React from 'react';

import { ReactComponent } from '../../react.component';
import { EditorSerieComponent } from '../editor/component.react';
import { EditSerieController } from './controller';

export class EditSerieComponent extends ReactComponent {
  public constructor(props: any) {
    super(props, new EditSerieController());
  }

  public render() {
    this.$ctrl.updateProps(this.props.serie);
    return (
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          this.$ctrl.onSubmit();
        }}
      >
        <h5>Edit a existing measuring serie</h5>
        <EditorSerieComponent editorForm={this.$ctrl.editorForm} />
        <button className="btn btn-primary" id="submit-edit">
          Edit
        </button>
      </form>
    );
  }
}
