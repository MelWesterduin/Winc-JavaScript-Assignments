const functions = require('./functions')

test('Should be null', () => {
    // Start with expect()
    // Inside the first brackets put what you want to test. That will be a function.
    // Then follows your .toBeSomethingSomething function,
    // find the appropriate function in the documentation.
    // In this case we want to check if the function "isNull()" actually
    // returned null. So "toBeNull()" makes the most sense
expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.checkValue()).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    expect().toBe();
});

// Tests are really just functions. To demonstrate that, 
// we now let you create tests that work without outside input:

// Less than or greater than
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBe(1600);
    // expect(load1 + load2).toBe.....
});

// Regex
test('There is no I in team', () => {
    //  expect('team').not.to..........;
    expect('team').not.toBe('I');
});

// Arrays
test('Admin should be in usernames', () => {
 usernames = ['john', 'karen', 'admin'];
 // expect(usernames).to......
 expect(usernames).toBe();
});