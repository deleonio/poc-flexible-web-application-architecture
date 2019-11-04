import { AppController } from './controller';

export class App {
  protected $ctrl: any = null;

  constructor() {
    this.bindControllerLogic(new AppController());
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
