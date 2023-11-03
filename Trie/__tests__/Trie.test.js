import Trie from "../Trie";

describe('Trie Data structure Testing', () => {

    function makeTheStringIntoArray(str, splitChar = '') {
        return str.split(splitChar);
    } 

    function removeRootNodeFromStringAndMakeItArray(str) {
        return makeTheStringIntoArray(str.slice(1));
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
        const trie = new Trie();
        expect(trie.deleteWord('jos')).toBe(null);

        trie.addWord('joshuva');
        expect(trie.deleteWord('jos')).toBe(null);
        expect(trie.deleteWord('joshuva').toArray()).toEqual(['$']);
    });
});