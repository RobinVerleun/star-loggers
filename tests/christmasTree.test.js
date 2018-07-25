const expect = require('chai').expect;
const christmasTreeLogger = require('../christmasTree');

describe('christmasTreeLogger Implementation.', () => {

  let mockInput = 5;
  let mockLineNumber = 3;

  it('Correctly implements its type.', () => {
    expect(christmasTreeLogger.type).to.be.deep.equal('ChristmasTreeLogger');
  });

  it('Correctly sets its error message on erroneous input.', () => {
    christmasTreeLogger.validateInput(-1);
    expect(christmasTreeLogger.error.length).to.be.greaterThan(0);
  });

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

  it('Width of the tree is equal to the last line calculation.', () => {
    let actualResult = christmasTreeLogger.calculateLines(mockInput);
    let actualWidth = christmasTreeLogger.calculateMaxWidth(mockInput);

    expect(actualWidth).to.be.equal(actualResult[0].asterisks + actualResult[0].spaces);
  });

  it('Correctly calculates the line data.', () => {
    let actualResult = christmasTreeLogger.calculateLines(mockInput);
    let expectedResult = [
      {asterisks: 1, spaces: 8},
      {asterisks: 3, spaces: 6},
      {asterisks: 5, spaces: 4},
      {asterisks: 7, spaces: 2},
      {asterisks: 9, spaces: 0}
    ];

    expect(actualResult).to.be.deep.equal(expectedResult);
  });

  it('Correctly validates inputs.', () => {
    let validate = christmasTreeLogger.validateInput;
    expect(validate(2)).to.be.true;
    expect(validate(10)).to.be.true;
    expect(validate(0)).to.be.false;
    expect(validate(-5)).to.be.false;
    expect(validate('a')).to.be.false;
    expect(validate(3.5)).to.be.false;
  })

  it('Correctly formats an expected line input.', () => {
    let mockLineDetail = { asterisks: 5, spaces: 4 };
    let actualFormattedLine = christmasTreeLogger.formatLine(mockLineDetail);

    expect(actualFormattedLine).to.be.deep.equal('  *****  ');
  });
});