const { cubes } = require('../practice/module1.4')
const { Musician } = require('../practice/module1.4')

var M = new Musician('john', 10, 25);

test('Get artist name', () => {
    expect(M.getArtistName()).toBe("john");
  });




  test('3 ** 3 = 27', () => {
    expect(cubes(3)).toBe(27);
  });


/*

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

*/