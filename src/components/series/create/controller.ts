import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { DI } from '../../../shares/injector';
import { EditorForm } from '../editor/editor.form';

export class CreateSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public readonly editorForm: EditorForm = new EditorForm('serie');

  public onSubmit() {
    this.measurementService.addSerie(
      new MeasuredSerieModel(this.editorForm.titleInput.value, this.editorForm.unitInput.value)
    );
    this.measurementService.store();
  }
}
