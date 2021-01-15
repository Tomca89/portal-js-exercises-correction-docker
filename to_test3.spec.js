const expect = chai.expect;

 
describe('Exercice 3', () => {
  describe('salesCaculator', () => {
    it('Should exist and be a function', () => {
      expect(typeof salesCalculator).to.equal('function');
    });
    it('should not be undefined', () => {
      expect(typeof salesCalculator).to.not.equal('undefined');
    });
    //salariesAddition = 3228
    it("average_sold to be defined and equal to 10", () => {
      expect(average_sold).to.not.equal('undefined');
      expect(average_sold).to.equal(10);
    });
    //tax = document.getElementById("tax").value;
    it("cars_inside should exist and equal 200", () => {
      expect(cars_inside).to.not.equal('undefined');
      expect(cars_inside).to.equal(200);
    });
    it("should return 4 weeks", () => {
      expect(salesCalculator()).to.equal(4);
    });
  });
});


