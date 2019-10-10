import { InfernoComponent } from '../../inferno.component';
import { EditorSerieComponent } from '../editor/component.inferno';
import { EditSerieController } from './controller';

export class EditSerieComponent extends InfernoComponent {
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
        <h5>Edit a new measuring serie</h5>
        <EditorSerieComponent editorForm={this.$ctrl.editorForm} />
        <button className="btn btn-primary">Edit</button>
      </form>
    );
  }
}
