const calculateLineInterface = require('./interfaces').calculateLineInterface;
const printLineInterfaces = require('./interfaces').printLineInterface;

const basic = Object.assign({}, calculateLineInterface);
const basic2 = Object.assign({}, printLineInterfaces);
const compound = Object.assign(basic, basic2);
const starLogger = Object.create(compound);

// startLogger now has to implement the four interfaces
starLogger.calculateMaxWidth = (num) => {
  if( num <= 0){
    return 0;
  }
  return 2 * num - 1;
};

starLogger.calculateAsterisks = (lineNum) => {
  let line = Math.abs(lineNum);
  
};

starLogger.calculateSpaces = (width, asterisks) => {
  
};

starLogger.formatLine = (lineDetail) => {

};

starLogger.printLine = (line) => {

};
