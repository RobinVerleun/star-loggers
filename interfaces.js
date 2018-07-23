
const required = () => { throw new Error("Not Implemented."); };

const calculateLineInterface = {
  calculateMaxWidth: required,
  calculateSpaces: required,
  calculateAsterisks: required,
  calculateLines: required
};

const printLineInterface = {
  formatLine: required,
  printLine: required
};

const logger = (implementedLogger, num) => {
  let lines = implementedLogger.calculateLines(implementedLogger, num);
  return {
    log: () => {
      lines.forEach( (line, index) => {
        implementedLogger.printLine(implementedLogger.formatLine(line, index));
      })
    }
  }
}

module.exports = {
  calculateLineInterface,
  printLineInterface,
  logger
};