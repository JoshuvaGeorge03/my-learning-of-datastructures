import { convertToFalseOnlyIfValueIsNullOrUndefined } from '../utils/boolean';
export default class BinaryHeap {
  constructor() {
    this.heapContainer = [];
  }

  getSize() {
    return this.heapContainer.length;
  }

  isEmpty() {
    return Boolean(this.getSize());
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.heapContainer[0];
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
    this.swap();
    const removedValue = this.heapContainer.pop();
    // need to bubble down to staisfies the heap invariant
    return removedValue;
  }

  add(value) {
    if(this.isEmpty()) {
      this.heapContainer.push(value);
      return this;
    }
    this.heapContainer.push(value);
    this.heapifyUp(this.heapContainer.length - 1);
    return this;
  }

  leftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  rightChildIndex(parentIndex) {
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
    return !this.isRightChild(index);
  }

  getParentIndexBasedOnLeftOrRightChildIndex(childIndex) {
    const isRightChild = this.isRightChild(childIndex);
    if(isRightChild) {
      return this.getParentIndexFromRightChildIndex(childIndex);
    }
    return this.getParentIndexFromLeftChildIndex(childIndex);
  }

  hasParent(index) {
    const isRightChild = this.isRightChild(index);
    if(isRightChild) {
      return convertToFalseOnlyIfValueIsNullOrUndefined(this.heapContainer[this.getParentIndexFromRightChildIndex(index)]);
    }
    return convertToFalseOnlyIfValueIsNullOrUndefined(this.heapContainer[this.getParentIndexFromLeftChildIndex(index)]);
  }

  getParentValue(childIndex) {
    if(this.hasParent(childIndex)) {
      const index = this.getParentIndexBasedOnLeftOrRightChildIndex(childIndex);
      return this.heapContainer[index];
    }
    return null;
  }

  heapifyUp(indexToStart) {
    let currentIndex = indexToStart || this.heapContainer.length - 1;
    while(this.hasParent(currentIndex) && !this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.getParentValue(currentIndex))) {
      this.swap(currentIndex, this.getParentIndexBasedOnLeftOrRightChildIndex(currentIndex));
      currentIndex = this.getParentIndexBasedOnLeftOrRightChildIndex(currentIndex);
    }
  }
  
  heapifyDown() {
    
  }

  pairIsInCorrectOrder(childValue, parentValue) {
    throw new Error('it should be implemented based on the min or max heap cases');
  }
}
