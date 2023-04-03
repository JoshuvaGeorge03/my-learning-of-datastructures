import DoublyLinkedListNode from "./DoublyLinkedListNode";
import { dummyArr } from '../utils/default-value-assignment';


export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new DoublyLinkedListNode(data, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        return this;
    }

    prepend(data) {
        const node = new DoublyLinkedListNode(data, this.head);
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        return this;
    }

    insertAtIndex(data, index) {
        const rawIndex = index < 0 ? 0 : index;
        if (rawIndex === 0) {
            this.prepend(data);
        } else {
            const listArray = this.toArray();
            if (rawIndex > listArray.length) {
                throw new Error('index specified greater than length of the list');
            } else {
                let currentIndex = 0;
                let currentNode = this.head;
                const newNode = new DoublyLinkedListNode(data);
                while (currentNode) {
                    if (currentIndex === rawIndex) {
                        const prevNode = currentNode.prev;
                        newNode.next = currentNode;
                        newNode.prev = prevNode;
                        currentNode.prev = newNode;
                        prevNode.next = newNode;
                        return this;
                    }
                    currentNode = currentNode.next;
                    currentIndex += 1;
                }
                if (!currentNode) {
                    newNode.prev = this.tail;
                    this.tail.next = newNode;
                    this.tail = newNode;
                }
            }
        }
        return this;
    }

    find({ callback = null, data = null } = {}) {
        let currentNode = this.head;
        while (currentNode) {
            if (callback?.(currentNode)) {
                return currentNode;
            }
            if (data === currentNode.data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    delete(data, callabck) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        let toBeDeletedNode = null;
        while (currentNode) {
            if (callabck?.(currentNode) || currentNode.data === data) {
                toBeDeletedNode = currentNode;
                if (toBeDeletedNode === this.head) {
                    this.head = toBeDeletedNode.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                    if (toBeDeletedNode === this.tail) {
                        this.tail = null;
                    }

                } else if (toBeDeletedNode === this.tail) {
                    this.tail = toBeDeletedNode.prev;
                    this.tail.next = null;

                } else {
                    const previousNode = toBeDeletedNode.prev;
                    const nextNode = toBeDeletedNode.next;
                    previousNode.next = nextNode;
                    nextNode.prev = previousNode;
                }
            }

            currentNode = currentNode.next;
        }
        return toBeDeletedNode;
    }

    deleteTail() {
        if (!this.head) {
            return null;
        }
        const deletedTail = this.tail;
        if (this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            this.tail = null;
            this.head = null;
        }
        return deletedTail.data;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }
        const deletedNode = this.head;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedNode.data;
        }
        const nextHeadNode = this.head.next;
        nextHeadNode.prev = null;
        this.head = nextHeadNode;
        return deletedNode.data;
    }

    toArray() {
        if (!this.head) {
            return dummyArr;
        }
        const nodeArray = [];
        let currentNode = this.head;
        while (currentNode) {
            nodeArray.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodeArray;
    }

    fromArray(values = []) {
        values.forEach(value => this.append(value));
        return this;
    }

    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }
}