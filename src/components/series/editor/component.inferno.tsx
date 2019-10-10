import { Component } from 'inferno';

import { InputComponent } from '../../input/component.inferno';
import { EditorSerieController } from './controller';

export class EditorSerieComponent extends Component {
  public $ctrl: EditorSerieController = new EditorSerieController();

  public constructor(props: any) {
    super(props);
    this.$ctrl.titleInput.value = props.serie.title;
    this.$ctrl.unitInput.value = props.serie.unit;
  }

  public render() {
    return (
      <fieldset>
        <InputComponent label={this.$ctrl.titleInput} />
        <InputComponent props={this.$ctrl.unitInput} />
        {/* <InputComponent label="Title" value={this.props.serie.title} />
        <InputComponent label="Unit" value={this.props.serie.title} /> */}
      </fieldset>
    );
  }
}
