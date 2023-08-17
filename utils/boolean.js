import { getTypeOf } from './typechecker';

export function convertToFalseOnlyIfValueIsNullOrUndefined(value) {
    const falsyObject = {
        'null': false,
        'undefined': false
    };
    const typeOfValue = getTypeOf(value);
    return falsyObject[typeOfValue] === false ? false : true;
    
}