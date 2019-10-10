import { MeasuredItemModel } from '../../models/measured-item.model';
import { MeasuredSerieModel } from '../../models/measured-series.model';
import { DI } from '../../shares/injector';
import { StorageService } from '../storage/service';

export class MeasurementService {
  private readonly measuredSeries: MeasuredSerieModel[] = [];
  private readonly storageStorage: StorageService = DI.get('StorageService');

  constructor() {
    this.restore();
  }

  public addSerie(serie: MeasuredSerieModel) {
    if (serie instanceof MeasuredSerieModel) {
      this.measuredSeries.push(serie);
    } else {
      throw new Error(`The measuring serie is not valid!`);
    }
  }

  public removeSerie(serie: MeasuredSerieModel) {
    const index = this.measuredSeries.indexOf(serie);
    if (index >= 0) {
      this.measuredSeries.splice(index, 1);
    }
  }

  public getSeries(): MeasuredSerieModel[] {
    return this.measuredSeries;
  }

  private restore() {
    let series: Object[] = this.storageStorage.getItem('measuredSeries');
    if (Array.isArray(series) === false) {
      series = [];
    }
    series.forEach((serie: any) => {
      const measuredSerie = new MeasuredSerieModel(serie.title, serie.unit);
      serie.measurements.forEach((measurement: any) => {
        measuredSerie.addMeasurement(new MeasuredItemModel(measurement.date, measurement.value));
      });
      this.addSerie(measuredSerie);
    });
    console.log(this.measuredSeries);
  }

  public store() {
    const series: Object[] = [];
    this.measuredSeries.forEach((measuredSerie: MeasuredSerieModel) => {
      const measurements: Object[] = [];
      measuredSerie.getMeasurements().forEach((measurement: any) => {
        measurements.push({
          date: measurement.date,
          value: measurement.value
        });
      });
      series.push({
        measurements,
        title: measuredSerie.getTitle(),
        unit: measuredSerie.getUnit()
      });
    });
    this.storageStorage.setItem('measuredSeries', series);
    console.log(this.measuredSeries);
  }
}
