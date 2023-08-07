import BinaryHeap from "./Heap";

export default class MinHeap extends BinaryHeap {
    pairIsInCorrectOrder(childValue, parentValue) {
        return parentValue <= childValue;
    }
}