import { StorageService } from '../../services/storage/service';
import { STARTUP_TIMESTAMP } from '../../shares/constant';
import { DI } from '../../shares/injector';
import { InputProps } from '../input/controller';

export class AppController {
  public helloWorld: string = 'Hello world!';
  public finishedRendering: number = null;
  public vornameProps: InputProps = {
    label: 'Vorname',
    value: 'Martin'
  };
  private storageService: StorageService = DI.get('StorageService');
  public readonly framework: Object = DI.get('Framework');

  constructor() {
    this.finishedRendering = Date.now() - STARTUP_TIMESTAMP;
    const list: any[] = this.storageService.getItem('list') || [];
    list.push(new Date());
    this.storageService.setItem('list', list);
    this.storageService.setItem('upcommingTime', this.finishedRendering);
    setInterval(() => {
      console.log(this.vornameProps);
    }, 1000);
  }
}
