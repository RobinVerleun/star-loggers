
const required = () => { throw new Error("Not Implemented."); };

const calculateLineInterface = {
  error: '',
  validateInput: required,
  calculateMaxWidth: required,
  calculateSpaces: required,
  calculateAsterisks: required,
  calculateLines: required
};

const printLineInterface = {
  formatLine: required,
  printLine: required
};

const loggerFactory = (implementedLogger, num) => {

  if(!implementedLogger) throw 'NoLogger';
  
  let valid = implementedLogger.validateInput(num);
  let lines = valid ? implementedLogger.calculateLines(num) : [];
  return {
    log: () => {
      if(valid) {
        lines.forEach( (line, index) => {
          implementedLogger.printLine(implementedLogger.formatLine(line, index));
        });
      } else {
        console.log(implementedLogger.type, ':', implementedLogger.error);
      };
    }
  };
};

module.exports = {
  calculateLineInterface,
  printLineInterface,
  loggerFactory
}; 