/**
 * ************************  CHAPTER 6 ************************************************
 * Arrays and Objects
 * ************************************************************************************
 * 
 * 
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 * @author Abhijeet Bhagat
 * 
 * NOTE :- if you need to run tests only in this test suite then use following command
 * ****************************** COMMAND ********************************************
 * ___________________________________________________________________________________|                                                                                   
 *               npm test -t arraysandobjects.test.js                                         |
 * ___________________________________________________________________________________|
 */ 


 /**
  * You can check if an array or iterable contains a particular item using toContain
  * 
  */

const myArray=['one','two','three','four'];

 test('if myArray contains three', () => {
   
    expect(myArray).toContain('three');
   
  });

 
  /**
   * you can also check if an object contains a specific key key value pair
   * using toMatchObject matcher
   */
  test('if object contain specific key value', () => {
   
    expect({ name: 'component name', type: 'form' }).toMatchObject({ name: 'component name'});
   
  });

  /**
   * you can test if object contains a specific property using 
   * toHaveProperty matcher
   */
  test('if object has a specific key or (key and value)', () => {
   
    //just property
    expect({ name: 'component name', type: 'form' }).toHaveProperty("name");

    //property and value
    expect({ name: 'component name', type: 'form' }).toHaveProperty("type","form");
   
  });



  //Exact or STRICT match
  test('object exact match', () => {
   
    //STRICT EQUAL
    expect({ name: 'component name', type: 'form' }).toStrictEqual({ name: 'component name', type: 'form' });
      
  });

  

/**
 ******************************** Quiz ***************************************************
 * 1. Which matcher will you use to check if object has a specific key?
 *  
 */

/**
 * next go to
 * @see https://github.com/bhagatabhijeet/jestSamples/blob/master/exceptions.test.js 
 * @see exceptions.test.js
 */
 