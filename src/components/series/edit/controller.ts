import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { DI } from '../../../shares/injector';
import { EditorForm } from '../editor/editor.form';

export class EditSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public editorForm: EditorForm | null = null;
  private measuredSerie: MeasuredSerieModel | null = null;

  public updateProps(serie: MeasuredSerieModel) {
    if (serie instanceof MeasuredSerieModel) {
      this.measuredSerie = serie;
      this.editorForm = new EditorForm('edit');
      this.editorForm.getInput('title').value = this.measuredSerie.getTitle();
      this.editorForm.getInput('unit').value = this.measuredSerie.getUnit();
    }
  }

  public onSubmit() {
    if (this.measuredSerie instanceof MeasuredSerieModel && this.editorForm instanceof EditorForm) {
      this.measuredSerie.setTitle(this.editorForm.getInput('title').value);
      this.measuredSerie.setUnit(this.editorForm.getInput('unit').value);
      this.measurementService.store();
    }
  }
}
