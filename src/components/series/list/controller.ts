import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { RouterService } from '../../../services/router/service';
import { DI } from '../../../shares/injector';

export class ListSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public measuredSeries: MeasuredSerieModel[] = [];
  public measuredSerie: MeasuredSerieModel | null = null;
  // tslint:disable-next-line: no-empty
  public renderView: Function = () => {};

  constructor() {
    this.measurementService.observe.subscribe(() => {
      this.update();
    });
    this.update();
  }

  public add() {
    RouterService.navigate('series/create');
  }

  public edit(measuredSerie: MeasuredSerieModel) {
    RouterService.navigate(`series/${measuredSerie.getId()}/edit`);
  }

  public update() {
    this.measuredSeries = this.measurementService.getSeries();
    this.renderView();
  }
}
