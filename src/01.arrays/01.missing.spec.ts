import { missing } from './01.missing';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('Arrays: missing element', () => {

  it('should return correct value', () => {
    expect(missing()).to.equal(undefined);
  });

});