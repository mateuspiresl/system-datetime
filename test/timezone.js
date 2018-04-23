const should = require('chai').should();
const systemdtz = require('../');


describe('Timezone', function () {
  describe('#get', function () {
    it('should get the timezone', function () {
      return systemdtz.timezone.get()
        .then(timezone => {
          should.exist(timezone);
          timezone.should.be.a('string');
          timezone.should.have.length.above(0);
        });
    });
  });

  describe('#set', function () {
    this.timeout(10000);

    it('should set the timezone', function () {
      return systemdtz.timezone.get()
        .then(current => {
          const recife = 'America/Recife';
          const newyork = 'America/New_York';
          const replacement = current === recife ? newyork : recife;

          return systemdtz.timezone.set(replacement)
            .then(() => systemdtz.timezone.get())
            .then(timezone => {
              should.exist(timezone);
              timezone.should.be.a('string');
              timezone.should.equal(replacement);
              
              return systemdtz.timezone.set(current);
            })
            .then(() => systemdtz.timezone.get())
            .then(timezone => {
              should.exist(timezone);
              timezone.should.be.a('string');
              timezone.should.equal(current);
            });
        });
    });
  });
});
