import { LinkedList } from "../linked-list/linked-list";
import { getTypeOf } from '../utils/typechecker';

const defaultHashTableSize = 32;

export class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.hashTable = new Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
      this.hashTableSize = hashTableSize;
      this.keys = {};
  }

  hashCodeGenerate(codeString) {
    let sum  = 0
    for(let i = 0; i < codeString.length; i++) {
      sum += codeString.charCodeAt(i)
    }
    return sum + codeString.length;
  }

  convertHashCodeToIndex(hashCode) {
    return hashCode % this.hashTableSize;
  }

  allowedKeyTypes() {
    return ['string'];
  }

  get(key) {
    if(!this.allowedKeyTypes().includes(getTypeOf(key))) {
      throw 'not an supported type of keys, please use string as keys';
    }

    const hashCode = this.hashCodeGenerate(key);

    if(!this.keys[hashCode]) {
      throw 'no value for this key have been assigned before.'
    }

    const index = this.convertHashCodeToIndex(hashCode);
    const hashTableLinkedList = this.hashTable[index];

    const listNodeWhichContainsValueForTheSpecifiedKey = hashTableLinkedList.find((index, node) => node.data.key === key);

    return listNodeWhichContainsValueForTheSpecifiedKey.currentNode.data.value;
  }

  set(key, value) {

  }

  delete(key) {

  }

  has(key) {
    
  }

  getKeys() {

  }

  getValues() {

  }
}
