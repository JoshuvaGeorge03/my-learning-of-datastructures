import { StaticArray } from "./StaticArray";

const defaultSize = 8;
export class DynamicArray {
  constructor(initialSize = defaultSize) {
    this.initialArraySize = initialSize;
    this.list = Array(this.initialArraySize).fill(null);
    this.currentLength = 0;
  }

  throwOutOfBoundaryException() {
    throw "index is larger than or negative to the the size of the array";
  }

  getValue(index) {
    if (index >= this.list.length || index < 0) return this.throwOutOfBoundaryException();
    return this.list[index];
  }

  updateValue(index, value) {
    if (index >= this.list.length || index < 0) return this.throwOutOfBoundaryException();
    return this.list[index] = value;
  }

  add(value) {
    console.log('value', value, this.currentLength, this.list.length);
    const futureCurrentLength = this.currentLength + 1;
    if (futureCurrentLength < this.list.length) {
      this.list[this.currentLength] = value;
    } else {
      this.list = [...this.list, ...Array(this.list.length).fill(null)];
      this.list[this.currentLength] = value;
    }
    this.currentLength = futureCurrentLength;
  }

  removeAt(index) {
    if (index >= this.list.length || index < 0) return this.throwOutOfBoundaryException();
    this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
    this.currentLength = this.currentLength > 0 ? this.currentLength - 1 : this.currentLength;
  }

  remove(value) {
    const index = this.list.findIndex(listValue => listValue === value);
    if(index > -1) {
        this.removeAt(index);
        return true;
    }
    return false
  }

  getValues() {
    return this.list.map(v => v);
  }

  getSize() {
    return this.list.length;
  }

  isEmpty() {
    return Boolean(this.getSize());
  }

  toString() {
    return this.list.toString();
  }
}