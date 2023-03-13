import { subtract, sum, divide, modulo, multiply } from '../math';

describe('This is the test for math module functionality', () => {
    test('sum 4 and 5 ', () => {
        expect(sum(4, 5)).toBe(9);
    });

    test('subract 9 and 5', () => {
        expect(subtract(9, 5)).toBe(4);
    });

    test('divide 10 byy 5', () => {
        expect(divide(10, 5)).toBe(2);
    });

    test('modulo 10 by 5', () => {
        expect(modulo(10, 5)).toBe(0);
    });

    test('multiply 2 and 5', () => {
        expect(multiply(2, 5)).toBe(10);
    });

});