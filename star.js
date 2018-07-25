const calculateLineInterface = require('./interfaces').calculateLineInterface;
const printLineInterfaces = require('./interfaces').printLineInterface;

const basic = Object.assign({}, calculateLineInterface);
const basic2 = Object.assign({}, printLineInterfaces);
const compound = Object.assign(basic, basic2);
const starLogger = Object.create(compound);

starLogger.type = 'StarLogger';
starLogger.error = '';

// starLogger now has to implement the four interfaces
starLogger.calculateMaxWidth = (num) => {
  if(num == 1) return 1;
  return 4 * Math.ceil((num - 1) / 2) + 1;
}

starLogger.calculateAsterisks = () => {
  return 2;
};

starLogger.calculateSpaces = (width, asterisks) => {
  return width - asterisks;
}

starLogger.calculateLines = (num) => {
  // Invariant: by this point, the tree height must be an odd number.
  let width = starLogger.calculateMaxWidth(num);
  let lines = [];

  // Helper function for calculating the spacing - approaches the problem
  // as a y=mx+b problem, switching slope around the middle.
  const _outSideSpacing = (i, _numLines) => {
    let num = parseInt(_numLines);

    if(i == 1 || i == num) return 0;
    if(i < Math.ceil(num / 2)) {
      return 2 * (i - 1);
    } else {
      return 2 * ((-1 * i) + num);
    };
  };

  // All the lines will be 2 asterisks except the middle one
  // Track the outside spacing of the line for future formatting
   for(let i = 1; i <= num; i++) {
    lines.push({
       asterisks: starLogger.calculateAsterisks(),
       spaces: starLogger.calculateSpaces(width, 2),
       outsideSpacing: _outSideSpacing(i, num)
     });
   };

  // Fix the middle value to have 1 asterisk and the correct spaces.
  // Halve the height of the tree, then floor to correct for 0 indexing
  lines[Math.floor(num / 2)] = {
    asterisks: 1,
    spaces: starLogger.calculateSpaces(width, 1),
    outsideSpacing: _outSideSpacing(Math.ceil(num / 2), num)
  };

  return lines;
};

starLogger.validateInput = (input) => {
  if( input <= 0 || input % 2 === 0 || input  % 1 !== 0) {
    starLogger.error = 'Must input an odd, positive, and whole number greater than zero.'
    return false;
  }
  return true;
};

starLogger.formatLine = (lineDetail) => {
  let line = ''.padStart(lineDetail.outsideSpacing);
  line += '*';

  if(lineDetail.asterisks > 1) {
    line = line.padEnd(lineDetail.spaces - (2 * lineDetail.outsideSpacing) + line.length);
    line += '*';
  };
  return line;
};

starLogger.printLine = (line) => {
  if(line) {
    console.log(line);
  } else {
    console.log('');
  };
};

module.exports = starLogger
