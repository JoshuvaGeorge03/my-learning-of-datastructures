import { HashTable } from "../hash-table/HashTable";

export class BinarTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = null;

    this.meta = new HashTable();
  }

  static copyNode() {}

  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  get uncle() {}

  setValue(value) {
    this.value = value;

    return this;
  }

  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    this.left.parent = this;

    return this;
  }

  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    this.right.parent = this;

    return this;
  }

  removeChild() {}

  replaceChild() {}

  traverseTreeInOrder() {}

  toString() {}
}

export default class BinarySearchTree {
  constructor() {}
}
