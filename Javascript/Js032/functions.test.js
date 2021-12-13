const passwordConditions = require('./passwordConditions.js');

const { isNotNull, hasRightLength, hasUpperCaseCharacter, hasLowerCaseCharacter, hasDigit, verifyPassword } = passwordConditions;

test("Password is under 9 characters", () => {
    const password = '34567890';
    const output = hasRightLength(password);

    expect(output).toEqual(true);
});

test("Password is not under 9 characters", () => {
    const password = '1234567890';
    const output = hasRightLength(password);

    expect(output).toEqual(false);
});

test('Password is not null', () => {
    const password = 'abcdefghij';
    const output = isNotNull(password);

    expect(output).toEqual(true);
});

test('Password has a uppercase character', () => {
    const password = 'Abcdefghi';
    const output = hasUpperCaseCharacter(password);

    expect(output).toEqual(true);
});

test("Password don't have a uppercase character", () => {
    const password = 'abcdefghi';
    const output = hasLowerCaseCharacter(password);

    expect(output).toEqual(true);
});

test('Password contains a digit', () => {
    const password = 'abcdefgh1';
    const output = hasDigit(password);

    expect(output).toEqual(true);
});

test('Password satisfies at least 3 conditions', () => {
    const password = 'Abcdefgh2';
    const output = verifyPassword(password);

    expect(output).toEqual(true);
});