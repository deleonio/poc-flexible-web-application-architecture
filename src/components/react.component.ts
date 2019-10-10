import { Component } from 'react';

export class ReactComponent extends Component {
  protected $ctrl: any = null;

  constructor(props: any, $ctrl: Object = null) {
    super(props);
    this.bindControllerLogic($ctrl, props);
  }

  private bindControllerLogic($ctrl: Object, props: Object = {}) {
    this.$ctrl = $ctrl;
    this.$ctrl.onUpdate = () => {
      this.forceUpdate();
    };
  }
}
