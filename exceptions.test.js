/**
 * ************************  CHAPTER 7 ************************************************
 * Exceptions
 * ************************************************************************************
 * 
 * 
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 * @author Abhijeet Bhagat
 * 
 * NOTE :- if you need to run tests only in this test suite then use following command
 * ****************************** COMMAND ********************************************
 * ___________________________________________________________________________________|                                                                                   
 *               npm test -t exceptions.test.js                                         |
 * ___________________________________________________________________________________|
 */ 
 const fthrow=require("./lib/funcsthrowexceptions");

 /**
  * You can check if a function throws an exception using toThrow matcher
  * 
  */

 test('compiling android goes as expected', () => {
    expect(fthrow).toThrow();
    expect(fthrow).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(fthrow).toThrow('Demo Error');
    expect(fthrow).toThrow(/Demo/);
  });

/**
 ******************************** Quiz ***************************************************
 * 1. when to use toThrow?
 *  
 */

/**
 * next go to
 * @see https://github.com/bhagatabhijeet/jestSamples/blob/master/async.test.js 
 * @see async.test.js
 */
 