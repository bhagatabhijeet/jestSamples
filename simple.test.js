/**
 * ************************  CHAPTER 1 ************************************************
 * GETTING STARTED
 * ************************************************************************************
 * Notes : -  A Test in jest can be called using 'test' function or using its alias 'it'
 * 
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 * @author Abhijeet Bhagat
 * 
 * NOTE :- if you need to run tests only in this test suite then use following command
 * ****************************** COMMAND ********************************************
 * ___________________________________________________________________________________|                                                                                   
 *               npm test -t simple.test.js                              |
 * ___________________________________________________________________________________|
 */ 


// USING TEST
// test() is all that you need to create a JavaScript Test using Jest. 
//test takes 3 parameters namely
// -name of test, 
//the function to execute for testing and 
//timeout

//FIRST TEST

test('test 2 plus 2 is 4'/*This is name of our test*/,
()=>{
    //This arrow function is called when we execute/run our test.

    //When you're writing tests, you often need to check that values meet certain conditions.
    //expect gives you access to a number of "matchers" that let you validate different things.

    //For additional Jest matchers maintained by the Jest Community check out jest-extended.

    expect(2+2).toBe(4);

    //in above line of code toBe is called matcher
});

// YOU CAN ALSO USE THE ALIAS 'it' INSTEAD OF TEST
//THE FOLLOWING TEST IS SAME AS ABOVE

it('test 2 plus 2 is 4',()=>{
    expect(2+2).toBe(4);
});

//-------------------------------------------------------------------------------------
// toBe checks for exact equality but sometimes you need to check if value of one object that of other 'object;
// in such a case we use .toEqual

test("object value equality",() =>{
    //lets create a object herer
    const myobj = {
        one:1,
        two:2
    };

    //now let's check the object equality

    expect(myobj).toEqual({one:1,two:2});

    //toEqual recursively checks every field of an object or array. :)

});


/**
 ******************************** Quiz ***************************************************
 * 1. how many arguments does test function take?
 * 2. what alias of test can you use?
 * 3. you learned 2 matchers in this script name them.
 */

// NEXT GO TO 