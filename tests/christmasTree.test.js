const expect = require('chai').expect;
const christmasTreeLogger = require('../christmasTree');

describe('christmasTreeLogger Implementation.', () => {

  let mockInput = 5;
  let mockLineNumber = 3;

  it('Correctly calculates the max width.', () => {
    let actualResult = christmasTreeLogger.calculateMaxWidth(mockInput);
    let expectedResult = 9;
    expect(actualResult).to.be.equal(expectedResult);
  });

  it('Correctly calculates the number of asterisks in a row.', () => {
    let actualResult = christmasTreeLogger.calculateAsterisks(mockLineNumber);
    let expectedResult = 5;
    expect(actualResult).to.be.equal(expectedResult);
  });

  it('Correctly calculates the number of spaces in a row.', () => {
    let mockWidth = christmasTreeLogger.calculateMaxWidth(mockInput);
    let mockAsteriskNumber = christmasTreeLogger.calculateAsterisks(mockLineNumber);

    let actualResult = christmasTreeLogger.calculateSpaces(mockWidth, mockAsteriskNumber);
    let expectedResult = 4;
    expect(actualResult).to.be.equal(expectedResult);
  });

  it('Correctly calculates the line data.', () => {
    let actualResult = christmasTreeLogger.calculateLines(mockInput);
    let expectedResult = {
      
    }
  });
});