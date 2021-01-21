const expect = chai.expect;

 
describe('Exercice Loops', () => {
  describe('ElevatorMovement', () => {
    it('Should exist and be a function', () => {
      expect(typeof ElevatorMovement).to.equal('function');
    });
    it('should not be undefined', () => {
        expect(ElevatorMovement).to.not.equal('undefined');
    });
    it("should have a condition for the direction", () => {
      expect(typeof direction).to.not.equal('undefined');
    });
    it("Floorlist should exist and its length should be 10", () => {
      expect(typeof floorlist).to.equal('object');
      expect(floorlist.length).to.equal(10);
    });
  });
});


