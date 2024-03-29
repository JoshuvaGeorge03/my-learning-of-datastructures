import { LinkedListNode, LinkedList } from "../linked-list";

describe("LInked List Node", () => {
  it("should create a linked list node with a value of 1", () => {
    const node = new LinkedListNode(1);

    expect(node.data).toBe(1);
    expect(node.next).toBeNull();
  });

  it("should create a linked list node with object and next should be null", () => {
    const nodeObj = { name: "joshuva" };
    const node = new LinkedListNode(nodeObj);

    expect(node.data).toEqual(nodeObj);
    expect(node.next).toBeNull();
  });

  test("whether created linked list object connected together", () => {
    const nodeObj = new LinkedListNode(1);
    const secondNodeObj = new LinkedListNode(2, nodeObj);

    expect(nodeObj.data).toBe(1);
    expect(nodeObj.next).toBeNull();

    expect(secondNodeObj.data).toBe(2);
    expect(secondNodeObj.next).toEqual(nodeObj);
  });

  it("should convert node to string value", () => {
    const node = new LinkedListNode(1);
    expect(node.toString()).toBe("1");

    node.data = "cool jos";

    expect(node.toString()).toBe("cool jos");
  });

  it("should converta node to a string value based on stringifier function", () => {
    const node = new LinkedListNode("jos");

    const nodeWithObj = new LinkedListNode({ name: "cool jos" });

    const toStringCallback = (data) =>
      `${typeof data === "object" ? data.name : data} with string method`;

    expect(node.toString(toStringCallback)).toBe("jos with string method");

    expect(nodeWithObj.toString(toStringCallback)).toBe(
      "cool jos with string method"
    );
  });
});

