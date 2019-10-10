import { MeasurementService } from '../../../services/measurements/service';
import { DI } from '../../../shares/injector';

export class EditSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');

  public onSubmit() {
    this.measurementService.store();
  }
}
