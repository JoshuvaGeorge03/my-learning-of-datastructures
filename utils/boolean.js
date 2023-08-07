import { getTypeOf } from './typechecker';

export function convertToFalseOnlyIfValueIsNullOrUndefined(value) {
    const falsyObject = {
        'null': true,
        'undefined': true
    };
    const typeOfValue = getTypeOf(value);
    return Boolean(falsyObject[typeOfValue]);
}