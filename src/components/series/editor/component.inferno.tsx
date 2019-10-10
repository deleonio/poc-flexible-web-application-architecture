import { Component } from 'inferno';

import { InputComponent } from '../../input/component.inferno';
import { EditorSerieController } from './controller';

export class EditorSerieComponent extends Component {
  public $ctrl: EditorSerieController = new EditorSerieController();

  public render() {
    console.log(this.props.editorForm);
    return (
      <fieldset>
        <InputComponent control={this.props.editorForm.titleInput} />
        <InputComponent control={this.props.editorForm.unitInput} />
      </fieldset>
    );
  }
}
