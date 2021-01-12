const calculations = require("./to_test1.js");
const exercise2 = require("./to_test2.js");
const beans = require("./puppeeter.js");

beans.beans()

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
});


describe("Exercise 2", () => {
  it("should exist and be defined", () => {
    expect(typeof exercise2.salaryCalculator).toEqual("function");
    expect(exercise2.salaryCalculator()).toBeDefined();
  });

  //salariesAddition = 3228
  it("salariesAddition should equal 3228", () => {
    expect().toBeDefined();
    expect(salariesAddition).toBe(3228);
  });

  //tax = document.getElementById("tax").value;
  it("tax should be defined and be 5", () => {
    expect(tax).toBeDefined();
    expect(tax).toBe(5);
  });

  //result = 645,60
  it("result should be defined and be 645.6", () => {
    expect(result).toBeDefined();
    expect(result).toBe(645.6);
  });

  it("should return 645.6", () => {
    expect(exercise2.salaryCalculator()).toEqual(645.6);
  });
});