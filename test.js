const calculations = require("./to_test");

describe("Exercise 1", () => {
  it("should exist and be defined", () => {
    expect(typeof calculations.addition).toEqual("function");
    expect(calculations.addition()).toBeDefined();
  });

  it("should exist and be defined", () => {
    expect(typeof calculations.substraction).toEqual("function");
    expect(calculations.substraction()).toBeDefined();
  });

  it("should exist and be defined", () => {
    expect(typeof calculations.multiplication).toEqual("function");
    expect(calculations.multiplication()).toBeDefined();
  });

  it("should exist and be defined", () => {
    expect(typeof calculations.division).toEqual("function");
    expect(calculations.division()).toBeDefined();
  });



  it("should be an addition", () => {

    expect(calculations.addition(1, 1)).toEqual(2);
  });

  it("should be a substraction", () => {
    expect(calculations.substraction(5, 3)).toEqual(2);
  });

  it("should be a multiplication", () => {
    expect(calculations.multiplication(1, 3)).toEqual(3);
  });

  it("should be a division", () => {
    expect(calculations.division(4, 2)).toEqual(2);
  });

  test("function", () => {
    const mockFnAddition = jest.fn().mockImplementation(() => calculations.addition(1, 1));
    const mockFnSubstraction = jest.fn().mockImplementation(() => calculations.substraction(4, 5));
    const mockFnMultiplication = jest.fn().mockImplementation(() => calculations.multiplication(5.6, 4));
    const mockFnDivision = jest.fn().mockImplementation(() => calculations.division(10, 5));

    expect(mockFnAddition()).toHaveReturnedWith(2);
    expect(mockFnSubstraction()).toHaveReturnedWith(-1);
    expect(mockFnMultiplication()).toHaveReturnedWith(22.4);
    expect(mockFnDivision()).toHaveReturnedWith(2);
  });

});
