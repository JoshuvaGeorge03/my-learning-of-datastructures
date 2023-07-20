# my-learning-of-datastructures

## Data Structure
This is about organizing data, so that, we can access and modify or query it later more efficiently and easily. or we can say, it means collection of data elements and relationship among them and operation or function that we can perform on them.

### Why Data Structures?
- Clean and understandable code
- fast and efficient algorithm can be obtainable with good data structures.
- organize and manage data

### Abstract Data Structure or Abstract Data Type 
Abstract Data Type means, it defines the interface the data strcture should adhere to without any concrete implemenation details(can be said like, it don't specify how it should be implemented or in any programming lang);

Ex: Take our car engine, how it running we don't know, we just start the car it is working. In the same way, interface telling us, how data should be structured and what operation we can perform on those data and how it should behave, like, different engines, can work with different modes, one can work with diesel and other work with current and other work with gas, In the same way, implementing those interface can be known as data structures. The implemenation details can be vary, but final output will be adhered to the interface.

### Types of Abstarct Data Type

| Abstract Data Type(ADT) | Implementation (DS) |
| --- | --- |
| List | Dynamic array, linked list |
| Queue | Linked list based queue, Array based queue, stack based Queue |
| Map | Tree Map, Hash Map/ Hash Table |


### Measure Data Structure Performance (Computational Complexity Analysis)
Basically, we will ask two questions, when comes to measure performance.
+ How much time, My algorithm takes to finish
+ How much space needed for my computation

we have few different way to say/indicate our algorithm performance under different circumstances.

+ Big Theta -> average time case scenario (usually combining worst case scenario and best case scenario)
+ Big Umega -> lower bound complexity scenario (best case)
+ Big O notation -> upper bound complexity of the worst case, To quanity performance as input size becomes so large.

ex: We are sorting un-order list of number and finding max number from that, and our max number being found in the beginning or middle is best case scenario, usually Big O notation, don't care about that kind of situation, it care about, what happens, if max number is at the end of the list. how much time will be taken if that's the case?  same concept applies for memory also, how much space this algorithm can take if input size is arbitaritly large. 

### Calculating Big(0)
So, when calculating big O notation, we will avoid constants and multiple factors.

n -> size of input we are going to execute with our algorithm... 

we will list below, common Big O notation of algorithm
constant -> O(1)
logarithimic -> o(log n)
linear -> O(n)
linearithmic -> o(n log n)
Quadric -> o(n2)
cubic -> o(n2)
exponential -> o(b power of n) where b > 1
Factorial -> O(n!)

**f(n) of algorithm**
For ex: f(n) is function that describe the time taken to running the algorithm for the input size of n.
f(n) = 7n + 3n**2 + 2n*\*3 + 9;

For this function, O(n) will be 
O(f(n)) = O(n**3) // because, n cube is biggest factor contributing to the time. so, O(n) is calculated based on that.

To find out Big(0) complexity of the algorithm, find f(n) of the algorithm and remove constants and multiple factors and only consider worst case to derive Big(0) notation.

## Common Data Structure

```
when implementing data structure, always look out for memory leaks and concurrent modifications realted problem.
```
### Static Array And Dynamic Arrays:

-> Fundamental Data structure, because using arrays and pointers, we can build up any data structure.

Static Array -> fixed length container consist of collection of elements, which are indexable, starts from 0 to n-1 both are inclusive, [0, n-i]

Indexable -> This means every slot/index of arrays referenced with a number starting from 0. contiguous memory addresses.

There is no other way to access elements in array then using a index. ex:) even in forEach, index based access is done internally.

access -> o(1) search(what if elements did not present), deletion(same like insertion, worst case scenarion, we have to copy and reshift everyting), insertion(because we have to reshift everything to the other memory address, copyting and shifting) -> o(1) appending -> o(1)

### Linked list && Doubly Linked list

-> sequential list of nodes, where each node contains data and pointer/reference to other data. and last node points to null, which is called sentinel node.

-> doubly linked list is kind of same like linked list, which is sequential list of nodes, where each node contains data and pointer/reference to previous/next node.


### Stack
-> It is a one ended linear data structure, which simulates a real world stack using two primary functions namely, push and pop.

-> also called LIFO (last in fast out);

-> In stack data structure, every operation done on the top of the stack, and we only have control over the top of the stack and not on anything else.

ex: finding brackets and braces matching in a syntax. and tower of hanoi games. depth first traversal.

### Queue
-> Queue is a linear data structure, which simulates a relad world queue using two function namely enqueue, dequeue.

-> enqueue also called offering, adding to the back of the queue.

-> dequeue also called polling, removing from front of the queue.

-> In this data structure, operation are performed on the both end of the stack.

-> This also called FIFO (First In First Out)

ex: web server serving web request can implement a queue to process req as it comes. breadth first traversal.


### Heap

Heap is specialized tree based data structure which satisfies the heap property.

-> Heap is tree based Data strucuture, which satisfies heap invariant (also called heap property), heap property indicates values of the parent node is always greater than or equal to value of all child nodes Or else value of parent node is lesser than or equal to all child nodes. so, due to this, we end up getting two heap.

 1) Max heap -> parent node have greatest value than all child nodes (if p is parent node of c, than c is less than or equal to p)
 2) Min heap -> parent node have lessest value than all child nodes. (if p is parent node of c, than c is greater than or equal to c)

 Binary heap indicates if every node has exactly two child, binomial heap means nodes have variable number of childs

 Note: all heaps must be trees, no cycle should be present.


### Priority Queue 
-> Priority queue is a abstract data type(which means, it can done using any data structure and it only defines the interface, not actual implemenation)

-> it is kinda like normal queue, but each element in the queue has certain priority. and priority of the elements in the queue, determine the order in whihc elements are removed from the queue.

-> One thing to keep remember is, priority queues only support data that are comparable, means the inserted data should be ordered in least to greatest or in greatest to least way. Why? because, then only, we can assign relative priority to this.

 -> it contains, same set of operation as queue, but it polls high priority elements from the queue and add to the queue based on priority.

 -> how priority queue know, which element to remove, does it reset all element each time polling. nope, it uses heap Data strucuture to do this.

Converting Min PQ to Max PQ and vice versa
 To turn Min PQ to Max PQ, why we do that? because, most times, we will have min PQ or max PQ, so, we should find a way to convert it into other PQ.

 To do that, we can abuse the fact, every elements in priority queue is comparable data, so they must implement a some comparable interface, which we can simply negate to attain alternate version of PQ by doing this when adding and polling.

 As we already said, priroity queue is Abstract Data Type(ADT), so it can be implemented in any DS(Data Structure), but we are using heap to implement it. because, it obtains us best time complexity. but we can implement the same with unordered list also, but in that case, time complexity becomes harder.

 so only sometimes, prirority queues are often called, heaps. but that's not technically correct.