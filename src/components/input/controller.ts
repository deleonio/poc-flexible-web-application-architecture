export interface InputProps {
  label: string;
  value: any;
}

export class InputController {
  public props: InputProps = null;

  constructor(props: InputProps) {
    this.props = props;
  }
}
