import { Queue } from "../Queue/Queue";
import TrieNode from "./TrieNode";

const RootNodeChar = "$";

export default class Trie {
  constructor() {
    this.root = new TrieNode(RootNodeChar, false, null);
  }

  addWord(word) {
    const wordLength = word.length;
    let node = this.root;

    for (let i = 0; i < wordLength; i++) {
      const characterOfAWord = word[i];
      const isEndOfWord = i + 1 === wordLength;
      node = node.addChild(characterOfAWord, isEndOfWord);
    }

    return this;
  }

  deleteWord(word) {
    const toBeDeletedWordArr = Array.from(word);
    if (this.hasWordExist(word)) {
      const depthFirstDelete = (currentNode, index = 0) => {
        if (index >= toBeDeletedWordArr.length) {
          return null;
        }

        const char = toBeDeletedWordArr[index];

        const childNode = currentNode.getChild(char);

        if (!childNode) {
          return null;
        }

        index += 1;

        depthFirstDelete(childNode, index);

        if (index === toBeDeletedWordArr.length - 1) {
          childNode.isCompleteWord = false;
        }

        if (!childNode.isChildrenPresent()) {
          currentNode.removeChild(char);
        }
      };

      depthFirstDelete(this.root);

      return this;
    }
    return null;
  }

  hasWordExist(word) {
    const lasCharNode = this.getLasCharacterNode(word);
    return Boolean(lasCharNode && lasCharNode.isEndOfWord());
  }

  suggestNextCharacters(word) {
    const lasCharNode = this.getLasCharacterNode(word);
    if (lasCharNode) {
      return lasCharNode.getSuggestions();
    }
    return [];
  }

  getLasCharacterNode(word) {
    const wordArr = Array.from(word);

    if (!wordArr.length) {
      return null;
    }

    let currentNode = this.root;
    let wordArrLength = wordArr.length;

    for (let i = 0; i < wordArrLength; i++) {
      if (!currentNode.isChildExist(wordArr[i])) {
        return null;
      }

      currentNode = currentNode.getChild(wordArr[i]);
    }

    return currentNode;
  }

  depthFirstTraversal(rootNode, set = []) {
    set.push(rootNode.getValue());
    const childNodes = rootNode.getChildrenNodes();
    if (!childNodes.length) {
      return null;
    }
    for (const childNode of childNodes) {
      this.depthFirstTraversal(childNode, set);
    }
    return set;
  }

  breathFirstTraversal(rootNode) {
    const nodesInQueue = new Queue();
    nodesInQueue.enqueue(rootNode.getValue());
    const queueArr = [...rootNode.getChildrenNodes()];
    for (const queuedItem of queueArr) {
      const currentNodeValue = queuedItem.getValue();
      nodesInQueue.enqueue(currentNodeValue);
      queueArr.push(...queuedItem.getChildrenNodes());
    }
    return nodesInQueue.toArray((node) => node.data);
  }

  toArray(typeOfTravesalMode = 'depth') {
    return typeOfTravesalMode === 'depth' ? this.depthFirstTraversal(this.root) : this.breathFirstTraversal(this.root);
  }

  toString(stringFunc) {
    return this.toArray().map(v => stringFunc(v)).toString();
  }
}
