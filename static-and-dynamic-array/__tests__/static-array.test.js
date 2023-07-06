import { StaticArray } from "../StaticArray";

describe('ensure working of static array implemenation', () => {

    let myStaticArray = null;

    beforeEach(() => {
        myStaticArray = new StaticArray(10);
    });

    afterEach(() => {
        myStaticArray = null;
    })

    test('whether the get item from static array works', () => {
        expect(myStaticArray.getItem(0)).toBe(null);
    });
});