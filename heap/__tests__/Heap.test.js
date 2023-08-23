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
        binaryHeap.add(8).add(28).add(-2).add(9).add(8).add(109);
        expect(binaryHeap.toArray()).toEqual([-2,2,0,8,28,1,9,8,109]);
    });

    test('whether the elements are polled and heap invariant is maintained', () => {
        expect(binaryHeap.poll()).toBe(null);
        expect(binaryHeap.toArray()).toEqual([]);
        binaryHeap.add(1);
        expect(binaryHeap.poll()).toBe(1);
        expect(binaryHeap.toArray()).toEqual([]);
        binaryHeap.add(1).add(2);
        expect(binaryHeap.poll()).toBe(2);
        expect(binaryHeap.toArray()).toEqual([1]);
        binaryHeap.add(2).add(0).add(8).add(28).add(-2).add(9).add(8).add(109);
        expect(binaryHeap.poll()).toBe(-2);
        expect(binaryHeap.toArray()).toEqual([0,2,1,8,28,109,9,8]);
    });

    test('wether the heap is cleared correctly', () => {
        expect(binaryHeap.clear()).toBe(0);
        expect(binaryHeap.add(2).add(0).add(8).add(28).add(-2).add(9).add(8).add(109).getSize()).toBe(8);
        expect(binaryHeap.toArray()).toEqual([-2,0,8, 28,2,9,8,109]);
        expect(binaryHeap.clear()).toBe(0);
    });

    test('wehter we can find specific value present or not', () => {
        expect(binaryHeap.contains(5)).toBe(false);
        expect(binaryHeap.find((v) => v === 5)).toBe(false);
        binaryHeap.add(2).add(0).add(8).add(28).add(-2).add(9).add(8).add(109);
        expect(binaryHeap.contains(393)).toBe(false);
        expect(binaryHeap.contains(8)).toBe(true);
        expect(binaryHeap.contains(-2)).toBe(true);
        expect(binaryHeap.poll()).toBe(-2);
        expect(binaryHeap.contains(-2)).toBe(false);
        expect(binaryHeap.find((v) => v === 393)).toBe(false);
        expect(binaryHeap.find(v => v === 109)).toBe(true);
        expect(binaryHeap.find(v => v === 0)).toBe(true);
        binaryHeap.poll();
        expect(binaryHeap.find(v => v === 0)).toBe(false);
    });

    test('whether the heap can be converted to string in a correct way', () => {
        expect(binaryHeap.toString()).toBe('');
        binaryHeap.add(2).add(0).add(8).add(28).add(-2).add(9).add(8).add(109);
        expect(binaryHeap.toString()).toBe('-2,0,8,28,2,9,8,109');
    });
})