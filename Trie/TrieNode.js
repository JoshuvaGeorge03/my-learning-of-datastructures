import { HashTable } from "../hash-table/HashTable";

const characterCount = 26;
export default class TrieNode {
    constructor(character, isEndOfWord, data ) {
        this.character = character;
        this.isEndOfWord = isEndOfWord;
        this.data = data;
        this.childrens = new HashTable(characterCount);
    }

    addChild(char, isEndOfWord) {

    }

    removeChild() {

    }

    isEndOfWord() {

    }

    hasSuggestions() {

    }

    getSuggestions() {

    }

    toString() {

    }

    toArray() {
        return this.childrens.getKeys()
    }
}