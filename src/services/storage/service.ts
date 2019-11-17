export class StorageService {
  private namespace: string = 'app-store';
  private browserStorage: any = sessionStorage;
  private memoryStorage: any = {};

  public constructor() {
    this.restore();
  }

  public setItem(key: string, value: any) {
    this.memoryStorage[key] = value;
    this.store();
  }

  public getItem(key: string): any {
    this.restore();
    return this.memoryStorage[key];
  }

  private restore() {
    this.memoryStorage = JSON.parse(
      this.browserStorage.getItem(this.namespace) || JSON.stringify(require('./mock.json'))
    );
  }

  private store() {
    this.browserStorage.setItem(this.namespace, JSON.stringify(this.memoryStorage));
  }
}
