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

| Abstract Data Type(ADT) | Implementation (DS)                                           |
| ----------------------- | ------------------------------------------------------------- |
| List                    | Dynamic array, linked list                                    |
| Queue                   | Linked list based queue, Array based queue, stack based Queue |
| Map                     | Tree Map, Hash Map/ Hash Table                                |

### Measure Data Structure Performance (Computational Complexity Analysis)

Basically, we will ask two questions, when comes to measure performance.

- How much time, My algorithm takes to finish? infinite time
- How much space needed for my computation? all bytest of files on the internet.

To standardize the ways to talk about, how much space/time our algorithm needs to finish, theoratical analysts, invented the Big O notation.

we have few different way to say/indicate our algorithm performance under different circumstances.

- Big Theta -> average time case scenario (usually combining worst case scenario and best case scenario)
- Big Umega -> lower bound complexity scenario (best case)
- Big O notation -> upper bound complexity of the worst case, To quanity performance as input size becomes so large.

This all cases can be attributed for space too.

ex: We are sorting un-order list of number and finding max number from that, and our max number being found in the beginning or middle is best case scenario, usually Big O notation, don't care about that kind of situation, it care about, what happens, if max number is at the end of the list. how much time will be taken if that's the case? same concept applies for memory also, how much space this algorithm can take if input size is arbitaritly large.

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

actually, any mathematical expression combined with **n** can be valid Big(O) notation.

**f(n) of algorithm**
For ex: f(n) is function that describe the time taken to running the algorithm for the input size of n.
f(n) = 7n + 3n\*_2 + 2n_\*3 + 9;

For this function, O(n) will be
O(f(n)) = O(n\*\*3) // because, n cube is biggest factor contributing to the time. so, O(n) is calculated based on that.

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

1.  Max heap -> parent node have greatest value than all child nodes (if p is parent node of c, than c is less than or equal to p)
2.  Min heap -> parent node have lessest value than all child nodes. (if p is parent node of c, than c is greater than or equal to c)

Binary heap indicates if every node has exactly two child, binomial heap means nodes have variable number of childs

Note: all heaps must be trees, no cycle should be present.

There are multiple types of heap, which are

1.  Binary Heap, 2) Fibonacci heap 3) Binomial Heap 4) Pairing Heap 5) Leftist heap 6) Brodal Heap 7) Rank Pairing Heap 8)Strict Fibonacci Heap 9) 2-3 Heap.

**Binary Heap**
It is a Binary Tree which follows heap invariant, where every node in the tree has two children.

**Tree also some kind of graph with constraints**

Import part of the implementation in binary tree is complete binary tree property, which indicates the tree in which every level is completely filled as far left as possible. why this is important is? it gives us the insertion point, no matter how the tree looks like, we always start inserting values from the inserting point and check whether heap property followed and do insertion.

insertion point is always bottom row of heap and left most part if it is empty, otherwise new row is formed.

How to represent these heap, we can visually, see them as tree like structure, but for computer to understand, how we can represent these heap internally?
Heap tree visual represenation vs heap tree internal code representation.

```

            9                    heap tree  ->  index tree                  0

        8       7                                                       1       2

    5       6                                                       3       4

```

index tree 0 1 2 3 4

heap value 9 8 7 5 6

we are using array to represent binary heaps, and due to this, we can always say insertion point is last item of the array and root node is initial index of the array. and we can also use object and pointers, but array is simple and so fast.

let i be the parent node of the index.
and left child index can be calculated using = 2i + 1 and right child index can be calculated using 2i + 2. (zero based)

How adding to the binary heap works?
when adding, we will always add the value in the inserion point and check for whether the heap invariant satisfied, if so, leave as that is, if not, we will do a bubbling-up/shifting-up/swimming to traverse to the top of the heap untill heap invariant satisfied.

how removing or polling of binary heap work?
In generally, with the heap, we always want to remove the root node(one with the highest priority).

when we remove the root, we call it polling, and for removing the root, we don't have to search it index, because, we alreay know, it is at index 0, in our array representation.
and when we do polling or removing, we will find the index of the element to remove, and swap it with last indexed element, and removed the last index element and checked whether the heap invariant is still satisfied, if not satisfied, we have to do bubbling down/shifting down/sinking untill heap invariant is satisfied. now compare parent node with the child node, and select the smallest value node and replace it with the parent node and continue it and if two child nodes are of same value, then always choos the left child node and swap it untill heap invariant is satisfied.

