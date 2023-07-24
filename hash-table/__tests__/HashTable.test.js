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


    test('whether the table get/set/delete operation works well without collision scenario', () => {
        const hashTable = new HashTable(5);

        expect(() => hashTable.get(33)).toThrow(/not an supported type of keys/);
        expect(() => hashTable.get('')).toThrow(/pass a key to do the processing/);
        expect(() => hashTable.get('a')).toThrow(/key not assigned before/);

        expect(() => hashTable.set(33)).toThrow(/not an supported type of keys/);
        expect(() => hashTable.set('')).toThrow(/pass a key to do the processing/);

        expect(() => hashTable.delete(33)).toThrow(/not an supported type of keys/);
        expect(() => hashTable.delete('')).toThrow(/pass a key to do the processing/);
        expect(() => hashTable.delete('a')).toThrow(/key not assigned before/);

        expect(hashTable.set('jos', 89)).toStrictEqual({success: true, index: hashTable.convertHashCodeToIndex('jos')});
    });

});