import MinHeap from "../MinHeap"
import Maxheap from '../MaxHeap';
import BinaryHeap from "../Heap";

describe('ensuring functional correctness of Heap', () => {
    let testMinHeap;
    let testMaxHeap;
    let binaryHeap;

    beforeEach(() => {
        binaryHeap = new BinaryHeap();
        testMinHeap = new MinHeap();
        testMaxHeap = new Maxheap();
    });

    afterEach(() => {
        binaryHeap = null;
        testMaxHeap = null;
        testMinHeap = null;
    });
})