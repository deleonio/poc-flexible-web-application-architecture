import { MeasuredItemModel } from './measured-item.model';

export class MeasuredSerieModel {
  private readonly measurements: MeasuredItemModel[] = [];
  private title: string;
  private unit: string;

  constructor(title: string, unit: string) {
    this.title = title;
    this.unit = unit;
  }

  public addMeasurement(measurement: MeasuredItemModel) {
    this.measurements.push(measurement);
  }
  public remmoveMeasurement(measurement: MeasuredItemModel) {
    const index = this.measurements.indexOf(measurement);
    if (index >= 0) {
      this.measurements.splice(index, 1);
    }
  }
  public getMeasurements(): MeasuredItemModel[] {
    return this.measurements;
  }
  public getTitle(): string {
    return this.title;
  }
  public getUnit(): string {
    return this.unit;
  }
}
