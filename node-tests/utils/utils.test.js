const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  
  describe('#add', () =>{
    it('should add two numbers', () => {
      let res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');

    });
  });


  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(9, (res) => {
      expect(res).toBe(81).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    let res = utils.square(9);

    expect(res).toBe(81).toBeA('number');
  });
});



it('should separate first and last name', () => {
  let user = {
    age: 41,
    location: 'Houston'
  };
  let res = utils.setName(user, 'Shannen Reese');
  expect(res).toInclude({
    firstName: 'Shannen',
    lastName: 'Reese'
  });
});



// create user object, age, location, pass that user into the setName method.  pass in first last

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'Shannen'}).toEqual({name: 'Shannen'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Shanen',
//     age: 41,
//     location: 'Houston'
//   }).toExclude({
//     age: 23
//   })
//
// });
