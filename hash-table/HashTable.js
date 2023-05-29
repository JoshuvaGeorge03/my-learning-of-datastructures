import { LinkedList } from "../linked-list/linked-list";
const defaultHashTableSize = 32;

class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.hashTable = new Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
      this.hashTableSize = hashTableSize;
  }

  hashCodeGenerate(codeString) {
    let sum  = 0
    for(let i = 0; i < codeString.length; i++) {
      sum += codeString.charCodeAt(i)
    }
    return sum;
  }

  convertHashCodeToIndex(hashCode) {
    return hashCode % this.hashTableSize;
  }

  get(key) {
  }

  set(key, value) {

  }

  delete(key) {

  }

  has(key) {
    
  }
}
