export class InputControl {
  public label: string = null;
  public name: string = null;
  public value: any = null;

  constructor(name: string, properties: any = {}) {
    this.name = name;
    if (properties) {
      this.label = properties.label;
      this.value = properties.value;
    }
  }

  get id(): string {
    return `id-${this.name}`;
  }
}
