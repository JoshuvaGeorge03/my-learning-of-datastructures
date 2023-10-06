import TrieNode from "./TrieNode";

const RootNodeChar = '$';

export default class Trie {
    constructor() {
        this.root = new TrieNode(RootNodeChar, false, null);
    }

    addWord() {

    }

    deleteWord() {

    }

    hasWordExist() {

    }

    suggestNextCharacters() {

    }

    getLasCharacterNode(){

    }

    toArray() {
        return this.root.toArray();
    }

    toString() {

    }
}