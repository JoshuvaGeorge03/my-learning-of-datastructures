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
        expect(() => myDynamicArray.getValue(100)).toThrow(/larger/);
        expect(() => myDynamicArray.getValue(-1)).toThrow(/negative/);
        expect(myDynamicArray.getValue(myDynamicArray.getSize() - 1)).toBeNull();
    });

    it('should set value in a list', () => {
        expect(myDynamicArray.updateValue(0, 100)).toBe(100);
        myDynamicArray.updateValue(0, 90);
        expect(myDynamicArray.getValue(0)).toBe(90);
        expect(() => myDynamicArray.updateValue(100)).toThrow(/larger/);
        expect(() => myDynamicArray.updateValue(-999)).toThrow(/negative/);
    });

    
})