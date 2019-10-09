import { STARTUP_TIMESTAMP } from '../../constants';

export class AppController {
  public helloWorld: string = 'Hello world!';
  public finishedRendering: number = Date.now() - STARTUP_TIMESTAMP;
}
