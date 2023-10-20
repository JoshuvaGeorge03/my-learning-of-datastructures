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
        if(this.hasWordExist(word)) {
            const lasCharNode = this.getLasCharacterNode(word);
            if(!lasCharNode.isChildrenPresent()) {

            }
        }
        return null;
    }

    hasWordExist(word) {
        const lasCharNode = this.getLasCharacterNode(word);
        return Boolean(lasCharNode && lasCharNode.isEndOfWord());
    }

    suggestNextCharacters() {

    }

    getLasCharacterNode(word){
        const wordArr = Array.from(word);

        if(!wordArr.length) {
            return null
        }

        let currentNode = this.root;
        let wordArrLength = wordArr.length;

        for(let i = 0; i < wordArrLength; i++) {
            if(!currentNode.isChildExist(wordArr[i])) {
                return null;
            }

            currentNode = currentNode.getCharNode(wordArr[i]);
        }

        return currentNode;
    }

    toArray() {
        let nodeChildren = this.root.childrens;
        let i = 0;
        let trieArray = [];
        while(nodeChildren.getKeys().length > 0) {
            trieArray.push(...nodeChildren.getKeys());
        }
        return trieArray;
    }

    toString() {
        return this.toArray().join();
    }
}