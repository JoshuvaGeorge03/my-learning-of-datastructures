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
        let nodeChildren = this.root.childrens;
        let i = 0;
        let trieArray = [];
        while(nodeChildren.getKeys().length > 0) {
            trieArray.push(...nodeChildren.getKeys());
        }
    }

    toString() {

    }
}