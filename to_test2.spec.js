const expect = chai.expect;
const assert = chai.assert;

 
describe('Exercice 2', () => {
  describe('SalaryCalculator', () => {
    it('Should exist and be a function', () => {
      expect(typeof salaryCalculator).to.equal('function');
    });
    it('should not be undefined', () => {
      expect(typeof salaryCalculator).to.not.equal('undefined');
    });
    //salariesAddition = 3228
    it("salariesAddition should equal 3228", () => {
      expect(salariesAddition).to.not.equal('undefined');
      expect(salariesAddition).to.equal(3228);
    });
    //tax = document.getElementById("tax").value;
    it("tax should be defined and be 5", () => {
      expect(tax).to.not.equal('undefined');
      expect(parseInt(tax)).to.equal(5);
    });
    //result = 645,60
    it("result should be defined and be 645.6", () => {
      expect(typeof result).to.not.equal('undefined');
      expect(result).to.equal(645.6)
    });
    it("should return 645.6", () => {
      expect(salaryCalculator()).to.equal(645.6);
    });
  });
});


