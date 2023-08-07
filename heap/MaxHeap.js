import BinaryHeap from "./Heap";

export default class MaxHeap extends BinaryHeap {
    pairIsInCorrectOrder(childValue, parentValue) {
        return parentValue >= childValue;
    }
}