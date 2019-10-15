import { expect } from 'chai';

import { AppController } from './components/app/controller';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Test',
  version: '0.0.0'
});
require('./shares/register');

const ctrl = new AppController();

describe('test', () => {
  it('hello', () => {
    // tslint:disable-next-line: no-unused-expression
    expect(ctrl instanceof AppController).to.be.true;
  });
});
