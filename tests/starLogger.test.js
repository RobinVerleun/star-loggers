const expect = require('chai').expect;
const starLogger = require('../star');

describe('starLogger Implementation.', () => {

  let mockInput = 5;
  let mockLineNumber = 3;

  it('Correctly implements its type.', () => {
    expect(starLogger.type).to.be.deep.equal('StarLogger');
  });

  it('Correctly sets its error message on erroneous input.', () => {
    starLogger.validateInput(-1);
    expect(starLogger.error.length).to.be.greaterThan(0);
  });

  it('Correctly calculates the max width.', () => {
    let actualResult = starLogger.calculateMaxWidth(mockInput);
    let expectedResult = 9;
    expect(actualResult).to.be.equal(expectedResult);
  });

  it('Correctly calculates the number of spaces in a row.', () => {
    let mockWidth = starLogger.calculateMaxWidth(mockInput);

    let actualResult = starLogger.calculateSpaces(mockWidth, 2);
    let expectedResult = 7;
    expect(actualResult).to.be.equal(expectedResult);

    actualResult = starLogger.calculateSpaces(mockWidth, 1);
    expectedResult = 8;
    expect(actualResult).to.be.equal(expectedResult);
  });

  it('Width of the tree is equal to the last line calculation.', () => {
    let actualResult = starLogger.calculateLines(mockInput);
    let actualWidth = starLogger.calculateMaxWidth(mockInput);

    expect(actualWidth).to.be.equal(actualResult[0].asterisks + actualResult[0].spaces);
  });

  it('Correctly calculates the line data.', () => {
    let actualResult = starLogger.calculateLines(mockInput);
    let expectedResult = [
      {asterisks: 2, spaces: 7, outsideSpacing: 0},
      {asterisks: 2, spaces: 7, outsideSpacing: 2},
      {asterisks: 1, spaces: 8, outsideSpacing: 4},
      {asterisks: 2, spaces: 7, outsideSpacing: 2},
      {asterisks: 2, spaces: 7, outsideSpacing: 0}
    ];

    expect(actualResult).to.be.deep.equal(expectedResult);
  });

  it('Correctly validates inputs.', () => {
    let validate = starLogger.validateInput;
    expect(validate(2)).to.be.false;
    expect(validate(10)).to.be.false;
    expect(validate(0)).to.be.false;
    expect(validate(-5)).to.be.false;
    expect(validate('a')).to.be.false;
    expect(validate(3.5)).to.be.false;

    expect(validate(3)).to.be.true;
    expect(validate(11)).to.be.true;
  })

  it('Correctly formats an expected line input.', () => {
    let mockLineDetail = { asterisks: 2, spaces: 7, outsideSpacing: 2};
    let actualFormattedLine = starLogger.formatLine(mockLineDetail);

    expect(actualFormattedLine).to.be.deep.equal('  *   *');
  });
});