import { MeasurementService } from '../services/measurements/service';
import { StorageService } from '../services/storage/service';
import { DI } from './injector';

DI.register('StorageService', new StorageService(DI.get('Framework')));
DI.register('MeasurementService', new MeasurementService());
