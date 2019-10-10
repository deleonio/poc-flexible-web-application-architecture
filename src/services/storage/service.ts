export class StorageService {
  private namespace: string = 'app-store';
  private browserStorage: any = localStorage;
  private memoryStorage: Object = {};
  private framework: Object = {
    name: 'Unknown',
    version: '0.0.0'
  };

  public constructor(framework: Object) {
    this.framework = framework;
    this.restore();
    this.setItem('framework', this.framework);
    this.store();
  }

  public setItem(key: string, value: any) {
    this.memoryStorage[key] = value;
    this.store();
  }

  public getItem(key: string): any {
    return this.memoryStorage[key];
  }

  private restore() {
    this.memoryStorage = JSON.parse(this.browserStorage.getItem(this.namespace) || '{}');
  }

  private store() {
    this.browserStorage.setItem(this.namespace, JSON.stringify(this.memoryStorage));
  }
}