if we need to do removing of node with particular value, then we can initially find a index of element via linear search and then do the above process.

we can also improve time complexity of the removing(due to linear search to find element index), by incorporating hash table, which is providing constant time for lookup and updating mapping of a keys(value of heap node) and values(index of the values preseent in heap, we can use set or tree set to support multiple values of the index)

operations ->

1. find-max or find-min or peek -> find maximum or minimum item of the heap based on it's implemenations
2. delete max or delete min or poll -> delete root node of the heap(max or min)
3. insert -> add new elements to the heap(push or add)
4. decrease or increase key -> updating the key within a max or min heap
5. meld -> creating a new heap with all the original elements by combining two existing heap to for and deleting the original heap.

**Binary search Tree Traversal**

Inorder Traversal -> travel to left node of root node then root node and then right node

Pre-order Traversal -> Travel to root node then left and right node

Post Order Traversal -> Travel to left node then right node and then to root node

### Priority Queue

-> Priority queue is a abstract data type(which means, it can done using any data structure and it only defines the interface, not actual implemenation)

-> it is kinda like normal queue, but each element in the queue has certain priority. and priority of the elements in the queue, determine the order in whihc elements are removed from the queue.

-> One thing to keep remember is, priority queues only support data that are comparable, means the inserted data should be ordered in least to greatest or in greatest to least way. Why? because, then only, we can assign relative priority to this.

-> it contains, same set of operation as queue, but it polls high priority elements from the queue and add to the queue based on priority.

-> how priority queue know, which element to remove, does it reset all element each time polling. nope, it uses heap Data strucuture to do this. we need to use Data structure to do this.

Converting Min PQ to Max PQ and vice versa
To turn Min PQ to Max PQ, why we do that? because, most times, we will have min PQ or max PQ, so, we should find a way to convert it into other PQ.

To do that, we can abuse the fact, every elements in priority queue is comparable data, so they must implement a some comparable interface, which we can simply negate to attain alternate version of PQ by doing this when adding and polling.

As we already said, priroity queue is Abstract Data Type(ADT), which only defines behaviour of DS, so it can be implemented in any DS(Data Structure), but we are using heap to implement it. because, it obtains us best time complexity. but we can implement the same with unordered list also, but in that case, time complexity becomes harder.

so only sometimes, prirority queues are often called, heaps. but that's not technically correct.

using a hash table or any optimization requires time/space tradeoff, means it will require linear space and additional overhead to pull this off.

### Hash Table

Hash Table is provides mapping to keys to values using hash function. It is abstract associative array data type implementation.

Hash Table keys should be unique, but not values.

Hash table keys should be hashable, it can support any type of data that can be hashable.

Hash function basically means converting keys to a whole number and reduce it to a given range.

Properties of Hash Function

- Hash function should satisfy this, H(x) == H(y), then they might be equal, it indicates collision cases, we need to check further to know, whether it is really equal, but if Hash function say H(x) != H(y) then they are not at all equal.

ex) file comparison, rather than comparing two big files in byte - byte identical manner, we can compare hashes of those files to determine, is it not equal?

- Hash function should be deterministic. kind of like pure function
  ex) H(x) produces Y, then it should always produce y for key x.

- Hash function should be uniform, so, hash function can reduce number of collision. A hash collision occurs, when hash function produces same value for two or more keys. so, we can utilize every table index.

In hash table, we can do constant time insertion, lookup, deletion. but this attribute only achieved, if we have a uniform hash function. because, using hash functon, we indexing a value into Data structure.

But, even Sometimes, collision occurs, How to handle it?

we can use hash collision techniques like, separate chaining, open addressing.

Separate Chaining: It deals with collision by maintaining separate DS, to hold all the values which hashed to a particular value.

Open Addressing: Basically, everything will be within same DS, but how it deals with it is, basically, probing and finding the great offset to put this value.

**Separate Chaining**
As stated, one of many has collision(two keys has to same value) resolution technique.

How it handles it is, maintaining a separate DS, to hold all different values which hashed to same value by hash function.

we can use any DS to handle this different value storage, but most common DS is linked list. and we can use binary tree, self balancing tree, but this DS are memory intensive and complext to implement.

