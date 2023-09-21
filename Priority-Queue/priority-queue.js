import BinaryHeap from "../heap/Heap";
import MinHeap from "../heap/MinHeap";
export default class PriorityQueue extends BinaryHeap {
  constructor(customComparator) {
    super(
      (item) => item.value,
      (item) => item.priority
    );
    this.customComparator = customComparator;
  }

  getValueFromHeap(item) {
    return item.value;
  }

  add(item, priority) {
    return super.add({ value: item, priority });
  }

  remove() {
    return super.poll();
  }

  contains(value) {
    return super.contains(value);
  }

  find(cb) {
    return super.find(cb);
  }

  defaultComparator(a, b) {
    return new MinHeap().pairIsInCorrectOrder(a, b);
  }

  pairIsInCorrectOrder(a, b) {
    return this.customComparator
      ? this.customComparator(a, b)
      : this.defaultComparator(a, b);
  }
}
