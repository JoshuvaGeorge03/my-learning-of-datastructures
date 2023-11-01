import Trie from "../Trie";

describe('Trie Data structure Testing', () => {
    test('whether the trie adding word correctly', () => {
        
        const trie = new Trie();

        trie.addWord('jos');
        expect(trie.toArray()).toEqual(['$', 'j', 'o', 's']);

        trie.addWord('count');
        trie.addWord('joker');
        
        expect(trie.toArray()).toEqual('$jokerscount'.split(''));

    });
});