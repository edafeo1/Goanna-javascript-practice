const { cubes } = require('../practice/module1.4')

const add = (a, b) => a + b;

test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });


  test('3 ** 3 = 27', () => {
    expect(cubes(3)).toBe(27);
  });




  describe('testing module 1.4', () => {
    let name;
    let nameString;
    let first_val;
    let last_val
    let array;

    beforeAll(() => {
      array = [10, 15, 12, 3];
      first_val = 10;
      last_val = 3;
      sum_of_vals = array.reduce((x, y) => x + y, 0);
      name = "fego";
      nameString = "fegoedabit"
    })

    test('testing the describe test block', () => {
      expect(1).toBe(1);
    });
  
});