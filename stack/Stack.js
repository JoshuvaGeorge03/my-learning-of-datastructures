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
    top = null;

    push(data) {
        const stackNode = new StackNode(data, this.top);
        this.top = stackNode;
        return this;
    }

    pop() {
        if(this.isEmpty()) return null;
        const toBeDeletedNode = this.top;
        this.top = this.top.next;
        return toBeDeletedNode;
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.top.data;
    }

    isEmpty() {
        return !this.top;
    }

    toArray() {
        let currentHead = this.top;
        const stackArray = [];
        while(currentHead) {
            stackArray.push(currentHead);
            currentHead = currentHead.next;
        }
        return stackArray;
    }

    toString() {
        return this.toArray().map(node => node.toString()).toString();
    }
}