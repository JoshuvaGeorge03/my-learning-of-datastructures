import BinaryHeap from "../Heap";

describe('ensuring functional correctness of Heap', () => {
    let binaryHeap;

    beforeEach(() => {
        binaryHeap = new BinaryHeap();
    });

    afterEach(() => {
        binaryHeap = null;
    });

    test('whether the heap is empty or not correctly', () => {
        expect(binaryHeap.isEmpty()).toBe(true);
        expect(binaryHeap.add(1).isEmpty()).toBe(false);
    });

    test('whether the heap returns root element correctly', () => {
        expect(binaryHeap.peek()).toBe(null);
        expect(binaryHeap.add(1).peek()).toBe(1);
    });
})