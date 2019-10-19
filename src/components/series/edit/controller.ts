import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { DI } from '../../../shares/injector';
import { EditorForm } from '../editor/editor.form';
import { RouterService } from '../../../services/router/service';

export class EditSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public editorForm: EditorForm | null = null;
  private measuredSerie: MeasuredSerieModel | null = null;

  public constructor(measuredSerieId: number) {
    this.changeMeasuredSerie(measuredSerieId);
  }

  public changeMeasuredSerie(measuredSerieId: number) {
    this.measuredSerie = this.measurementService.getSerie(measuredSerieId);
    this.mapTo(this.measuredSerie);
  }

  public updateProps(measuredSerie: MeasuredSerieModel) {
    if (measuredSerie instanceof MeasuredSerieModel) {
      this.measuredSerie = measuredSerie;
      this.mapTo(measuredSerie);
    }
  }

  public mapTo(measuredSerie: MeasuredSerieModel) {
    if (measuredSerie instanceof MeasuredSerieModel) {
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
      this.onCancel();
    }
  }

  public onCancel() {
    RouterService.navigate('series');
  }
}
