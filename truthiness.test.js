/**
 * ************************  CHAPTER 3 ************************************************
 * Truthiness
 * ************************************************************************************
 * 
 * 
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 * @author Abhijeet Bhagat
 * 
 * NOTE :- if you need to run tests only in this test suite then use following command
 * ****************************** COMMAND ********************************************
 * ___________________________________________________________________________________|                                                                                   
 *               npm test -t truthiness.test.js                                         |
 * ___________________________________________________________________________________|
 */ 



 /**
  * In tests, you sometimes need to distinguish between undefined, null, and false, 
  * but you sometimes do not want to treat these differently. 
  * Jest contains helpers that let you be explicit about what you want.
  */

 test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    expect(n).toBeTruthy();
  });


  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

/**
 ******************************** Quiz ***************************************************
 * 1. Is null equal to undefined?
 * 2. Are the values  0 , '' and "", falsy?
 * 3. Is 0 equals to undefined?
 */

/**
 * next go to
 * @see https://github.com/bhagatabhijeet/jestSamples/blob/master/numbers.test.js 
 * @see numbers.test.js
 */
 