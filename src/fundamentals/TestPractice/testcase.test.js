// First thing is to import what you need to test 
const { cubes, makePair, calcAge, getFirstValue, getLastValue, sumArray, squared, nameString } = require('../ACS1.3/practice/module1.4');



  describe('testing module 1.4', () => {
    let name;
    let nameString;
    let first_val;
    let last_val;
    let array;
    let ageVal;

    
    beforeAll(() => {
      array = [10, 15, 12, 3];
      first_val = 10;
      last_val = 3;
      sum_of_vals = array.reduce((x, y) => x + y, 0);
      name = "fego";
      nameString = "fegoedabit";
      ageVal = 18 * 365;
    });

    test('testing the describe test block', () => {
      expect(1).toBe(1);
    });

    // Make Pair Test Case
test("trying out testing ", () => {
    expect(makePair(1,2)).toStrictEqual([1,2]);
});


test('3 ** 3 = 27', () => {
    expect(cubes(3)).toBe(27);
  });


  test('testing calculate age function', () => {
      expect(calcAge(18)).toBe(ageVal);
  });

  test("testing for first value of arr", () => {
      expect(getFirstValue(array)).toBe(first_val);
  });





  
  
});
