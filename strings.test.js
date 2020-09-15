/**
 * ************************  CHAPTER 5 ************************************************
 * Strings
 * ************************************************************************************
 * 
 * 
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 * @author Abhijeet Bhagat
 * 
 * NOTE :- if you need to run tests only in this test suite then use following command
 * ****************************** COMMAND ********************************************
 * ___________________________________________________________________________________|                                                                                   
 *               npm test -t strings.test.js                                         |
 * ___________________________________________________________________________________|
 */ 


 /**
  * use the toMatch matcher for testing the string matches.
  * toMatch uses REGULAR EXPRESSIONS
  */

 test('if "UC Berkeley" contains "Berk"', () => {
   
    expect("UC Berkeley").toMatch(/Berk/);
   
  });

  // A bit complex example. 
  /**
   * IF YOU WANT TO LEARN MORE ABOUT REGEX
   * @see https://www.regular-expressions.info/
   */
  test('if .com email address is in valid form i.e string@xxx.com', () => {
   
    expect("abhi@testing.com").toMatch(/[a-zA-z0-9]+@[a-zA-z0-9]+\.com/);
   
  });


  //Exact match
  test('string exact match', () => {
   
    //using toBe
    expect("abhi@testing.com").toBe("abhi@testing.com");
    //using toEqual
    expect("abhi@testing.com").toEqual("abhi@testing.com");
   
  });

  

/**
 ******************************** Quiz ***************************************************
 * 1. What are regular expressions
 *  
 */

/**
 * next go to
 * @see https://github.com/bhagatabhijeet/jestSamples/blob/master/arraysandobjects.test.js 
 * @see arraysandobjects.test.js
 */
 