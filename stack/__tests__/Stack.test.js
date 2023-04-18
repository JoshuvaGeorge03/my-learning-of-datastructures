import { Stack, StackWithLinkedListImpl } from '../Stack';

describe('test stack implemenations', () => {
    test('should add items to the head of the stack', () => {
        const stack = new Stack();
        stack.push(9);
        expect(stack.head.toString()).toBe('9');
        expect(stack.toString()).toBe('9');
        stack.push(99);
        expect(stack.head.toString()).toBe('99');
        expect(stack.toString()).toBe('99,9');
    });

    test('should remove item from head of the stack', () => {
        const stack = new Stack();
        const node = stack.pop();
        expect(node).toBeNull();
        expect(stack.head).toBeNull();
        stack.push(9).push(99).push(303).pop();
        expect(stack.toString()).toBe('99,9');
        expect(stack.head.toString()).toBe('99');
    });

    test('should check whether the stack is empty', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.push(9).isEmpty()).toBeFalsy();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    });

    test('should return a head value', () => {
        const stack = new Stack();
        expect(stack.peek()).toBeNull();
        stack.push(9);
        expect(stack.peek()).toBe(9);
        stack.push(99).push(8);
        expect(stack.peek()).toBe(8);
        stack.pop();
        expect(stack.peek()).toBe(99);
        stack.pop(),stack.pop();
        expect(stack.peek()).toBeNull();
    });
});

describe('test stack implemenations with linked list impl', () => {
    test('should add items to the head of the stack', () => {
        const stack = new StackWithLinkedListImpl();
        stack.push(9);
        expect(stack.head.toString()).toBe('9');
        expect(stack.toString()).toBe('9');
        stack.push(99);
        expect(stack.head.toString()).toBe('99');
        expect(stack.toString()).toBe('99,9');
    });

    test('should remove item from head of the stack', () => {
        const stack = new StackWithLinkedListImpl();
        const node = stack.pop();
        expect(node).toBeNull();
        expect(stack.head).toBeNull();
        stack.push(9).push(99).push(303).pop();
        expect(stack.toString()).toBe('99,9');
        expect(stack.head.toString()).toBe('99');
    });

    test('should check whether the stack is empty', () => {
        const stack = new StackWithLinkedListImpl();
        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.push(9).isEmpty()).toBeFalsy();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    });

    test('should return a head value', () => {
        const stack = new StackWithLinkedListImpl();
        expect(stack.peek()).toBeNull();
        stack.push(9);
        expect(stack.peek()).toBe(9);
        stack.push(99).push(8);
        expect(stack.peek()).toBe(8);
        stack.pop();
        expect(stack.peek()).toBe(99);
        stack.pop(),stack.pop();
        expect(stack.peek()).toBeNull();
    });
});