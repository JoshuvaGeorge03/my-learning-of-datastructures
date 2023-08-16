import { convertToFalseOnlyIfValueIsNullOrUndefined } from "../utils/boolean";
const {
  doNothingExceptReturningPassedArgument,
} = require("../utils/default-value-assignment");
export default class BinaryHeap {
  constructor(extractValueFromHeap = doNothingExceptReturningPassedArgument) {
    this.heapContainer = [];
    this.extractValueFromHeap = extractValueFromHeap;
  }

  getValue(index) {
    return this.heapContainer[index];
  }

  getSize() {
    return this.heapContainer.length;
  }

  isEmpty() {
    return !Boolean(this.getSize());
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.extractValueFromHeap(this.heapContainer[0]);
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndexFromRightChildIndex(index) {
    return (index - 2) / 2;
  }

  getParentIndexFromLeftChildIndex(index) {
    return (index - 1) / 2;
  }

  isRightChild(index) {
    return index % 2 === 0 ? true : false;
  }

  isLeftChild(index) {
    return convertToFalseOnlyIfValueIsNullOrUndefined(this.isRightChild(index));
  }

  isLeftChildExist(parentIndex) {
    return convertToFalseOnlyIfValueIsNullOrUndefined(
      this.getLeftChildIndex(parentIndex)
    );
  }

  isRightChildExist(parentIndex) {
    return convertToFalseOnlyIfValueIsNullOrUndefined(
      this.getRightChildIndex(parentIndex)
    );
  }

  getLastIndex() {
    return this.heapContainer.length - 1;
  }

  getStartIndex() {
    return 0;
  }

  getParentIndexBasedOnLeftOrRightChildIndex(childIndex) {
    const isRightChild = this.isRightChild(childIndex);
    if (isRightChild) {
      return this.getParentIndexFromRightChildIndex(childIndex);
    }
    return this.getParentIndexFromLeftChildIndex(childIndex);
  }

  hasParent(index) {
    const isRightChild = this.isRightChild(index);
    if (isRightChild) {
      return convertToFalseOnlyIfValueIsNullOrUndefined(
        this.heapContainer[this.getParentIndexFromRightChildIndex(index)]
      );
    }
    return convertToFalseOnlyIfValueIsNullOrUndefined(
      this.heapContainer[this.getParentIndexFromLeftChildIndex(index)]
    );
  }

  getParentValue(childIndex) {
    if (this.hasParent(childIndex)) {
      const index = this.getParentIndexBasedOnLeftOrRightChildIndex(childIndex);
      return this.heapContainer[index];
    }
    return null;
  }

  swap(currentIndex, swapIndex) {
    const tmp = this.heapContainer[currentIndex];
    this.heapContainer[currentIndex] = this.heapContainer[swapIndex];
    this.heapContainer[swapIndex] = tmp;
  }

  poll() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }
    this.swap(0, this.getLastIndex());
    const removedValue = this.heapContainer.pop();
    // need to bubble down to staisfies the heap invariant
    this.heapifyDown(this.getStartIndex());
    return removedValue;
  }

  add(value) {
    if (this.isEmpty()) {
      this.heapContainer.push(value);
      return this;
    }
    this.heapContainer.push(value);
    this.heapifyUp(this.heapContainer.length - 1);
    return this;
  }

  clear() {
    while (this.heapContainer.length) {
      this.heapContainer.pop();
    }
    return this.heapContainer.length;
  }

  contains(value) {
    return this.heapContainer.find(
      (heapValue) => this.extractValueFromHeap(heapValue) === value
    );
  }

  find(cb) {
    return this.heapContainer.some((heapValue) =>
      cb(this.extractValueFromHeap(heapValue))
    );
  }

  heapifyUp(indexToStart) {
    let currentIndex = indexToStart || this.heapContainer.length - 1;
    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(
        this.extractValueFromHeap(this.heapContainer[currentIndex]),
        this.extractValueFromHeap(this.getParentValue(currentIndex))
      )
    ) {
      console.log('current index', currentIndex);
      this.swap(
        currentIndex,
        this.getParentIndexBasedOnLeftOrRightChildIndex(currentIndex)
      );
      currentIndex =
        this.getParentIndexBasedOnLeftOrRightChildIndex(currentIndex);
    }
  }

  heapifyDown(indexToStart) {
    let currentIndex = indexToStart;
    let rightChildValue = this.getValue(this.getRightChildIndex(currentIndex));
    let leftChildValue = this.getValue(this.getLeftChildIndex(currentIndex));
    while (
      (this.isLeftChildExist(currentIndex) ||
        this.isRightChildExist(currentIndex)) &&
      (!this.pairIsInCorrectOrder(
        leftChildValue,
        this.getValue(currentIndex)
      ) ||
        !this.pairIsInCorrectOrder(
          rightChildValue,
          this.getValue(currentIndex)
        ))
    ) {
      const isBothLeftAndRightChildAreSame = rightChildValue === leftChildValue;
      if (isBothLeftAndRightChildAreSame) {
        this.swap(currentIndex, this.getLeftChildIndex(currentIndex));
        currentIndex = this.getLeftChildIndex(currentIndex);
        rightChildValue = this.getValue(this.getRightChildIndex(currentIndex));
        leftChildValue = this.getValue(this.getLeftChildIndex(currentIndex));
        continue;
      }
      const isLeftChildValueIsSmaller = leftChildValue < rightChildValue;
      if (isLeftChildValueIsSmaller) {
        this.swap(currentIndex, this.getLeftChildIndex(currentIndex));
        currentIndex = this.getLeftChildIndex(currentIndex);
        rightChildValue = this.getValue(this.getRightChildIndex(currentIndex));
        leftChildValue = this.getValue(this.getLeftChildIndex(currentIndex));
        continue;
      }
      this.swap(currentIndex, this.getRightChildIndex(currentIndex));
      currentIndex = this.getRightChildIndex(currentIndex);
      rightChildValue = this.getValue(this.getRightChildIndex(currentIndex));
      leftChildValue = this.getValue(this.getLeftChildIndex(currentIndex));
    }
  }

  toArray(extractValueFn = doNothingExceptReturningPassedArgument) {
    return this.heapContainer.map(extractValueFn);
  }

  toString() {
    return this.toArray().toString();
  }

  pairIsInCorrectOrder(childValue, parentValue) {
    throw new Error(
      "it should be implemented based on the min or max heap cases"
    );
  }
}
