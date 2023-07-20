import { HashTable } from "../HashTable";

describe('Hash Table lookup Test', () => {
    test('whether hash table initialize correctly with the set size', () => {
        const hashTable = new HashTable(2);
        expect(hashTable.hashTable.length).toBe(2);
        const defaultSizedHashTable = new HashTable();
        expect(defaultSizedHashTable.hashTable.length).toBe(32);
    });
});