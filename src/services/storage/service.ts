export class StorageService {
  private memoryStorage: any;
  private namespace: string;

  public constructor(namespace = 'app-store') {
    this.namespace = namespace;
    this.restore();
  }

  public setItem(key: string, value: any) {
    this.memoryStorage[key] = value;
    this.store();
  }

  public getItem(key: string): any {
    return this.memoryStorage[key];
  }

  public removeItem(key: string): any {
    delete this.memoryStorage[key];
    this.store();
  }

  private restore() {
    this.memoryStorage =
      JSON.parse(window.sessionStorage.getItem(this.namespace)) || require('./mock.json');
  }

  private store() {
    window.sessionStorage.setItem(this.namespace, JSON.stringify(this.memoryStorage));
  }
}
