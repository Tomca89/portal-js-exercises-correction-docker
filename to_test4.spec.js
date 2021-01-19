const expect = chai.expect;

 
describe('Exercice 4', () => {
  describe('Dealership', () => {
    it('Should exist and be a class', () => {
      expect(typeof DealerShip).to.equal('function');
    });
    it('should not be undefined', () => {
      expect(typeof DealerShip).to.not.equal('undefined');
    });
    it("RocketCars should be an object and exist", () => {
      expect(RocketCars).to.not.equal('undefined');
      expect(typeof RocketCars).to.equal('object');
    });
    it("Calculate Ratio should exist and return a number", () => {
      expect(typeof RocketCars.CalculateRatio()).to.not.equal('undefined');
      expect(RocketCars.CalculateRatio()).to.equal(38);
    });
  });
});


