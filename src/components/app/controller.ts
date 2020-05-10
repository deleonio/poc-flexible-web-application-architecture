import { DI } from '@leanup/features/injector';

import { RouterService } from '../../services/router/service';
import { STARTUP_TIMESTAMP } from '../../shares/constant';
import { Filters } from '../../shares/filters';

interface Framework {
  name: string;
  version: string;
}

export interface Props {
  test: string;
}

export class AppController {
  public finishedRendering: number | null = null;
  public readonly framework: Framework = DI.get('Framework');
  public readonly filters: any = Filters;
  public readonly dummies: any = {
    date: new Date(2010, 3, 5),
    price: 123123123,
  };

  constructor() {
    this.finishedRendering = Date.now() - STARTUP_TIMESTAMP;
    RouterService.navigate('series');
    const APP_METADATE = {
      author: 'APP_AUTHOR',
      homepage: 'APP_HOMEPAGE',
      name: 'APP_NAME',
      version: 'APP_VERSION',
    };
    console.log('APP_METADATE', APP_METADATE);
  }
}
