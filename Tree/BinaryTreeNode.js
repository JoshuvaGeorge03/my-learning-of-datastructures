import { HashTable } from "../hash-table/HashTable";
import { doNothingExceptReturningPassedArgument } from "../utils/default-value-assignment";

export default class BinaryTreeNode {
    constructor(value = null, left = null, right = null, parent = null) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.parent = parent;
  
      this.meta = new HashTable();
    }
  
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
  
        if (
          BinaryTreeNode.compare(this.parent, grandParent.left, (a, b) => a === b)
        ) {
          return grandParent.right ? grandParent.right : null;
        }
  
        if (
          BinaryTreeNode.compare(this.parent, grandParent.right, (a, b) => a === b)
        ) {
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
      if (this.left && BinaryTreeNode.compare({ value }, this.left)) {
        this.left.parent = null;
        this.left = null;
        return true;
      }
  
      if (this.right && BinaryTreeNode.compare({ value }, this.right)) {
        this.right.parent = null;
        this.right = null;
        return true;
      }
      return false;
    }
  
    replaceChild(nodeToReplace, replaceMentNode) {
      if (nodeToReplace && replaceMentNode) {
        if (this.left && BinaryTreeNode.compare(nodeToReplace, this.left)) {
          this.setLeft(nodeToReplace);
          return true;
        }
  
        if (this.right && BinaryTreeNode.compare(nodeToReplace, this.right)) {
          this.setRight(replaceMentNode);
          return true;
        }
      }
      return false;
    }
  
    traverseTreeInOrder(effectCb) {
      if (this.left) {
        effectCb?.(this.left);
        console.log("this.left", this.left.value);
        this.left.traverseTreeInOrder(effectCb);
      }
  
      effectCb?.(this);
      console.log("root", this.value);
  
      if (this.right) {
        effectCb?.(this.right);
        console.log("this right", this.right.value);
        this.right.traverseTreeInOrder(effectCb);
      }
    }
  
    toArray(mappingFn = doNothingExceptReturningPassedArgument) {
      const treeNodes = [];
  
      const nodeCollectionCb = (node) => treeNodes.push(node);
  
      this.traverseTreeInOrder(nodeCollectionCb);
  
      return treeNodes.map((node) => mappingFn(node));
    }
  
    toString(stringyFierFn) {
      return this.toArray((node) => node.value)
        .map((value) => (stringyFierFn ? stringyFierFn(value) : value))
        .toString();
    }
  
    static compare(node, otherNode, cb) {
      if (cb) {
        return cb(node, otherNode);
      }
      return node.value === otherNode.value;
    }
  
    static copyNode(targetNode, sourceNode) {
      targetNode.setRight(sourceNode.right);
      targetNode.setLeft(sourceNode.left);
      targetNode.setValue(sourceNode.value);
    }
  }