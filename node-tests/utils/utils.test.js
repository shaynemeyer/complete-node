const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44);
  });

  it('should square a number', () => {
    let res = utils.square(10);

    if(res !== 100) {
      throw new Error('Value not correct');
    }
  });
});


// it('should async add two numbers', (done) => {
//   utils.asyncAdd(4, 3, (sum) => {
//     console.log(sum);
//     expect(sum).toBe(7).toBeA('number');
//   });
// });



// it('should expect some values', () => {
  // expect(12).toNotBe(12);
  // expect({name: 'Shayne'}).toBe({name: 'Shayne'});
  // expect([2,3,4]).toExclude(1);
  // expect({
  //   name: 'Shayne',
  //   age: 25,
  //   location: 'Lake Stevens'
  // }).toExclude({
  //   age: 23
  // });
// });

describe('Utils - SetName()', () => {
  // Should verify first and last names are set
  it('should verify first and last names are set', () => {
    // assert firstName and lastName with proper values
    let user = {
      firstName: 'Shayne',
      lastName: 'Meyer'
    };

    const fullName = `${user.firstName} ${user.lastName}`;

    expect(utils.setName({}, fullName)).toEqual(user);
  });
});
