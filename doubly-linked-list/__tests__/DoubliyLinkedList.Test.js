import DoublyLinkedList from "../DoublyLinkedList";
import DoublyLinkedListNode from "../DoublyLinkedListNode";

describe('Doubly Linked List Node Block', () => {

    test('whether empty node return a string', () => {
        const list = new DoublyLinkedList();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.toString()).toBe('');
        expect(list.toArray()).toEqual([])
    });

    it('should append a node to a linked data structure', () => {
        const list = new DoublyLinkedList();
        list.append(9);
        expect(list.head.data).toBe(9);
        expect(list.tail.data).toBe(9);
        expect(list.toString()).toEqual('9');
        list.append(10);
        expect(list.head.toString()).toBe('9');
        expect(list.tail.toString()).toBe('10');
        expect(list.toString()).toEqual('9,10');

        list.append(29);

        expect(list.toString()).toStrictEqual('9,10,29')
    });

    test('whehether node are correct prepend to data structure', () => {
        const list = new DoublyLinkedList();
        expect(list.prepend(29).toString()).toBe('29');
        list.prepend(30);
        expect(list.toString()).toBe('30,29');
        list.prepend(39);
        expect(list.toString()).toBe('39,30,29')
    });

    test('whether data is inserted at given index', () => {
        const list = new DoublyLinkedList();
        list.insertAtIndex(10,0);
        expect(list.head.toString()).toBe('10');
        expect(list.tail.toString()).toBe('10');
        expect(list.toString()).toBe('10');
        list.insertAtIndex(11, 1);
        expect(list.head.toString()).toBe('10');
        expect(list.tail.toString()).toBe('11');
        expect(list.toString()).toBe('10,11');
        expect(() => list.insertAtIndex(12, 5)).toThrow(/index specified greater than length of the list/);
        list.append(3).append(9).prepend(8).append(37).prepend(383);
        expect(list.insertAtIndex(2, 2).head.toString()).toBe('383');
        expect(list.tail.toString()).toBe('37');
        expect(list.toString()).toBe('383,8,2,10,11,3,9,37');
    });

    test('whether finding of doubly linked list work correctly', () => {
        const list = new DoublyLinkedList();
        list.fromArray(Array.from('123456789'));
        expect(list.find({data: '9'}).toString(value => `x${value}`)).toBe('x9');
        expect(list.find({callback: node => node.data === '7'}).toString(value => `x${value}`)).toBe('x7');
    });

    test('should delete the head of linked list data structure', () => {
        const list = new DoublyLinkedList();
        expect(list.deleteHead()).toBeNull();
        list.append(9);
        expect(list.head.toString()).toBe('9');
        expect(list.tail.toString()).toBe('9');
        expect(list.deleteHead()).toBe(9);
        list.append(9).append(10).prepend(38).append(83);
        expect(list.deleteHead()).toBe(38);
        expect(list.head.toString()).toBe('9');
    });

    test('should delete the tail of linked list data structure', () => {
        const list = new DoublyLinkedList();
        expect(list.deleteTail()).toBeNull();
        list.append(38);
        expect(list.tail.toString()).toBe('38');
        expect(list.deleteTail().toString()).toBe('38');
        expect(list.tail).toBeNull();
        list.fromArray([39,32,309,938,389,382,393]).append(38).prepend(330).append(3);
        expect(list.deleteTail().toString()).toBe('3');
        expect(list.tail.toString()).toBe('38')
    });
    
    test('should delete from the list via value or callback', () => {
        const list = new DoublyLinkedList();
        expect(list.delete(9)).toBeNull();
        list.append(9);
        expect(list.delete(9).toString()).toBe('9');
        expect(list.toString()).toBe('');
        list.append(9).append(20).prepend(38);
        list.delete(38);
        expect(list.toString()).toBe('9,20');
        expect(list.head.toString()).toBe('9');
        expect(list.tail.toString()).toBe('20');
    });
});