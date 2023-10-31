import Trie from "../Trie";

describe('Trie Data structure Testing', () => {
    test('whether the trie adding word correctly', () => {
        const trie = new Trie();
        trie.addWord('joshuva');
        console.log('trie depth first traversal', trie.toArray('depth'));
        console.log('trie breath first traversal', trie.toArray());
    });
});