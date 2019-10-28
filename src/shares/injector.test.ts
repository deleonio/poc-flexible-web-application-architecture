// @flow

import { expect } from 'chai';
import { DI } from './injector';

describe(`Test: Injector-Service (DI)`, () => {
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
