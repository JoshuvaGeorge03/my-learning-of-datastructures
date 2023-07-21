import { HashTable } from "../HashTable";

describe('Hash Table lookup Test', () => {
    test('whether hash table initialize correctly with the set size', () => {
        const hashTable = new HashTable(2);
        expect(hashTable.hashTable.length).toBe(2);
        const defaultSizedHashTable = new HashTable();
        expect(defaultSizedHashTable.hashTable.length).toBe(32);
    });

    test('whether the table has code generation deterministically with no side effects', () => {
        const hashTable = new HashTable(2);
        expect(hashTable.hashCodeGenerate('a')).toBe(98);
        expect(hashTable.hashCodeGenerate('a')).toBe(98);
        expect(hashTable.hashCodeGenerate('ab')).toBe(97 + 98 + 2);
        expect(hashTable.hashCodeGenerate('aB')).toBe(97 + 66 + 2);
        expect(hashTable.convertHashCodeToIndex('a')).toBe(98 % 2);
        expect(hashTable.convertHashCodeToIndex('a')).toBe(98 % 2);
        expect(hashTable.convertHashCodeToIndex('ab')).toBe((98 + 97 + 2) % 2);
        expect(hashTable.convertHashCodeToIndex('ba')).toBe((98 + 97 + 2) % 2);
    });

});