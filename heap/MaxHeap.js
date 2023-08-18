import { convertToFalseOnlyIfValueIsNullOrUndefined } from "../utils/boolean";
import BinaryHeap from "./Heap";

export default class MaxHeap extends BinaryHeap {

    isValuePresent(value) {
        return convertToFalseOnlyIfValueIsNullOrUndefined(value);
    }

    isBothValuePresent(parentValue, childValue) {
        return this.isValuePresent(parentValue) && this.isValuePresent(childValue);
    }

    pairIsInCorrectOrder(childValue, parentValue) {
        return this.isBothValuePresent(parentValue, childValue) ?  parentValue >= childValue : true;
    }
}