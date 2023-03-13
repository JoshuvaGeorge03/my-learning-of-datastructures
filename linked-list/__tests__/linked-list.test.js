import { LinkedListNode, LinkedList } from '../linked-list';

describe('LInked List Node', () => {
    it('should create a linked list node with a value of 1', () => {
        const node = new LinkedListNode(1);

        expect(node.data).toBe(1);
        expect(node.next).toBeNull();
    });

    it('should create a linked list node with object and next should be null', () => {
        const nodeObj = {name: 'joshuva'};
        const node = new LinkedListNode(nodeObj);

        expect(node.data).toEqual(nodeObj);
        expect(node.next).toBeNull();
    });


    test('whether created linked list object connected together', () => {
        const nodeObj = new LinkedListNode(1);
        const secondNodeObj = new LinkedListNode(2, nodeObj);

        expect(nodeObj.data).toBe(1);
        expect(nodeObj.next).toBeNull();

        expect(secondNodeObj.data).toBe(2);
        expect(secondNodeObj.next).toEqual(nodeObj)
    });

    it('should convert node to string value', () => {
        const node = new LinkedListNode(1);
        expect(node.toString()).toBe('1');

        node.data = 'cool jos';

        expect(node.toString()).toBe('cool jos');

    });

    it('should converta node to a string value based on stringifier function', () => {
        const node = new LinkedListNode('jos');

        const nodeWithObj = new LinkedListNode({name: 'cool jos'});

        const toStringCallback = (data) => `${typeof data === 'object' ? data.name : data} with string method`;

        expect(node.toString(toStringCallback)).toBe('jos with string method');

        expect(nodeWithObj.toString(toStringCallback)).toBe('cool jos with string method');
    });

});


describe('Going to test linked list data structure', () => {
    // beforeEach(() => {
    //     return new LinkedList();
    // });

    it('should create a empty linked list', () => {
        const list = new LinkedList();
        expect(list.toString()).toBe('');
    });

    test('whether appending to the list works well when list is empty', () => {
        const linkedListDataStructure = new LinkedList();
        expect(linkedListDataStructure.head).toBeNull();
        expect(linkedListDataStructure.tail).toBeNull();

        linkedListDataStructure.append(9);

        expect(linkedListDataStructure.head.toString()).toBe('9');
        expect(linkedListDataStructure.tail.toString()).toBe('9');
        expect(linkedListDataStructure.append(12).toArray()).toEqual([9, 12]);

        expect(linkedListDataStructure.head.toString()).toBe('9');
        expect(linkedListDataStructure.tail.toString()).toBe('12');


        linkedListDataStructure.append(1112).append(383);

        expect(linkedListDataStructure.head.toString()).toBe('9');
        expect(linkedListDataStructure.tail.toString()).toBe('383');

        expect(linkedListDataStructure.toArray()).toEqual([9, 12, 1112, 383]);
    });

});