/**
 * ************************  CHAPTER 9 ************************************************
 * Mock Functions
 * ************************************************************************************
 * 
 * 
 * @see https://jestjs.io/docs/en/mock-functions
 * @author Abhijeet Bhagat
 * Also see the link below
 * @see https://rb.gy/xddqyz
 * NOTE :- if you need to run tests only in this test suite then use following command
 * ****************************** COMMAND ********************************************
 * ___________________________________________________________________________________|                                                                                   
 *               npm test -t mocks.test.js                                         |
 * ___________________________________________________________________________________|
 */
const { TestScheduler } = require("jest");

 

/**
 * The goal for mocking is to replace something we don’t control with something we do.
 * so it’s important that what we replace it with that has all the features we need.
 * The Mock Function provides features to:
 *  Capture calls
 *  Set return values
 *  Change the implementation

     The simplest way to create a Mock Function instance is with jest.fn()
 * 
 */

 test('simple mock',()=>{
    const mock = jest.fn();
    let result = mock();
    

    //wait a min so what is happening here...
    // well with the jest.fn we created a function that takes no args and returns undefined
    // want to test it? let do a console.log and also test it with toBeUndefined matcher
    console.log(result);
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();

    //now let's pass an argument to the mock function
    result = mock('foo');
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith("foo");
 });


 //Now let's change the implementation of the mock function

 test('simple mock with changed return value',()=>{
    const mock = jest.fn(() => 'bar');
    let result = mock();

    expect(result).toBe('bar');
 });

 //the mock implementation can also be done using mockImplementation call
 test('simple mock with changed return value',()=>{
    const mock = jest.fn().mockImplementation(() => "bar");
    let result = mock();

    expect(result).toBe('bar');
 });

 //some more mocking examples below
 test("mock implementation one time", () => {
    const mock = jest.fn().mockImplementationOnce(() => "bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  
    expect(mock("baz")).toBe(undefined);
    expect(mock).toHaveBeenCalledWith("baz");
  });
  
  test("mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValue("bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });
  
  test("mock promise resolution", () => {
    const mock = jest.fn();
    mock.mockResolvedValue("bar");
  
    expect(mock("foo")).resolves.toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  //Now that we know what how are mock functions created let's look at their use.
  //most common use of mock functions is to inject dependency.
  const doAdd = (a, b, callback) => {
    callback(a + b);
  };
  
  test("calls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);

    const mockCallback2 = jest.fn();
    mockCallback2.mockReturnValue("x");
    expect(mockCallback2()).toEqual("x");
  });
    
    /**
    ******************************** Quiz ***************************************************
    * 1. how is 'done' used when dealing with the async functions that take a callback?
    *  
    */
    
    /**
    * next go to
    * @see https://github.com/bhagatabhijeet/jestSamples/blob/master/mocks.test.js 
    * @see mocks.test.js
    */
    