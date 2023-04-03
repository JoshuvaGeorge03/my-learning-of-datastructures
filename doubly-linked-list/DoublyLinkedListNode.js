export default class DoublyLinkedListNode {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }

    toString(callback) {
        return callback ? callback(this.data) : `${this.data}`;
    }
}