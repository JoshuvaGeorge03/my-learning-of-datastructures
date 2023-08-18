import { patchFunction } from "../../utils";
import { convertToFalseOnlyIfValueIsNullOrUndefined } from "../../utils/boolean";
import BinaryHeap from "../Heap";

describe('ensuring functional correctness of Heap', () => {
    let binaryHeap;

    beforeEach(() => {
        binaryHeap = new BinaryHeap();
        binaryHeap.pairIsInCorrectOrder = pairIsInCorrectOrder;
    });

    afterEach(() => {
        binaryHeap = null;
    });

    function pairIsInCorrectOrder (childValue, parentValue) {
        return (convertToFalseOnlyIfValueIsNullOrUndefined(parentValue) && convertToFalseOnlyIfValueIsNullOrUndefined(childValue)) ? parentValue <= childValue : true; // min heap impl
    }

    test('whether the heap is empty or not correctly', () => {
        expect(binaryHeap.isEmpty()).toBe(true);
        expect(binaryHeap.add(1).isEmpty()).toBe(false);
    });

    test('whether the heap returns root element correctly', () => {
        expect(binaryHeap.peek()).toBe(null);
        expect(binaryHeap.add(1).peek()).toBe(1);
    });

    test('whether the size of the heap returns correctly', () => {
        expect(binaryHeap.getSize()).toBe(0);
        binaryHeap.add(5).add(8).add(393).add(373).add(333).add(9);
        expect(binaryHeap.add(1).getSize()).toBe(7);
        expect(binaryHeap.add(2).getSize()).toBe(8);
        expect(binaryHeap.add(0).getSize()).toBe(9);
        binaryHeap.poll();
        expect(binaryHeap.getSize()).toBe(8);
    });

    test('whether the elements are added and heap invariant is maintained', () => {
        expect(binaryHeap.add(1).toArray()).toEqual([1]);
        expect(binaryHeap.add(2).toArray()).toEqual([1,2]);
        expect(binaryHeap.add(0).toArray()).toEqual([0,2,1]);
    });
})