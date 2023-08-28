
const utils = require('../utils/default-value-assignment.js');
const { dummyPredicate, dummyArr, doNothingExceptReturningPassedArgument } = utils;

export class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.data) : `${this.data}`;
    }
}


export class LinkedList {
    constructor(head = null, tail = null) {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = new LinkedListNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }

    prepend(data) {
        const node = new LinkedListNode(data, this.head);
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    insertAtIndex(index, data) {
        const rawIndex = index < 0 ? 0 : index;
        if (rawIndex === 0) {
            this.prepend(data);
        } else {
            let currentIndex = 0;
            let currentNode = this.head;
            const node = new LinkedListNode(data);
            // while (currentIndex <= index) {
            //     if (currentIndex === index && currentNode) {
            //         const node = new LinkedListNode(data, currentNode);

            //     };
            //     currentNode = this.head.next;
            // }
            while (currentNode) {
                if (currentIndex === (rawIndex - 1)) break;
                currentNode = currentNode.next;
                currentIndex += 1;
            }
            if (currentNode) {
                node.next = currentNode.next;
                currentNode.next = node;
            } else {
                if(this.toArray().length - 1 >= rawIndex) {
                    if(this.tail) {
                        this.tail.next = node;
                        this.tail = node;
                    } else {
                        this.tail = node;
                        this.head = node;
                    }
                } else {
                    
                    throw new Error(`index ${index} to be added is larger than list length of ${this.toArray().length}`);
                }
            }
        }
        return this;
    }

    searchBasedOnIndex(index) {
        const rawIndex = index < 0 ? 0 : index;
        let currentNode = this.head;
        let current = 0;
        while (currentNode) {
            if (current === rawIndex) break;
            currentNode = currentNode.next;
            current += 1;
        }
        if (currentNode) {
            return currentNode.data;
        } else {
            if (this.tail) {
                return this.tail.data;
            } else {
                return null;
            }
        }
    }

    searchBasedOnValue(data) {
        let currentNode = this.head;
        let index = 0
        while (currentNode) {
            if (currentNode.data === data) break;
            currentNode = currentNode.next;
            index = index + 1;
        }
        return { node: currentNode, index: currentNode ? index : null };
    }

    find(predicateCb = dummyPredicate) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode) {
            if (predicateCb(currentIndex, currentNode)) break;
            currentNode = currentNode.next;
            currentIndex += 1;
        }
        return { currentNode, currentIndex: currentNode ? currentIndex : null };
    }

    deleteWithValue(data) {

        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        if (this.head && this.head.data === data) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.data === data) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                };
            }
        }

        if(this.tail.data === data) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    deleteWithIndex(index) {
        const rawIndex = index < 0 ? 0 : index;

        if(!this.head) {
            return null;
        }

        let deletedNode = null;

        if(rawIndex === 0) {
            deletedNode = this.head;
            this.head = this.head.next;
        }


        let currentNode = this.head;
        let currentIndex = 1;

        if(currentNode !== null) {
            while(currentNode.next) {
                if(currentIndex === rawIndex) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    if(deletedNode === this.tail) {
                        this.tail = currentNode;
                    }
                } else {
                    currentNode = currentNode.next;
                    currentIndex += 1;
                }

            }
        }

        return deletedNode;
        
    }

    traverse(callback = doNothingExceptReturningPassedArgument) {
        let currentNode = this.head;
        let index = 0
        while (currentNode) {
            callback(index, currentNode);
            currentNode = currentNode.next;
            index += 1;
        }
        return this;
    }

    toArray(mapFunc = doNothingExceptReturningPassedArgument) {

        const linkedListNodeArr = []
        
        function collectNode(index, currentNode) {
            linkedListNodeArr.push(mapFunc(currentNode));
        }

        this.traverse(collectNode);

        return linkedListNodeArr;
    }

    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

    fromArray(values = dummyArr) {
        return values.forEach(value => this.append(value));
    }

    deleteTail() {
        if(!this.head) {
            return null;
        }

        let deletedNode = this.tail;
        
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        let curretnNode = this.head;

        while(curretnNode.next) {
            if(!curretnNode.next.next) {
                this.tail = curretnNode;
                curretnNode.next = null;
                break;
            }
            curretnNode = curretnNode.next;
        }
        
        return deletedNode;
    }

    deleteHead() {
        if(!this.head) {
            return null;
        }

        let deletedNode = this.head;

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }


        return deletedNode;
    }
}
