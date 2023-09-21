import PriorityQueue from "../priority-queue";

describe("PriorityQueue", () => {
  let pq = new PriorityQueue();

  beforeEach(() => {
    pq = new PriorityQueue();
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

  test("ensure remove functionality", () => {
    const removedValue = pq.remove();
    expect(removedValue).toBe(null);
    pq.add({ jos: "dkd" }, 8);
    pq.add(90, 5);
    pq.add(93, 3).add(38, 1).add({ what: "me" }, 0).add(34, 2);
    expect(pq.remove()).toEqual({ what: "me" });
    expect(pq.toArray()).toEqual([38, 93, 34, { jos: "dkd" }, 90]);
    expect(pq.remove()).toBe(38);
  });
});
