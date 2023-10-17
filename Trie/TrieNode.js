import { HashTable } from "../hash-table/HashTable";

const characterCount = 26;
export default class TrieNode {
  constructor(character, isEndOfWord, data) {
    this.character = character;
    this.isEndOfWord = isEndOfWord;
    this.data = data;
    this.childrens = new HashTable(characterCount);
  }

  addChild(char, isEndOfWord) {
    if (this.childrens.has(char)) {
      const node = this.childrens.get(char);
      node.isEndOfWord = isEndOfWord;
      return node;
    }
    return new TrieNode(char, isEndOfWord);
  }

  removeChild() {}

  isEndOfWord() {}

  hasSuggestions() {}

  getSuggestions() {}

  toString() {}

  toArray() {
    return this.childrens.getKeys();
  }
}
