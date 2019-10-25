import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { RouterService } from '../../../services/router/service';
import { DI } from '../../../shares/injector';

const PERFORMANCE_ANZAHL: number = 2500;

export class ListSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public measuredSeries: MeasuredSerieModel[] = [];
  public measuredSerie: MeasuredSerieModel | null = null;
  // tslint:disable-next-line: no-empty
  public renderView: Function = () => {};
  public elements: any[] = [null];
  public duration: number = 0;

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

  public onStart() {
    const start: number = Date.now();
    this.elements = new Array(PERFORMANCE_ANZAHL);

    setTimeout(() => {
      this.duration = (Date.now() - start) / 1000;
      this.elements = [null];
      this.renderView();
    }, 0);
    this.renderView();
  }
}
