export class AngularJsComponent {
  protected $ctrl: any = null;

  constructor(props: any, $ctrl: Object = null) {
    this.bindControllerLogic($ctrl, props);
  }

  private bindControllerLogic($ctrl: Object, props: Object = {}) {
    this.$ctrl = $ctrl;
    this.$ctrl.onUpdate = () => {
      console.log(this);
    };
  }
}
