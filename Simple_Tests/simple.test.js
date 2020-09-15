/**
 * Notes : -  A Test in jest can be called using 'test' function or using its alias 'it'
 
 * @external https://jestjs.io/docs/en/api#testname-fn-timeout
 */

//using 'test' 
//test takes 3 parameters namely -name of test, the function to execute for testing and timeout

test('test 2 plus 2 is 4'/*This is name of our test*/,
()=>{
    //This arrow function is called when we execute/run our test.

    //When you're writing tests, you often need to check that values meet certain conditions.
    //expect gives you access to a number of "matchers" that let you validate different things.

    //For additional Jest matchers maintained by the Jest Community check out jest-extended.

    expect(2+2).toEqual(4);

    //in above line of code toEqual is called matcher
});

// GO TO 