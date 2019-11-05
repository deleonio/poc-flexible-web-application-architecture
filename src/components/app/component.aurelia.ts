import { RouterService } from '../../services/router/service';
import { AppController } from './controller';

export class App {
  protected $ctrl: any = null;
  public resolvedRoute: any = {
    url: 'series'
  };

  constructor() {
    this.bindControllerLogic(new AppController());
    RouterService.subscribe((route: any, params: any, query: any) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url
      };
      console.log(this.resolvedRoute);
    });
  }

  private bindControllerLogic($ctrl: Object) {
    if (typeof $ctrl === 'object' && $ctrl !== null) {
      try {
        this.$ctrl = $ctrl;
        // tslint:disable-next-line: no-empty
      } catch (error) {}
    }
  }
}
