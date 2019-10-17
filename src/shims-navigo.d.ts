declare module 'navigo' {
  class Navigo {
    constructor(root: any, hash: boolean);
    public on(...args: any): any;
    public navigate(...args: any): any;
    public lastRouteResolved(...args: any): any;
  }
  export default Navigo;
}
