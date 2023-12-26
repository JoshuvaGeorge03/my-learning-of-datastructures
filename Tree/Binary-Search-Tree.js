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

  get uncle() {
    if (!this.parent) {
      return null;
    }

    if (!this.parent.parent) {
      return null;
    }

    const grandParent = this.parent.parent;

    if (grandParent.left && grandParent.right) {
      // const onlyLeft = grandParent.left && !grandParent.right;

      // const onlyRight = !grandParent.left && grandParent.right;

      // if(onlyLeft) {
      //   return grandParent.left;
      // }

      if (this.compare(this.parent, grandParent.left, (a, b) => a === b)) {
        return grandParent.right ? grandParent.right : null;
      }

      if (this.compare(this.parent, grandParent.right, (a, b) => a === b)) {
        return grandParent.left ? grandParent.left : null;
      }
    }

    return null;
  }

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

  removeChild(value) {
    if (this.left && this.compare({ value }, this.left)) {
      this.left.parent = null;
      this.left = null;
      return true;
    }

    if (this.right && this.compare({ value }, this.right)) {
      this.right.parent = null;
      this.right = null;
      return true;
    }
    return false;
  }

  compare(node, otherNode, cb) {
    if (cb) {
      return cb(node, otherNode);
    }
    return node.value === otherNode.value;
  }

  replaceChild() {}

  traverseTreeInOrder() {}

  toString() {}
}

export default class BinarySearchTree {
  constructor() {}
}
