import React from 'react';

import { InputComponent } from '../../input/component.react';
import { ReactComponent } from '../../react.component';
import { EditorSerieController } from './controller';

export class EditorSerieComponent extends ReactComponent {
  public constructor(props: any) {
    super(props, new EditorSerieController());
  }

  public render() {
    return (
      <div>
        <InputComponent control={this.props.editorForm.titleInput} />
        <InputComponent control={this.props.editorForm.unitInput} />
      </div>
    );
  }
}
