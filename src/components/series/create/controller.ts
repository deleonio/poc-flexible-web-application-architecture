import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { DI } from '../../../shares/injector';
import { InputProps } from '../../input/controller';

export class CreateSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public readonly serie: Object = {
    title: null,
    unit: null
  };

  public onSubmit() {
    this.measurementService.addSerie(new MeasuredSerieModel(this.serie.title, this.serie.unit));
    this.measurementService.store();
  }
}
