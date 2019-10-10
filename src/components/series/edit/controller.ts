import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { DI } from '../../../shares/injector';
import { EditorForm } from '../editor/editor.form';

export class EditSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public readonly editorForm = new EditorForm('serie');
  private measuredSerie: MeasuredSerieModel;

  public updateProps(props: any) {
    this.measuredSerie = props.serie;
    this.editorForm.titleInput.value = this.measuredSerie.getTitle();
    this.editorForm.unitInput.value = this.measuredSerie.getUnit();
  }

  public onSubmit() {
    this.measuredSerie.setTitle(this.editorForm.titleInput.value);
    this.measuredSerie.setUnit(this.editorForm.unitInput.value);
    this.measurementService.store();
    this.measuredSerie = null;
    this.onUpdate();
  }
}
