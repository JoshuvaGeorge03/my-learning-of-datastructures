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
    return removedValue;
  }

  heapifyUp() {

  }
  
  heapifyDown() {
    
  }
}
