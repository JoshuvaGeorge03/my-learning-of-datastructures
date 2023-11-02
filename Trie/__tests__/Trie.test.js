import Trie from "../Trie";

describe('Trie Data structure Testing', () => {

    function makeTheStringIntoArray(str, splitChar = '') {
        return str.split(splitChar);
    } 

    test('whether the trie adding word correctly', () => {
        
        const trie = new Trie();

        trie.addWord('jos');
        expect(trie.toArray()).toEqual(['$', 'j', 'o', 's']);

        trie.addWord('count');
        trie.addWord('joker');
        
        expect(trie.toArray()).toEqual('$jokerscount'.split(''));

        expect(trie.addWord('jokers').toArray()).toEqual(makeTheStringIntoArray('$jokersscount'));

        trie.addWord('emy');

        expect(trie.toArray()).toEqual(makeTheStringIntoArray('$jokersscountemy'));

        trie.addWord('emila');

        expect(trie.toArray()).toEqual(makeTheStringIntoArray('$jokersscountemilay'));

    });

    test('whether the word deletion work in trie correctly', () => {
        
    });
});