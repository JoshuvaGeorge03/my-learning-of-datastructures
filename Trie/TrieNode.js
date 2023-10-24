import { HashTable } from "../hash-table/HashTable";

const characterCount = 26;
export default class TrieNode {
  constructor(character, isCompleteWord, data) {
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.data = data;
    this.childrens = new HashTable(characterCount);
  }

  addChild(char, isCompleteWord) {
    if (this.childrens.has(char)) {
      const node = this.getCharNode(char);
      node.isCompleteWord = isCompleteWord;
      return node;
    }
    const node = new TrieNode(char, isCompleteWord);
    this.childrens.set(char, node);
    return node;
  }

  removeChild(char) {
    const childNode = this.getChild(char);

    if(childNode && !childNode.isEndOfWord() && !childNode.isChildrenPresent()) {
      return this.childrens.delete(char);
    }

    return this;

  }

  isEndOfWord() {
    return this.isCompleteWord;
  }

  isChildExist(char) {
    return this.childrens.has(char);
  }

  getChild(char) {
    return this.childrens.get(char);
  }
  
  isChildrenPresent() {
    return Boolean(this.toArray().length);
  }

  hasSuggestions() {}

  getSuggestions() {}

  toString() {
    return this.toArray().join();
  }

  toArray() {
    return this.childrens.getKeys();
  }
}
