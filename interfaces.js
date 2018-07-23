
const required = () => { throw new Error("Not Implemented."); };

const calculateLineInterface = {
  calculateMaxWidth: required,
  calculateAsterisks: required,
  calculateSpaces: required
};

const printLineInterface = {
  formatLine: required,
  printLine: required
};

const logger = (logger, num) => {
  let width = logger.calculateMaxWidth(num);
  let lines = [];
  for(let i = 1; i <= num; i++) {
    let numAsterisks = logger.calculateAsterisks(i);
    lines.push({
      asterisks: numAsterisks,
      spaces: logger.calculateSpaces(width, numAsterisks)
    });
  };

  return {
    log: () => {
      lines.forEach( (line) => {
        logger.printLine(logger.formatLine(line));
      })
    }
  }
}

module.exports = {
  calculateLineInterface,
  printLineInterface,
  logger
};