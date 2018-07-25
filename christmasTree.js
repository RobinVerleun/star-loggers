const calculateLineInterface = require('./interfaces').calculateLineInterface;
const printLineInterface = require('./interfaces').printLineInterface;

const basic = Object.assign({}, calculateLineInterface);
const basic2 = Object.assign({}, printLineInterface);
const compound = Object.assign(basic, basic2);
const christmasTreeLogger = Object.create(compound);

christmasTreeLogger.type = 'ChristmasTreeLogger';;
christmasTreeLogger.error = '';

// christmasTreeLogger now has to implement the required interfaces
christmasTreeLogger.calculateMaxWidth = (num) => {
  return 2 * num - 1;
};

christmasTreeLogger.calculateAsterisks = (lineNum) => {
  return 2 * lineNum - 1;
};

christmasTreeLogger.calculateSpaces = (width, asterisks) => {
  return width - asterisks;
};

christmasTreeLogger.calculateLines = (num) => {
  let width = christmasTreeLogger.calculateMaxWidth(num);
  let lines = [];
  for(let i = 1; i <= num; i++) {
    let numAsterisks = christmasTreeLogger.calculateAsterisks(i);
    lines.push({
      asterisks: numAsterisks,
      spaces: christmasTreeLogger.calculateSpaces(width, numAsterisks)
    });
  };
  
  return lines;
};

christmasTreeLogger.validateInput = (input) => {
  if( input >= 0) {
    return true;
  } else {
    christmasTreeLogger.error = 'Must input a number greater than 0.';
    return false;
  }
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

module.exports = christmasTreeLogger
