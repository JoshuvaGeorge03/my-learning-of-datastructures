import TrieNode from "./TrieNode";

const RootNodeChar = '$';

export default class Trie {
    constructor() {
        this.root = new TrieNode(RootNodeChar, false, null);
    }

    addWord(word) {
        const wordLength = word.length;
        let node = this.root;

        for(let i = 0; i < wordLength; i++) {
            const characterOfAWord = word[i];
            const isEndOfWord = i + 1 === wordLength;
            node = node.addChild(characterOfAWord, isEndOfWord);
        }

        return this;
    }

    deleteWord(word) {
        const toBeDeletedWord = Array.from(word);
    }

    hasWordExist(word) {
        
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