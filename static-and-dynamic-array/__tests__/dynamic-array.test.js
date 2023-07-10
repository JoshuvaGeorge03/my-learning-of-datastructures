import { DynamicArray } from "../DynamicArray";


describe('checking the functionality of dynamic array', () => {

    let initialSize = 10;
    let myDynamicArray = null;

    beforeEach(() => {
        myDynamicArray = new DynamicArray(initialSize);
    });

    afterEach(() => {
        myDynamicArray = null;
    });

    it('should be get value from array', () => {
        expect(myDynamicArray.getValue(0)).toBeNull();
    });
})