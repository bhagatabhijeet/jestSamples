/**
 * ************************  CHAPTER 4 ************************************************
 * Numbers
 * ************************************************************************************
 * 
 * 
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 * @author Abhijeet Bhagat
 * 
 * NOTE :- if you need to run tests only in this test suite then use following command
 * ****************************** COMMAND ********************************************
 * ___________________________________________________________________________________|                                                                                   
 *               npm test -t numbers.test.js                                         |
 * ___________________________________________________________________________________|
 */ 

const math = require('./lib/basicmath.js');

 /**
  * when you want to compare the number euqlity, greater than, less than use following matchers
  */

 test('two plus two', () => {
    const value = math.add(2,2);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  /** 
   * For floating point equality, use toBeCloseTo instead of toEqual, 
   * because you don't want a test to depend on a tiny rounding error.
   */

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //This won't work because of rounding error
    //uncomment to see the value. 
    //when JS adds floating numbers you'd actually get 0.30000000000000004
    //expect(value).toBe(0.3);           

    expect(value).toBeCloseTo(0.3); // This works!.
  });

/**
 ******************************** Quiz ***************************************************
 * 1. Are toBe and  toEqual same for numbers?
 * 2. what care to take when testing for floating point numbers? why?
 * 
 */

/**
 * next go to
 * @see https://github.com/bhagatabhijeet/jestSamples/blob/master/strings.test.js 
 * @see strings.test.js
 */
 