export class QueueNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.data) : `${this.data}`;
    }
}



export class Queue { // FIFO (First In First Out)
    head = null; // remove data from here
    tail = null; // add data to here
    constructor() {
        // this.head = head;
        // this.tail = tail;
    }
    enqueue(data) {
        const node = new QueueNode(data)
        if(this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        if(!this.head) {
            this.head = node;
        }
        return this;
    }
    dequeue() {
        if(!this.head) {
            return null;
        }

        const toBeDeletedNode = this.head;
        if(this.tail === this.head) {
            this.tail = null;
        }
        this.head = this.head.next || null;
        return toBeDeletedNode;
    }
    isEmpty() {
        return Boolean(!this.head);
    }
    peek() {
        return this.head ? this.head.data : null;
    }

    toArray() {
        let currentNode = this.head;
        const queueNodes = [];
        while(currentNode) {
            queueNodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return queueNodes;
    }

    toString() {
        return this.toArray().map(node => node.toString()).toString();
    }
}