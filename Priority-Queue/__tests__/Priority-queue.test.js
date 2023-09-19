import PriorityQueue from "../priority-queue";

describe("PriorityQueue", () => {

  test("empty", () => {});
  let pq = new PriorityQueue();
  beforeEach(() => {
    let pq = new PriorityQueue();
  });
  test("ensure add functionality", () => {
    console.log(pq.add(9, 5).toArray());
    console.log(pq.add(9, 0).toArray())
    console.log(pq.peek());
  });
});
