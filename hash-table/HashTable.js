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
    return "key not assigned before.";
  }

  notAnValidKeyError() {
    return 'pass a key to do the processing';
  }

  hashCodeGenerate(codeString) {
    let sum = 0;
    for (let i = 0; i < codeString.length; i++) {
      sum += codeString.charCodeAt(i);
    }
    return sum + codeString.length;
  }

  convertHashCodeToIndex(key) {
    const hashCode = this.hashCodeGenerate(key);
    return hashCode % this.hashTableSize;
  }

  get(key) {
    if(!key) {
      throw this.notAnValidKeyError();
    }

    if (!this.checkWhetherTheKeyIsOfSupportedType(key)) {
      throw this.notSupportedTypeError();
    }

    if (!this.keys[key]) {
      throw this.noKeyExistError();
    }
    const index = this.convertHashCodeToIndex(key);
    const hashTableLinkedList = this.hashTable[index];

    const listNodeWhichContainsValueForTheSpecifiedKey =
      hashTableLinkedList.find((index, node) => node.data.key === key);

    return listNodeWhichContainsValueForTheSpecifiedKey.currentNode.data.value;
  }

  set(key, value) {

    if(!key) {
      throw this.notAnValidKeyError();
    }

    if(!this.checkWhetherTheKeyIsOfSupportedType(key)) {
      throw this.notSupportedTypeError();
    }

    const hashCode = this.convertHashCodeToIndex(key);
    this.keys[key] = hashCode;

    const hashTableLinkedList = this.hashTable[hashCode];
    if (hashTableLinkedList) {
      const isCurrentKeyAlreadyPresentLinkedList = hashTableLinkedList.find(
        (index, node) => node.data?.key === key
      );
      if (isCurrentKeyAlreadyPresentLinkedList?.currentNode) {
        isCurrentKeyAlreadyPresentLinkedList.currentNode.data = {
          key,
          value,
        };
        return {success: true, index: hashCode}
      } else {
        hashTableLinkedList.append({
          key,
          value,
        });
        return {success: true, index: hashCode}
      }
    } else {
      hashTableLinkedList.append({
        key: key,
        value,
      });
      return {success: true, index: hashCode}
    }
  }

  delete(key) {

    if(!key) {
      throw this.notAnValidKeyError();
    }

    if(!this.checkWhetherTheKeyIsOfSupportedType(key)) {
      throw this.notSupportedTypeError();
    }

    if(!this.keys[key]) {
      throw this.noKeyExistError();
    }
    
    delete this.keys[key];

    const hashCode = this.convertHashCodeToIndex(key);
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
