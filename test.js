const markup = require('./'),
  faker = require('faker'),
  chai = require('chai'),
  should = chai.should();

describe('Data-Markup', () => {
  describe('markup()', () => {
    it('should successfully return a string', () => {
      const result = markup();
      should.equal(typeof result, 'string');
    });
  });
  describe('markup(array)', () => {
    it('should successfully return a string', () => {
      const result = markup([ faker.random.word(), faker.random.word() ]);
      should.equal(typeof result, 'string');
    });
  });
  describe('markup(boolean)', () => {
    it('should successfully return a string', () => {
      const result = markup(faker.random.boolean());
      should.equal(typeof result, 'string');
    });
  });
  describe('markup(null)', () => {
    it('should successfully return a string', () => {
      const result = markup(null);
      should.equal(typeof result, 'string');
    });
  });
  describe('markup(number)', () => {
    it('should successfully return a string', () => {
      const result = markup(faker.random.number());
      should.equal(typeof result, 'string');
    });
  });
  describe('markup(object)', () => {
    it('should successfully return a string', () => {
      const result = markup({ a: faker.random.word(), b: faker.random.word() });
      should.equal(typeof result, 'string');
    });
  });
  describe('markup(string)', () => {
    it('should successfully return a string', () => {
      const result = markup(faker.random.string);
      should.equal(typeof result, 'string');
    });
  });
  describe('markup(object, { translations })', () => {
    it('should successfully translate', () => {
      const a = faker.random.word();
      const b = faker.random.word();
      const c = faker.random.word();
      const result = markup({ a, b }, { translations: { a: (v) => v + c }});
      should.equal(typeof result, 'string');
      should.equal(result.includes(a + c), true);
    });
  });
});
