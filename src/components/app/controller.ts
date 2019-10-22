import { RouterService } from '../../services/router/service';
import { STARTUP_TIMESTAMP } from '../../shares/constant';
import { DI } from '../../shares/injector';

interface Framework {
  name: string;
  version: string;
}

export class AppController {
  public finishedRendering: number | null = null;
  public readonly framework: Framework = DI.get('Framework');

  constructor() {
    this.finishedRendering = Date.now() - STARTUP_TIMESTAMP;
    RouterService.navigate('series');
  }
}
