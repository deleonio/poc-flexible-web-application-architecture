import { RouterService } from '../../services/router/service';
import { STARTUP_TIMESTAMP } from '../../shares/constant';
import { Filters } from '../../shares/filters';
import { DI } from '../../shares/injector';

interface Framework {
  name: string;
  version: string;
}

export class AppController {
  public finishedRendering: number | null = null;
  public readonly framework: Framework = DI.get('Framework');
  public readonly filters: any = Filters;
  public readonly dummies: Object = {
    date: new Date(2010, 3, 5),
    price: 123123123
  };

  constructor() {
    this.finishedRendering = Date.now() - STARTUP_TIMESTAMP;
    RouterService.navigate('series');
  }
}
