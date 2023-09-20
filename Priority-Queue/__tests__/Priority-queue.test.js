import PriorityQueue from "../priority-queue";

describe("PriorityQueue", () => {
  test("empty", () => {});
  let pq = new PriorityQueue();
  beforeEach(() => {
    let pq = new PriorityQueue();
  });
  test("ensure add functionality", () => {
    pq.add({ jos: "dkd" }, 8);
    expect(pq.toArray()).toEqual([{ jos: "dkd" }]);
    expect(pq.peek()).toEqual({ jos: "dkd" });
    pq.add(90, 5);
    expect(pq.peek()).toBe(90);
    expect(pq.toArray()).toEqual([90, { jos: "dkd" }]);
    pq.add(93, 3).add(38, 1).add({ what: "me" }, 0).add(34, 2);
    expect(pq.toArray()).toEqual([
      { what: "me" },
      38,
      34,
      { jos: "dkd" },
      93,
      90,
    ]);
  });
});
