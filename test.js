const markup = require('./'),
  cosmetic = require('cosmetic'),
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
  describe('markup(complex)', () => {
    it('should successfully return a string', () => {
      const result = markup([
        {
          created_at: Date.now() / 1000,
          updated_at: Date.now() / 1000,
          uuid: '48deb08d-b141-4d7f-97e2-f456e40abba0' ,
          amount: 9651 ,
          depth: 9.59 ,
          height: 9.45 ,
          identifier: '3686669457' ,
          index: 9 ,
          info: 'Minus voluptas omnis qui.' ,
          locked: false ,
          name: 'Blue Moon' ,
          offered: true ,
          properties: { malts: 'Chocolate malt', style: 'Scottish And Irish Ale' },
          quantity: 13 ,
          subname: 'Heineken' ,
          tags: [ 'Featured', 'Birra Moretti', 'Lowenbrau' ] ,
          weight: 1.83 ,
          width: 3.7 ,
          container: '2fe4d150-cec0-46f9-8de8-58d33afb47b0' ,
          price: 'd0e6ae37-e4dd-4df9-a470-6f5c52e31d59' ,
          product: 'e863301b-5a0a-4a77-9039-f9e342cd8836' ,
          data: {
            options: [0, 1, 2],
            image: 'http://lvh.me:3000/uploads/image/image/1d34c811-cc62-4da5-9501-054870e6b060/beer_5.jpg',
            thumbnail: 'http://lvh.me:3000/uploads/image/image/1d34c811-cc62-4da5-9501-054870e6b060/thumb_beer_5.jpg',
            total: 9651
          }
        },
        {
          created_at: Date.now() / 1000,
          updated_at: Date.now() / 1000,
          uuid: '48deb08d-b141-4d7f-97e2-f456e40abba0' ,
          amount: 9651 ,
          depth: 9.59 ,
          height: 9.45 ,
          identifier: '3686669457' ,
          index: 9 ,
          info: 'Minus voluptas omnis qui.' ,
          locked: false ,
          name: 'Blue Moon' ,
          offered: true ,
          properties: { malts: 'Chocolate malt', style: 'Scottish And Irish Ale' },
          quantity: 13 ,
          subname: 'Heineken' ,
          tags: [ 'Featured', 'Birra Moretti', 'Lowenbrau' ] ,
          weight: 1.83 ,
          width: 3.7 ,
          container: '2fe4d150-cec0-46f9-8de8-58d33afb47b0' ,
          price: 'd0e6ae37-e4dd-4df9-a470-6f5c52e31d59' ,
          product: 'e863301b-5a0a-4a77-9039-f9e342cd8836' ,
          data: {
            options: [0, 1, 2],
            image: 'http://lvh.me:3000/uploads/image/image/1d34c811-cc62-4da5-9501-054870e6b060/beer_5.jpg',
            thumbnail: 'http://lvh.me:3000/uploads/image/image/1d34c811-cc62-4da5-9501-054870e6b060/thumb_beer_5.jpg',
            total: 9651
          }
        }
      ], {
        translations: {
          created_at: (d) => new Date(d * 1000),
          updated_at: (d) => new Date(d * 1000),
        },
        styles: {
          date: (d) => cosmetic.red(`${d.toLocaleDateString()} @ ${d.toLocaleTimeString()}`)
        }
      });
      should.equal(typeof result, 'string');
    });
  });
});
