# Welome to the poorly named 'star-loggers' assignment.

The goal of the project was to write two logging programs which take in a user parameter and 
print a console output in a specific shape and pattern. 

Using 3 as a demo parameter, 

Pattern 1 is a christmas tree style:
  
  *
 ***
*****

Pattern 2 is a star:

*       *
  *   *
    *
  *   *
*       *


## To Run
Ensure you have both [NodeJs](https://nodejs.org/en/) and npm installed on your machine.


Clone the project from github into a local directory. Once the cloning is done, run
`npm install` 
in the source directory.

Afterwares, run 
`npm start [height]` to generate the trees.


## To Run the Tests
The tests rely on on [MochaJs](https://mochajs.org/). 
To install Mocha as I use it, run `npm install -g mocha` to have mocha globally mounted.

Then, in the root directory of the project, run
`npm test`.


### Musings

This assignment was intended to be a quick practice in writing FizzBuzz level code, but 
with the condition that the code adheres as closely as possible to both SOLID and DRY
development principles.

The problem became engaging when both programs are considered at the same time while
following the above principles. Combine that with the dynamic nature of Javascripts
language, the lack of true object oriented structure (interfaces, mainly) made this problem
an interesting learning experience.

What I would improve for next time is usage of Javascript prototypes to better implement 
dependency inversion, and rely on enforced types for the actual high level component 'logger' 
to check before running the program.

Finally, while writing tests around the implemented interfaces wasn't difficult, they also
arn't very enlightening as far as testing goes - I attribute this 50/50 with my experience and
ability to write robust tests, and the problem being fairly shallow. 