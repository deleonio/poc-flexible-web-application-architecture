// @flow

import { expect } from 'chai';

import { DI, Injector } from './injector';

describe(`Test: Injector-Service (DI)`, () => {
  const myDI: Injector = new Injector();

  it('DI is instance of Injector', () => {
    expect(DI instanceof Injector).be.true;
    expect(myDI instanceof Injector).be.true;
  });

  describe(`Service registrieren`, () => {
    function test(type: string, service: any) {
      it(`Test-Case register (${type})`, () => {
        // given
        // when
        expect(() => {
          DI.register(type, service);
        }).not.throw();
        // then
      });

      it(`Test-Case get (${type})`, () => {
        // given
        // when
        expect(() => {
          DI.get(type);
        }).not.throw();
        // then
      });
    }
    test(`Array`, []);
    test(`Object`, {});
    test(`number`, 0);
    test(`string`, '');
    test(`boolean`, true);
    test(`null`, null);
  });
  describe(`Service fehlerhaft registrieren`, () => {
    function test(type: string, service: any) {
      it(`Test-Case register (${type})`, () => {
        // given
        // when
        expect(() => {
          DI.register(type, service);
        }).throw();
        // then
      });

      it(`Test-Case get (${type})`, () => {
        // given
        // when
        expect(() => {
          DI.get(type);
        }).throw();
        // then
      });
    }
    test(`undefined`, undefined);
  });
});