1. we are managing hash collision, but what about the case, where our HashTable(HT) is so full, and have long list of separate chains, in this scenario, how to maintain, constant time lookup O(1).

Once the HT becomes so full, we need to create HT with a large capacity, and rehash every value from old HT and disperse threm throught the new HT.

P.S: Always keep in mind tradeoff for caching, if caching helps with reducing computation time with minimal complexity, then go for cache.

**Open Addressing**
Another one technique to solve the hash collision.

When using a open addressing to resolved the hash collision, we don't use auxillary data structure like linked list used in separate chaining, rather than that, we store every key value pairs in same table

This means, we have to greatly take care of hash table size regarding number of elements present in hash table. Load factor of hash table becomes so important.

```
    Load_Factor = no. of elements / total size of table

    because, once the table becomes so full, it is very hard to find the slot for element to insert
```

According to experiments, once the load factor of table crossed certain threshold, then we need to increase the table size exponentially (ideally double the current size), otherwise constant time behaviour won't be there, it will be a lot worse.
and For open addressing, this is more important than separate chaining, because, when load factor crossed certain threshold, they hash table perf is so worse.

Main idea of Open Addressing
Usually, when key is given, we hash it to obtain the index the key/value pair can go, but if that index is already belong to another one key, then we try to find different index in the hash table by doing offsetting from the index obtained by hash function, this offset is subject to probing sequence(P(x)). we keep doing this probing untill different slot is found.

Open Addressing Techniques

1. Linear Probing -> It uses linear function to find the index to insert the key/value pairs

2. Quadratic Probing -> It uses quadratic function to do this

3. Double Hashing -> basically, have secondary hash function to find the index for key/value pairs

4. Pseudo random generator -> It basically uses the random number generator algorithm, but that is seeded with the returned value of our hash function, as our hash function is deterministic, this number generator algorithm will be too deterministic.and it will be keep incremented by 1 to find open slot.

General insertion algorithm for open addressing for the table size of n.

```
x = 1; keyHash = H(k); index = keyHash;

while (table[index] !== null) {
    index = keyHash + (P(k,x) % n)
    x = x + 1
}

insert (k, v) at the table[index]

```

where H(k) is the hash function, P(k,x) -> probing sequence function.

Open addressing resolution techniques probing sequences cause cycles

probing sequences can cause infinite loop, if they produce shorter cycles than N(table size);

which means, the cycle of index/buckets they produce, are already filled with key value pairs in hash table, than they stuck in an inifinite loop.

How do we handle this looping probing scenarios?

we don't handle this issue, what we will do is, we will avoid this issue altogether, we will not basically put any probing sequence, we will only select probing sequence, that produce cycel of table length N.

Lineary Probing, Quadratic probing, double hashing all are subject to the issue of cycles, which is why we choose selective probing sequences, which produce cycles of length N.

Open addressing techniques more senstive to the hashing function and probing sequence used, but separate chainig related techniques don't need to worry about that.

1. **Linear Probing**

It is basically Probing method, which uses linear formula to probe.

P(x) = a(x) + b (a != 0) (b is constant)

But developing this linear formula, needs careful evaulation, because, not all probing function prodcue the cyle of N, we may end up with infinite loop.

How to produce linear formula, which produce the cycle of N? P(x) = a(x)

This happens, when a, N are relatively prime, two numbers are relatively prime, if they have Greatest common denominator of 1.

GCD(a, N) = 1

When this happens, then probing function always produce the cycle of N, then we can prodcue the empty bucket.

ex) Table size (N) = 9, Probing function P(x) = 6x, Load Factor (alpha) = 0.75, max threshold = 6;

But this Probing function, will result into infinite loop, because GCD of (9,6) is 3 not 1.

P(x) = 1x can always produce a cycle of N, so it's always a popular choice.

when we hit a max threshold value, we need to scale up the hash table, we usually, do it in exponential way, but whatever we do, we need to ensure, we do it in a way GCD of (a, N) = 1.

and then, we allocate new chunk of memory for new table, then we need to take content from old table to re-insert it again on the new table. and after re-insert key/value pari in the new table, throw away the old table.

2. **Quadratic Probing**

Like Lineary Probing, we are using quadratic probing to find offset value from keyhash.

Quadratic probing means, we have quadratic formular basically, a(x^2) + b(x) + c (a,b,c are constants)
and a !== 0 (otherwise, we will basically do linear probing)

