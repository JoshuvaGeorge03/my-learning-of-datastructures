import { Queue, QueueNode } from '../Queue';

test('enqueue operation of Queue', () => {
    const queue = new Queue();
    queue.enqueue(9);
    expect(queue.toString()).toBe('9');
    expect(queue.enqueue(20).toString()).toBe('9,20');
    expect(queue.dequeue().toString()).toBe('9');
});

test('dequeue operation of queue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull();
    expect(queue.enqueue(9).dequeue().toString()).toBe('9');
    expect(queue.head).toBeNull();
    queue.enqueue(10).enqueue(20).enqueue(22).dequeue()
    expect(queue.toString()).toBe('20,22');
    queue.dequeue();
    queue.dequeue();
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
    expect(queue.toString()).toBe('');
});


test('isQueueEmpty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(9);
    expect(queue.isEmpty()).toBeFalsy();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
});

test('peek operation on queue', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeNull();
    queue.enqueue(9);
    expect(queue.peek()).toBe(9);
    queue.dequeue();
    expect(queue.peek()).toBeNull();
});