import BinaryTreeNode from './BinaryTreeNode'

export default class BinarySearchTree {
  constructor(value = null) {
    this.root = value ? new BinaryTreeNode(value) : undefined;
  }

  find() {

  }

  contains() {

  }

  remove(value) {

  }

  insert(value) {
    if(!this.root) {
      this.root = new BinaryTreeNode(value);
      return;
    }


  }

  update(oldValue, newValue) {
    
  }

}
