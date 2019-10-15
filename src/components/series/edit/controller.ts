import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { DI } from '../../../shares/injector';
import { EditorForm } from '../editor/editor.form';

export class EditSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public editorForm = new EditorForm('edit');
  private measuredSerie: MeasuredSerieModel;

  public updateProps(serie: any) {
    this.measuredSerie = serie;
    this.editorForm = new EditorForm('edit');
    this.editorForm.getInput('title').value = this.measuredSerie.getTitle();
    this.editorForm.getInput('unit').value = this.measuredSerie.getUnit();
  }

  public onSubmit() {
    this.measuredSerie.setTitle(this.editorForm.getInput('title').value);
    this.measuredSerie.setUnit(this.editorForm.getInput('unit').value);
    this.measurementService.store();
  }
}
