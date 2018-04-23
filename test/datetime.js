const should = require('chai').should();
const systemdtz = require('../');


console.log('THIS TEST SET MAY ALTER YOUR DATE AND TIME !!!');

describe('Datetime', function () {
  describe('#get', function () {
    it('should get the date and time', function () {
      return systemdtz.datetime.get()
        .then(datetime => {
          should.exist(datetime);
          datetime.should.be.an.instanceof(Date);
          datetime.getTime().should.be.gte(new Date().getTime() - 10000);
        });
    });
  });

  describe('#set', function () {
    this.timeout(10000);

    it('should set the date and time', function () {
      return systemdtz.datetime.get()
        .then(current => {
          const past = new Date('1996-01-01');

          return systemdtz.datetime.set(past)
            .then(datetime => {
              should.exist(datetime);
              datetime.should.be.an.instanceof(Date);
              datetime.getTime().should.be.above(past.getTime() - 1)
                .and.below(past.getTime() + 10000);
              
              return systemdtz.datetime.set(current);
            });
        });
    });
  });
});
