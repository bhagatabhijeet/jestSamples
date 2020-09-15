/**
 * ************************  CHAPTER 2 ************************************************
 * Opposite Matcher
 * ************************************************************************************
 * 
 * 
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 * @author Abhijeet Bhagat
 * 
 * NOTE :- if you need to run tests only in this test suite then use following command
 * ****************************** COMMAND ********************************************
 * ___________________________________________________________________________________|                                                                                   
 *               npm test -t opposite.test.js                                         |
 * ___________________________________________________________________________________|
 */ 

const math = require('./lib/basicmath.js');



 /**
  * To test for opposite of matcher use .not. before the matcher as below
  */

  test('Opposite of matcher',()=>{
    // Here we are testing if 5-4 is NOT equal to zero.
    expect(math.subtract(5,4)).not.toBe(0);
  });

/**
 ******************************** Quiz ***************************************************
 * 1. how to expect opposite of matcher?
 */

/**
 * next go to
 * @see https://github.com/bhagatabhijeet/jestSamples/blob/master/truthiness.test.js 
 * @see truthiness.test.js
 */
 