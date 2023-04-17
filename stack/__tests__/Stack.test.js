import { Stack, StackNode } from '../Stack';

describe('test stack implemenations', () => {
    test('should add items to the top of the stack', () => {
        const stack = new Stack();
        stack.push(9);
        expect(stack.top.toString()).toBe('9');
        expect(stack.toString()).toBe('9');
        stack.push(99);
        expect(stack.top.toString()).toBe('99');
        expect(stack.toString()).toBe('99,9');
    });
});