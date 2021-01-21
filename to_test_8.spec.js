const expect = chai.expect;
const assert = chai.assert;

 
describe('Exercice 8', () => {
  describe('Document Ready', () => {
    it('Should return Rocket Cars when the document is ready', () => {
      assert.equal(jQuery.ready(), "Rocket Cars")
      expect(jQuery.ready()).to.equal('Rocket Cars')
    });
  });
});


