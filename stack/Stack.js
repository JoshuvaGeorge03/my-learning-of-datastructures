import { LinkedList } from '../linked-list/linked-list';

export class StackNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.data) : `${this.data}`;
    }
}

export class Stack {
    head = null;

    push(data) {
        const stackNode = new StackNode(data, this.head);
        this.head = stackNode;
        return this;
    }

    pop() {
        if (this.isEmpty()) return null;
        const toBeDeletedNode = this.head;
        this.head = this.head.next;
        return toBeDeletedNode;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.head.data;
    }

    isEmpty() {
        return !this.head;
    }

    toArray() {
        let currentHead = this.head;
        const stackArray = [];
        while (currentHead) {
            stackArray.push(currentHead);
            currentHead = currentHead.next;
        }
        return stackArray;
    }

    toString() {
        return this.toArray().map(node => node.toString()).toString();
    }
}

export class StackWithLinkedListImpl extends LinkedList {

    push(data) {
        this.prepend(data);
        return this;
    }

    pop() {
        if(this.isEmpty()) return null
        const node = this.deleteHead();
        return node ? node.data : null;
    }
    
    isEmpty() {
        return !this.head;
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.head.data;
    }

    toArray() {
        return super.toArray();
    }

    toString() {
        return super.toString();
    }
}