const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalledWith();
  });

  it('should call saveUser with user object', () => {
    var email = 'shayne@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});