describe("Going to test linked list data structure", () => {
  // beforeEach(() => {
  //     return new LinkedList();
  // });

  function getValueOnlyFromLinkedListNode(node) {
    return node.data;
  }

  it("should add to the end of the list correctly", () => {
    const list = new LinkedList();
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([]);
    list.append(9).append(90);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([9, 90]);
    list.append(2929).append(393);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      9, 90, 2929, 393,
    ]);
  });

  it("should add to the start of the list correctly", () => {
    const list = new LinkedList();
    list.prepend(9).prepend(90);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([90, 9]);
    expect(
      list.prepend(393).prepend(3).toArray(getValueOnlyFromLinkedListNode)
    ).toEqual([3, 393, 90, 9]);
  });

  it("should add to the list in a specified index correctly", () => {
    const list = new LinkedList();
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([]);
    expect(() =>
      list.insertAtIndex(2, 4).toArray(getValueOnlyFromLinkedListNode)
    ).toThrow(/index 2 to be added is larger than list length of 0/);
    expect(() =>
      list.insertAtIndex(1, 4).toArray(getValueOnlyFromLinkedListNode)
    ).toThrow(/index 1 to be added is larger than list length of 0/);
    expect(
      list.insertAtIndex(0, 4).toArray(getValueOnlyFromLinkedListNode)
    ).toEqual([4]);
    list.prepend(9).prepend(90).append(8).append(7).prepend(8);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      8, 90, 9, 4, 8, 7,
    ]);
    expect(
      list.insertAtIndex(3, 78).toArray(getValueOnlyFromLinkedListNode)
    ).toEqual([8, 90, 9, 78, 4, 8, 7]);
    expect(
      list.insertAtIndex(7, 68).toArray(getValueOnlyFromLinkedListNode)
    ).toEqual([8, 90, 9, 78, 4, 8, 7, 68]);
    expect(() => list.insertAtIndex(9, 90)).toThrow(
      /index 9 to be added is larger than list length of 8/
    );
    expect(() => list.insertAtIndex()).toThrow("pass valid type for index");
  });

  it("should find item from the list correctly", () => {
    const list = new LinkedList();
    expect(list.searchBasedOnIndex(0)).toBe(null);
    expect(list.searchBasedOnIndex(9)).toBe(null);
    expect(list.searchBasedOnValue(9)).toBe(null);
    expect(list.searchBasedOnValue(19)).toBe(null);
    expect(list.find((v) => v === 9)).toBe(null);
    list
      .prepend(9)
      .append(83)
      .insertAtIndex(1, 282)
      .append(39)
      .prepend(383)
      .insertAtIndex(4, 283)
      .append(38)
      .prepend(37);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      37, 383, 9, 282, 83, 283, 39, 38,
    ]);
    const returnedValue = {
      node: expect.any(Object),
      index: expect.any(Number),
      data: expect.anything(),
    };
    expect(list.searchBasedOnIndex(7).data).toBe(38);
    expect(list.searchBasedOnIndex(3).data).toBe(282);
    expect(list.searchBasedOnIndex(4)).toMatchObject(returnedValue);
    expect(list.searchBasedOnIndex(8)).toBe(null);
    expect(list.searchBasedOnValue(363)).toBe(null);
    expect(list.searchBasedOnValue(383).index).toBe(1);
    expect(list.searchBasedOnValue(38).index).toBe(7);
    expect(list.searchBasedOnValue(83)).toMatchObject(returnedValue);
    expect(list.find((index, node) => node.data === 83).index).toBe(4);
    expect(list.find((i, n) => i === 1).data).toBe(383);
    expect(list.find((i, n) => n.data === 39)).toMatchObject(returnedValue);
  });

  it("should delete nodes from linked list correctly", () => {
    const list = new LinkedList();
    const returnedObject = {
      data: expect.any(Number),
      next: expect.any(Object),
    };
    expect(list.deleteWithValue(9)).toBe(null);
    list
      .prepend(9)
      .append(83)
      .insertAtIndex(1, 282)
      .append(39)
      .prepend(383)
      .insertAtIndex(4, 283)
      .append(38)
      .prepend(37);
    expect(list.deleteWithValue(800)).toBe(null);
    expect(list.deleteWithValue(9)).toMatchObject(returnedObject);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      37, 383, 282, 83, 283, 39, 38,
    ]);
    expect(list.deleteWithValue(38)).toMatchObject(returnedObject);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      37, 383, 282, 83, 283, 39,
    ]);
    expect(list.deleteWithValue(37)).toMatchObject(returnedObject);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      383, 282, 83, 283, 39,
    ]);

    const newList = new LinkedList();
    expect(newList.deleteWithIndex(1)).toBe(null);
    newList
      .prepend(9)
      .append(83)
      .insertAtIndex(1, 282)
      .append(39)
      .prepend(383)
      .insertAtIndex(4, 283)
      .append(38)
      .prepend(37);
    expect(newList.deleteWithIndex(9)).toBe(null);
    expect(newList.deleteWithIndex(393)).toBe(null);
    expect(newList.deleteWithIndex(0)).toMatchObject(returnedObject);
    expect(newList.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      383, 9, 282, 83, 283, 39, 38,
    ]);
    expect(newList.deleteWithIndex(7)).toBe(null);
    expect(newList.deleteWithIndex(6)).toMatchObject(returnedObject);
    expect(newList.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      383, 9, 282, 83, 283, 39,
    ]);
    expect(newList.deleteWithIndex(2)).toMatchObject(returnedObject);
    expect(newList.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      383, 9, 83, 283, 39,
    ]);
  });

  test("whether taile and head direct deletion work correctly", () => {
    const list = new LinkedList();
    expect(list.deleteHead()).toBe(null);
    expect(list.deleteTail()).toBe(null);
    list.prepend(9);
    const returnedObject = {
      data: expect.any(Number),
      next: expect.any(Object),
    };
    expect(list.deleteTail()).toMatchObject(returnedObject);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([]);
    list.prepend(9).append(99);
    expect(list.deleteHead()).toMatchObject(returnedObject);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([99]);
    expect(list.deleteTail()).toMatchObject(returnedObject);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([]);
    list
      .prepend(9)
      .append(83)
      .insertAtIndex(1, 282)
      .append(39)
      .prepend(383)
      .insertAtIndex(4, 283)
      .append(38)
      .prepend(37);
    expect(list.deleteTail()).toMatchObject(returnedObject);
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      37, 383, 9, 282, 83, 283, 39,
    ]);
    list.deleteHead();
    expect(list.toArray(getValueOnlyFromLinkedListNode)).toEqual([
      383, 9, 282, 83, 283, 39,
    ]);
  });

  it("should converta array to linked list correctly", () => {
    const list = new LinkedList();
    const array = [1, 2, 3, 4, 5];
    expect(list.fromArray().toArray(getValueOnlyFromLinkedListNode)).toEqual(
      []
    );
    expect(list.fromArray([1]).toArray(getValueOnlyFromLinkedListNode)).toEqual(
      [1]
    );
    expect(
      list.fromArray(array).toArray(getValueOnlyFromLinkedListNode)
    ).toEqual([1, 1, 2, 3, 4, 5]);
  });
});
