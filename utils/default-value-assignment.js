function defaultCallback(...args) {
    console.log('value', ...args);
} 

const dummyPredicate = (v) => false;

const dummyArr = [];

module.exports = {
    defaultCallback,
    dummyPredicate,
    dummyArr
};