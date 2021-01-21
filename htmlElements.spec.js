const expect = chai.expect;

 
describe('Exercise HTMLELEMENTS', () => {
  describe('cars array should exist', () => {
    it('Should exist and be a function', () => {
      expect(typeof cars).to.equal('object');
    });
    it('should have a length of 0', () => {
        expect(cars.length).to.equal(3);
    });
    ReplaceArray()
    it("should have model-1 to 3 inside the array", () => {
      expect(cars[0]).to.equal('model-1');
      expect(cars[1]).to.equal('model-2');
      expect(cars[2]).to.equal('model-3');
    });
  });
});


