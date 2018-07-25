const christmasTreeLogger = require('./christmasTree');
const starLogger = require('./star');
const loggerFactory = require('./interfaces').loggerFactory;

const main = () => {
  
  let num = process.argv[2];
  let logger = loggerFactory(christmasTreeLogger, num);
  logger.log();
  
  console.log('\n\n\n');

  logger = loggerFactory(starLogger, num);
  logger.log();
};

main();