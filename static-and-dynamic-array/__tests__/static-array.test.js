import { StaticArray } from "../StaticArray";

describe('ensure working of static array implemenation', () => {

    let myStaticArray = null;
    let defaultCapacity = 10

    beforeEach(() => {
        myStaticArray = new StaticArray(defaultCapacity);
    });

    afterEach(() => {
        myStaticArray = null;
    })

    test('whether the get item from static array works', () => {
        expect(myStaticArray.getItem(0)).toBe(null);
        expect(() => myStaticArray.getItem(-1)).toThrow(/negative/);
        expect(() => myStaticArray.getItem(defaultCapacity + 1)).toThrow(/bigger/);
        myStaticArray.setItem(1, 9);
        expect(myStaticArray.getItem(1)).toBe(9);
    });

    test('whehter the value can be setted correctly', () => {
        expect(myStaticArray.setItem(9, 100)).toBe(100);
        expect(myStaticArray.getItem(9)).toBe(100);
        myStaticArray.setItem(9, 90);
        myStaticArray.setItem(0, 900);
        expect(myStaticArray.getItem(9)).toBe(90);
        expect(myStaticArray.getItem(0)).toBe(900);
    });

    test('whether the current values are selected', () => {
        const staticArray = new StaticArray(2);
        expect(staticArray.getValues()).toEqual([null, null]);
        staticArray.setItem(0, 90);
        staticArray.setItem(1, 100);
        expect(staticArray.getValues()).toEqual([90, 100]);
        expect(staticArray.toString()).toEqual('90,100');
    });

    test('whether the size and empty check is correct', () => {
        expect(myStaticArray.getSize()).toBe(10);
        expect(myStaticArray.isEmpty()).toBe(false);
        expect(myStaticArray.toString()).toBe('');
    });

});