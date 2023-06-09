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

  allowedKeyTypes() {
    return ["string"];
  }

  checkWhetherTheKeyIsOfSupportedType(key) {
    return this.allowedKeyTypes().includes(getTypeOf(key));
  }

  notSupportedTypeError() {
    return "not an supported type of keys, please use string as keys";
  }

  noKeyExistError() {
    return "no value for this key have been assigned before.";
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

  get(key) {
    if (!this.checkWhetherTheKeyIsOfSupportedType(key)) {
      throw this.notSupportedTypeError();
    }

    if (!this.keys[key]) {
      throw this.noKeyExistError();
    }
    const hashCode = this.hashCodeGenerate(key);
    const index = this.convertHashCodeToIndex(hashCode);
    const hashTableLinkedList = this.hashTable[index];

    const listNodeWhichContainsValueForTheSpecifiedKey =
      hashTableLinkedList.find((index, node) => node.data.key === key);

    return listNodeWhichContainsValueForTheSpecifiedKey.currentNode.data.value;
  }

  set(key, value) {
    if(!this.checkWhetherTheKeyIsOfSupportedType(key)) {
      throw this.notSupportedTypeError();
    }

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

  delete(key) {
    if(!this.checkWhetherTheKeyIsOfSupportedType(key)) {
      throw this.notSupportedTypeError();
    }

    if(!this.keys[key]) {
      throw this.noKeyExistError();
    }
    
    delete this.keys[key];

    const hashCode = this.convertHashCodeToIndex(this.hashCodeGenerate(key));
    const linkedListNode = this.hashTable[hashCode].find((index, node) => node.data.key === key);
    this.hashTable[hashCode].deleteWithIndex(linkedListNode.currentIndex);
    return linkedListNode.currentNode.data.value;
  }

  has(key) {
    return Object.hasOwn(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys)
  }

  getValues() {
    return this.hashTable.reduce((accumulator, linkedList) => {
      return accumulator.concat(linkedList.toArray());
    }, []).map(listNode => listNode.data.value);
  }
}
