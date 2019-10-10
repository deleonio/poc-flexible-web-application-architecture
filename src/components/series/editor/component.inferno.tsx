import { InfernoComponent } from '../../inferno.component';
import { InputComponent } from '../../input/component.inferno';
import { EditorSerieController } from './controller';

export class EditorSerieComponent extends InfernoComponent {
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
