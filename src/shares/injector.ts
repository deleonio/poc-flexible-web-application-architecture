export class Injector {
  private readonly services: any = {};

  public register(identifier: string, service: Object) {
    if (typeof identifier === 'string' && this.services.hasOwnProperty(identifier) === false && service !== undefined) {
      Object.defineProperty(this.services, identifier, {
        value: service,
        writable: false,
      });
    } else {
      throw new Error(`The service '${identifier}' could not registered!`);
    }
  }

  public get(identifier: string): any {
    if (typeof identifier === 'string' && this.services.hasOwnProperty(identifier) === true) {
      return this.services[identifier];
    } else {
      throw new Error(`The service '${identifier}' is not registered!`);
    }
  }
}

export const DI: Injector = new Injector();