but not all Quadratic probing function are viable, means, function not producing the cycle of order N. we may result into cycle.

There are lot of approaches to derive the quadratic probing function that produce the cycles of N, let's look at them

- keep table size Number a prime number > 3, and load threshold less than 1/2 and P(x) = x^2;

- P(x) = (x^2 + x) / 2 and keep table size the power of N.

ex) P(x) = (x^2 + x) / 2 and table size = 2^3 = 8 and max load factor = 0.7 and threshold before resize = 6;

If we hit a condition, where we need to re-arrange the tale size, before doing another insertion, always make sure, our table size remain as the pwer of two value.

when we are going to insert a key, we are going to check if the key is already present, then, we update the value of the key.

3. **Double Hashing**

Like other probing, when we hit collision, we use probing technique double hashing to find offset value for the keyhash and once we find the freeslot, we insert key/value pair.

DH or double hashing, which probes according to the, constant multiple of another hash function.

p(k,x) = x \* hash^2(k)

Hash function one and two should hash to the same key.

it can be told linear probing, except that constant is unknown until runtime.

Since, DH reduces to linear probing at runtime, it may end up with a shorter cycle to produce infinite loop.

To fix cycle issue, we need to have table size of prime number and we need to calculate theta

theta = H^2(k) mod N

keyhash = H1(k) + (0 _ theta ) modulo N -> if empty, use that keyhash otherwise,
keyhash = H1(k) + (1 _ theta ) modulo N

if theta value is 0, which result into infinite loop, so, when we have zero as a value, change it to 1.

when we hit a max threshold value, then do resize exponentially (2N), and find the next prime number above that value.

**How to find and remove key/value pair in Hashtable using open addressing to manage hash collision?**

When we search for specific key, we find hash value for a key, then go to that index and look whether the current key to search matches the key value that is present in the hashtable. if so, we find a match, return it's value, otherwise, we use a probing function to find offset of hash value and then repeat the same, untill we hitt a null node in a hash table, then we can conclude, that this key is not present inside of the hash table.

Removing is sam e as finding a key index in a hash table, then clears that node. This is naive removing, this can cause problems, when querying/finding a value in a table, we may hit a null node, even that value present in a hashtable.

ex) Assume k1,k2,k3 hash to same index 1, we inserts them via probing sequence hash collision. P(x) = x; then, they will be inserted in the order 1,2,3 and now, we have removed a key k2 from a hashtable in a naive removing way, so, we find a index of the key, then we set that index to null. now, we are going to query for k3, but as we are aware, we will hit a null node at index 2, so, we terminate the search and tell, this key not present. but, this key is present in a hash table as we know.

To fix this issue, we are not going to set null value, we are going to place a unique marker called a `tombstone` instead of a null to indicate that the key/value pair is deleted, and that bucket should be skipped during a search.

In our HT, we have lot of tombstones, how do we get rid of them?

The tombstone itself counted as filled slots, so they participate in load factor, and they will be removed, when we resize the HT with a new table. And also, they can be replaced when we inserta new key/value pair.

**Optimization when searching**
When we search for key, if we hit a tombstone, before finding a key and if key is eventually found, then we can replace key/value pair value from position it's currently present to the first tombstone position we hit when we searched for this key.

This is call lazy deletion, to optimize for querying when we do it next time.

### Trie

it is a tree data structure. it is also called prefix tree(because it can be searched with prefixes) or radix tree or digital tree.

It is kind of search tree data structure or ordered tree data structure, which is used for usecases like, associative array or dynamic set kind of cases..

Unlike a binary search tree, each node don't contains key of the node, but the position of the node determines the key of the node.

all descendant nodes have common prefix associated with it and root is assoicated with the empty string. and values are not assoicated with every node, values are only assoicated with leaf nodes.

if we want space optimizations, we can implement it using compact prefix tree.

each node in the tree contains, whether it is endofword(bool) and data(if it is end of word) and link to next children in the tree;

it can be used for autocomplete implementations.

### Tree 

It is a Abstract Data Type, which simulates a hierarchial data structure. and consists of root node and subtrees of children with parent nodes.

And DS implement this abstract data type also named tree.

Basically, it is defined as collection of nodes and start with root node. and each node consist of value and set of references to children nodes with the constraints no references should be duplicated and no reference should point upwards. 