const starTreeLogger = require('./christmasTree');
const loggerFactory = require('./interfaces').logger;

const main = () => {
  
  let num = process.argv[2];

  if(num >= 0) {
    const logger = loggerFactory(starTreeLogger, num);
    logger.log();
  } else {
    console.log('Please enter a positive whole number.');
  };
}

main();