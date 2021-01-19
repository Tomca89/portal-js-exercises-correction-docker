const expect = chai.expect;

 
describe('Exercice 5', () => {
  describe('dealership', () => {
    it('Should exist and be a string', () => {
      expect(typeof dealership).to.equal('string');
      expect(dealership).to.equal('Rocket Cars');
    });
    it('should not be undefined', () => {
      expect(typeof dealership).to.not.equal('undefined');
    });
    it("isStoreOpened should be false", () => {
      expect(typeof isStoreOpened).to.equal('boolean');
      expect(isStoreOpened).to.equal(false);
    });
    it("cars should be an array and contain 2 things", () => {
      expect(typeof cars).to.equal('object');
      expect(cars.length).to.equal(2);
      expect(cars[0]).to.equal('Lamborghini');
      expect(cars[1]).to.equal('Ferrari');
    });
    it("carNum should be a number and equal to 2", () => {
        expect(typeof carNum).to.equal('number');
        expect(carNum).to.equal(2);
      });

  });
});


