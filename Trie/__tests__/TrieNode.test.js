import TrieNode from "../TrieNode";

describe('TrieNode', () => {
    test('testing whethere trie node created correctly', () => {
        const node = new TrieNode('d', false);
        expect(node.toString()).toBe('d');
    });
});