import { DynamicArray } from "../DynamicArray";

describe("checking the functionality of dynamic array", () => {
  let initialSize = 10;
  let myDynamicArray = null;

  beforeEach(() => {
    myDynamicArray = new DynamicArray(initialSize);
  });

  afterEach(() => {
    myDynamicArray = null;
  });

  it("should be get value from array", () => {
    expect(myDynamicArray.getValue(0)).toBeNull();
    expect(() => myDynamicArray.getValue(100)).toThrow(/larger/);
    expect(() => myDynamicArray.getValue(-1)).toThrow(/negative/);
    expect(myDynamicArray.getValue(myDynamicArray.getSize() - 1)).toBeNull();
  });

  it("should set value in a list", () => {
    expect(myDynamicArray.updateValue(0, 100)).toBe(100);
    myDynamicArray.updateValue(0, 90);
    expect(myDynamicArray.getValue(0)).toBe(90);
    expect(() => myDynamicArray.updateValue(100)).toThrow(/larger/);
    expect(() => myDynamicArray.updateValue(-999)).toThrow(/negative/);
  });

  it("should add value to end of the list", () => {
    myDynamicArray.add(1);
    myDynamicArray.add(12);
    myDynamicArray.add(13);
    myDynamicArray.add(15);
    myDynamicArray.add(16);
    myDynamicArray.add(17);
    myDynamicArray.add(18);
    myDynamicArray.add(18);
    expect(myDynamicArray.getValue(0)).toBe(1);
    expect(myDynamicArray.getValue(6)).toBe(18);
  });

  it('should grow to fit the new addition of value', () => {
    let myArray = new DynamicArray(2);
    myArray.add(89);
    myArray.add(90);
    expect(myArray.getSize()).toBe(2);
    expect(myArray.getValue(1)).toBe(90);
    myArray.add(92);
    expect(myArray.getValue(2)).toBe(92);
    expect(myArray.getSize()).toBe(4);
  });

  it('should remove the values from the array based on index', () => {
    let myArray = new DynamicArray(2);
    myArray.removeAt(0);
    expect(myArray.getSize()).toBe(1);
    myArray.removeAt(0);
    expect(myArray.getSize()).toBe(0);
    expect(() => myArray.removeAt(0)).toThrow(/larger/);
    myArray.add(1);
    expect(myArray.getValue(0)).toBe(1);
  });


});
