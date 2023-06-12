export function getTypeOf(value) {
    return getLastElementFromArray(getTypeFromObjectToString(value).split(/\s/)).replace(/\]/, '').toLowerCase();
}

function getLastElementFromArray(arr) {
    return arr[arr.length - 1];
}

function getTypeFromObjectToString(value) {
    return Object.prototype.toString.call(value);
}