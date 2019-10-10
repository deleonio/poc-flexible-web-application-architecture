import { Component } from 'inferno';

import { InputComponent } from '../../input/component.inferno';
import { EditorSerieController } from './controller';

export class EditorSerieComponent extends Component {
  public $ctrl: EditorSerieController = new EditorSerieController();

  public render() {
    return (
      <fieldset>
        <InputComponent control={this.props.editorForm.titleInput} />
        <InputComponent control={this.props.editorForm.unitInput} />
      </fieldset>
    );
  }
}
