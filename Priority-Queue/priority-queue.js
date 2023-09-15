import BinaryHeap from '../heap/Heap';
export default class PriorityQueue extends BinaryHeap {
    constructor() {
        super();
        this.priority = new Map();
    }

    add(item, priority) {
        this.priority.set(item, priority);
        super.add(item);
    }
}