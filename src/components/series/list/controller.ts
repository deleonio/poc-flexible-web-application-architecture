import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { DI } from '../../../shares/injector';

export class ListSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public measuredSeries: MeasuredSerieModel[] = [];
  public measuredSerie: MeasuredSerieModel = null;

  constructor() {
    this.update();
  }

  public edit(measuredSerie: MeasuredSerieModel) {
    this.measuredSerie = measuredSerie;
  }

  public delete(measuredSerie: MeasuredSerieModel) {
    this.measurementService.removeSerie(measuredSerie);
    this.measurementService.store();
    this.measuredSeries = this.measurementService.getSeries();
  }

  public update() {
    this.measuredSeries = this.measurementService.getSeries();
  }
}
