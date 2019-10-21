import React from 'react';

import { ReactComponent } from '../../react.component';
import { EditorSerieComponent } from '../editor/component.react';
import { EditSerieController } from './controller';

export class EditSerieComponent extends ReactComponent {
  public constructor(props: any) {
    super(props, new EditSerieController(props.resolvedRoute.params.id));
  }

  public render() {
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
        <button
          className="btn"
          type="reset"
          id="cancel-edit"
          onClick={() => {
            this.$ctrl.onCancel();
          }}
        >
          Abbrechen
        </button>
      </form>
    );
  }
}
