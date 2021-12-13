const isNotNull = (password) => {
    if (password.value = ' ') {
        return true;
    } else false;
};

const hasRightLength = (password) => {
    if (password.length < 9) {
        return true;
    } else false;
};

const hasUpperCaseCharacter = (password) => {
    if (password.match(/[A-Z]/)) {
        return true;
    } else false;
};

const hasLowerCaseCharacter = (password) => {
    if (password.match(/[a-z]/)) {
        return true;
    } else false;
};;

const hasDigit = (password) => {
    if (password.match(/[0-9]/)) {
        return true;
    } else false;
};

const minimumConditionsReached = conditions => {
    trueConditions = conditions.filter(bool => bool == true);
    return trueConditions.length >= 3;
};

const verifyPassword = (password) => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result = minimumConditionsReached(conditions);
    return result;
};

module.exports = {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    verifyPassword,
    minimumConditionsReached
};