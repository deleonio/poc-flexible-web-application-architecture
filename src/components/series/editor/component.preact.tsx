import { h } from 'preact';

import { InputComponent } from '../../input/component.preact';
import { PreactComponent } from '../../preact.component';
import { EditorSerieController } from './controller';

export class EditorSerieComponent extends PreactComponent {
  public constructor(props: any) {
    super(props, new EditorSerieController());
  }

  public render() {
    return (
      <div>
        <InputComponent control={this.props.editorForm.getInput('title')} />
        <InputComponent control={this.props.editorForm.getInput('unit')} />
      </div>
    );
  }
}
