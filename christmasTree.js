const calculateLineInterface = require('./interfaces').calculateLineInterface;
const printLineInterface = require('./interfaces').printLineInterface;

const basic = Object.assign({}, calculateLineInterface);
const basic2 = Object.assign({}, printLineInterface);
const compound = Object.assign(basic, basic2);
const christmasTreeLogger = Object.create(compound);

// christmasTreeLogger now has to implement the five interfaces
christmasTreeLogger.calculateMaxWidth = (num) => {
  if( num <= 0 ){
    return 0;
  }
  return 2 * num -1;
}

christmasTreeLogger.calculateAsterisks = (lineNum) => {
  return 2 * lineNum - 1;
};

christmasTreeLogger.calculateSpaces = (width, asterisks) => {
  return width - asterisks;
};

christmasTreeLogger.formatLine = (lineDetail) => {
  let spacing = lineDetail.spaces / 2;
  let line = ''.padStart(lineDetail.asterisks, '*');
  line = line.padStart(spacing + line.length);
  line = line.padEnd(spacing + line.length);

  return line;
};

christmasTreeLogger.printLine = (line) => {
  if(line) {
    console.log(line);
  } else {
    console.log('');
  };
};

module.exports = {
  christmasTreeLogger
};