import { StorageService } from '../services/storage/service';
import { DI } from './injector';

DI.register('StorageService', new StorageService(DI.get('Framework')));
