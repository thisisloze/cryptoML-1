const { expect } = require("chai");
const ArrayUtils = require("./array");

describe("Array Utilities Module", () => {
  it("should be defined.", () => {
    expect(ArrayUtils).not.to.be.undefined;
  });

  it("should have an average function", () => {
    expect(typeof ArrayUtils.average).to.equal("function");
  });

  it("should compute the average of an array", () => {
    const array = [1, 2, 3];
    const expectedResult = 2;

    expect(ArrayUtils.average(array)).to.equal(expectedResult);
  });

  it("should have a sum function", () => {
    expect(typeof ArrayUtils.sum).to.equal("function");
  });

  it("should compute the sum of an array", () => {
    const array = [1, 2, 3];
    const expectedResult = 6;

    expect(ArrayUtils.sum(array)).to.equal(expectedResult);
  });

  it("should have a getProp function", () => {
    expect(typeof ArrayUtils.getProp).to.equal("function");
  });

  it("should return an array of values when calling getProp with an array of objects", () => {
    const array = [
      {
        foo: 1,
        bar: 2
      },
      {
        foo: 2,
        bar: 3
      },
      {
        foo: 3,
        bar: 4
      }
    ];
    const expectedFooResult = [1, 2, 3];
    const expectedBarResult = [2, 3, 4];

    expect(ArrayUtils.getProp("foo", array)).to.eql(expectedFooResult);
    expect(ArrayUtils.getProp("bar", array)).to.eql(expectedBarResult);
  });
});