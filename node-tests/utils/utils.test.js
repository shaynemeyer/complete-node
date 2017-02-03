const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  if(res !== 44) {
    throw new Error('Value not correct');
  }

});

it('should square a number', () => {
  let res = utils.square(10);

  if(res !== 100) {
    throw new Error('Value not correct');
  }

});