import { Subject } from 'rxjs';

import { DI } from '@leanup/features/injector';

import { MeasuredItemModel } from '../../models/measured-item.model';
import { MeasuredSerieModel } from '../../models/measured-series.model';
import { StorageService } from '../storage/service';

export class MeasurementService {
  private measuredSeries: MeasuredSerieModel[] = [];
  private readonly storageStorage: StorageService = DI.get('StorageService');
  public readonly observe: Subject<MeasuredSerieModel[]> = new Subject();

  constructor() {
    this.restore();
  }

  public getSeries(): MeasuredSerieModel[] {
    this.restore();
    return this.measuredSeries;
  }

  public getSerie(id: number): MeasuredSerieModel {
    return this.measuredSeries.find((measuredSerie: MeasuredSerieModel) => {
      // tslint:disable-next-line: triple-equals
      return measuredSerie.getId() == id;
    });
  }

  public addSerie(serie: MeasuredSerieModel) {
    if (serie instanceof MeasuredSerieModel) {
      this.measuredSeries.push(serie);
      this.store();
    } else {
      throw new Error(`The measuring serie is not valid!`);
    }
  }

  public removeSerie(serie: MeasuredSerieModel) {
    const index = this.measuredSeries.indexOf(serie);
    if (index >= 0) {
      this.measuredSeries.splice(index, 1);
      this.store();
    }
  }

  private restore() {
    let series: Object[] = this.storageStorage.getItem('measuredSeries');
    this.measuredSeries = [];
    if (Array.isArray(series) === false) {
      series = [];
    }
    series.forEach((serie: any) => {
      const measuredSerie = new MeasuredSerieModel(serie.title, serie.unit);
      if (typeof serie.id === 'number') {
        measuredSerie.setId(serie.id);
      }
      if (Array.isArray(serie.measurements)) {
        serie.measurements.forEach((measurement: any) => {
          measuredSerie.addMeasurement(new MeasuredItemModel(measurement.date, measurement.value));
        });
      }
      this.measuredSeries.push(measuredSerie);
    });
  }

  public store() {
    const series: Object[] = [];
    this.measuredSeries.forEach((measuredSerie: MeasuredSerieModel) => {
      const measurements: Object[] = [];
      measuredSerie.getMeasurements().forEach((measurement: any) => {
        measurements.push({
          date: measurement.date,
          value: measurement.value,
        });
      });
      series.push({
        id: measuredSerie.getId(),
        measurements,
        title: measuredSerie.getTitle(),
        unit: measuredSerie.getUnit(),
      });
    });
    this.storageStorage.setItem('measuredSeries', series);
    this.observe.next();
  }
}
