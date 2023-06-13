import { LinkedList } from "../linked-list/linked-list";
import { getTypeOf } from "../utils/typechecker";

const defaultHashTableSize = 32;

export class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.hashTableSize = hashTableSize;
    this.hashTable = new Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  hashCodeGenerate(codeString) {
    let sum = 0;
    for (let i = 0; i < codeString.length; i++) {
      sum += codeString.charCodeAt(i);
    }
    return sum + codeString.length;
  }

  convertHashCodeToIndex(hashCode) {
    return hashCode % this.hashTableSize;
  }

  allowedKeyTypes() {
    return ["string"];
  }

  get(key) {
    if (!this.allowedKeyTypes().includes(getTypeOf(key))) {
      throw "not an supported type of keys, please use string as keys";
    }

    if (!this.keys[key]) {
      throw "no value for this key have been assigned before.";
    }
    const hashCode = this.hashCodeGenerate(key);
    const index = this.convertHashCodeToIndex(hashCode);
    const hashTableLinkedList = this.hashTable[index];

    const listNodeWhichContainsValueForTheSpecifiedKey =
      hashTableLinkedList.find((index, node) => node.data.key === key);

    return listNodeWhichContainsValueForTheSpecifiedKey.currentNode.data.value;
  }

  set(key, value) {
    const hashCode = this.convertHashCodeToIndex(this.hashCodeGenerate(key));
    this.keys[key] = hashCode;

    const hashTableLinkedList = this.hashTable[hashCode];
    if (hashTableLinkedList) {
      const isCurrentKeyAlreadyPresentLinkedList = hashTableLinkedList.find(
        (index, node) => node.data.key === key
      );
      if (isCurrentKeyAlreadyPresentLinkedList) {
        isCurrentKeyAlreadyPresentLinkedList.currentNode.data = {
          key,
          value,
        };
      } else {
        hashTableLinkedList.append({
          key,
          value,
        });
      }
    } else {
      hashTableLinkedList.append({
        key: key,
        value,
      });
    }
  }

  delete(key) {}

  has(key) {}

  getKeys() {}

  getValues() {}
}
