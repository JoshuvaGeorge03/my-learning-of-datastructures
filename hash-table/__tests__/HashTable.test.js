import { HashTable } from "../HashTable";

describe("Hash Table lookup Test", () => {
  test("whether hash table initialize correctly with the set size", () => {
    const hashTable = new HashTable(2);
    expect(hashTable.hashTable.length).toBe(2);
    const defaultSizedHashTable = new HashTable();
    expect(defaultSizedHashTable.hashTable.length).toBe(32);
  });

  test("whether the table has code generation deterministically with no side effects", () => {
    const hashTable = new HashTable(2);
    expect(hashTable.hashCodeGenerate("a")).toBe(98);
    expect(hashTable.hashCodeGenerate("a")).toBe(98);
    expect(hashTable.hashCodeGenerate("ab")).toBe(97 + 98 + 2);
    expect(hashTable.hashCodeGenerate("aB")).toBe(97 + 66 + 2);
    expect(hashTable.convertHashCodeToIndex("a")).toBe(98 % 2);
    expect(hashTable.convertHashCodeToIndex("a")).toBe(98 % 2);
    expect(hashTable.convertHashCodeToIndex("ab")).toBe((98 + 97 + 2) % 2);
    expect(hashTable.convertHashCodeToIndex("ba")).toBe((98 + 97 + 2) % 2);
  });

  test("whether the table get/set/delete operation works well with or without collision scenario", () => {
    const hashTable = new HashTable(5);

    expect(() => hashTable.get(33)).toThrow(/not an supported type of keys/);
    expect(() => hashTable.get("")).toThrow(/pass a key to do the processing/);
    expect(() => hashTable.get("a")).toThrow(/key not assigned before/);

    expect(() => hashTable.set(33)).toThrow(/not an supported type of keys/);
    expect(() => hashTable.set("")).toThrow(/pass a key to do the processing/);

    expect(() => hashTable.delete(33)).toThrow(/not an supported type of keys/);
    expect(() => hashTable.delete("")).toThrow(
      /pass a key to do the processing/
    );
    expect(() => hashTable.delete("a")).toThrow(/key not assigned before/);

    expect(hashTable.set("jos", 89)).toStrictEqual({
      success: true,
      index: hashTable.convertHashCodeToIndex("jos"),
    });
    expect(hashTable.get("jos")).toBe(89);
    expect(
      hashTable.set("x", {
        firstName: "joshuva",
        lastName: "George",
        age: 29,
      })
    ).toEqual({
      success: true,
      index: hashTable.convertHashCodeToIndex("x"),
    });
    expect(hashTable.get("x")).toStrictEqual({
      firstName: "joshuva",
      lastName: "George",
      age: 29,
    });
    expect(hashTable.getValues()).toEqual([
      89,
      {
        firstName: "joshuva",
        lastName: "George",
        age: 29,
      },
    ]);
    expect(
      hashTable.set("x", {
        firstName: "joshuva",
        lastName: "George",
        age: 39,
      })
    ).toEqual({
      success: true,
      index: hashTable.convertHashCodeToIndex("x"),
    });
    expect(hashTable.get("x")).toStrictEqual({
      firstName: "joshuva",
      lastName: "George",
      age: 39,
    });
    expect(hashTable.getValues()).toEqual([
      89,
      {
        firstName: "joshuva",
        lastName: "George",
        age: 39,
      },
    ]);

    expect(() => hashTable.get("joshuva")).toThrow(/key not assigned before/);

    expect(() => hashTable.delete("joshuva")).toThrow(
      /key not assigned before/
    );

    expect(hashTable.delete("jos")).toBe(89);

    expect(hashTable.getValues()).toEqual([
      {
        firstName: "joshuva",
        lastName: "George",
        age: 39,
      },
    ]);

    expect(hashTable.delete("x")).toEqual({
      firstName: "joshuva",
      lastName: "George",
      age: 39,
    });

    expect(hashTable.getValues()).toEqual([]);
    expect(hashTable.toString()).toBe("");
  });

  test("whether the key exist or not check works well", () => {
    const hashTable = new HashTable(2);
    expect(hashTable.has("jos")).toBe(false);
    expect(hashTable.has("dkdk")).toBe(false);
    hashTable.set("jos", 90);
    expect(hashTable.has("jos")).toBe(true);
  });

  test("whether the every inserted values comes up as it is", () => {
    const ht = new HashTable(2);
    expect(ht.getValues()).toEqual([]);
    const hashTableKeys = [
      { key: "jos", value: 90 },
      { key: "ddkdk", value: 91 },
      { key: "xmww", value: 92 },
      { key: "2332fdsd", value: 93 },
    ];
    let expectedArray = [90, 91, 92, 93];
    hashTableKeys.forEach((hashTableKey) => {
      ht.set(hashTableKey.key, hashTableKey.value);
    });
    expect(ht.getValues()).toEqual(expectedArray);
  });

  test("whether the every inserted values comes up as it is in a stringfied", () => {
    const ht = new HashTable(2);
    expect(ht.toString()).toBe('');
    const hashTableKeys = [
      { key: "jos", value: 90 },
      { key: "ddkdk", value: 91 },
      { key: "xmww", value: 92 },
      { key: "2332fdsd", value: 93 },
    ];
    hashTableKeys.forEach((hashTableKey) => {
      ht.set(hashTableKey.key, hashTableKey.value);
    });
    expect(ht.toString()).toBe('90,91,92,93');
    expect(ht.toString((value) => `${value}:jos`)).toBe('90:jos,91:jos,92:jos,93:jos');
  });
});
