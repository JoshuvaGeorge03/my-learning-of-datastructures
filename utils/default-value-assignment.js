function defaultCallback(...args) {
    console.log('value', ...args);
} 

const dummyPredicate = (v) => false;

const dummyArr = [];

export const doNothingExceptReturningPassedArgument = parameterValue => parameterValue;

module.exports = {
    defaultCallback,
    dummyPredicate,
    doNothingExceptReturningPassedArgument,
    dummyArr,
};