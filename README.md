# my-learning-of-datastructures

### Data Structure
This is about organizing data, so that, we can access and modify or query it later more efficiently and easily. or we can say, it means collection of data elements and relationship among them and operation or function that we can perform on them.

### Why Data Structures?
- Clean and understandable code
- fast and efficient algorithm can be obtainable with good data structures.
- organize and manage data

### Abstract Data Structure or Abstract Data Type 
Abstract Data Type means, it defines the interface the data strcture should adhere to without any concrete implemenation details(can be said like, how it should be implemented or in any programming lang);

Ex: Take our car engine, how it running we don't know, we just start the car it is working. In the same way, interface telling us, how data should be structured and what operation we can perform on those data and how it should behave, like, different engines, can work with different modes, one can work with diesel and other work with current and other work with gas, In the same way, implementing those interface can be known as data structures. The implemenation details can be vary, but final output will be adhered to the interface.

### Types of Abstarct Data Type

| Abstract Data Type(ADT) | Implementation (DS) |
| --- | --- |
| List | Dynamic array, linked list |
| Queue | Linked list based queue, Array based queue, stack based Queue |
| Map | Tree Map, Hash Map/ Hash Table |


### Measure Data Structure Performance
Basically, we will ask two questions, when comes to measure performance.
+ How much time, My algorithm takes to finish
+ How much space needed for my computation

we have few different way to say/indicate our algorithm performance under different circumstances.

+ Big Theta -> average time case scenario (usually combining worst case scenario and best case scenario)
+ Big Umega -> lower bound complexity scenario (best case)
+ Big O notation -> upper bound complexity of the worst case, To quanity performance as input size becomes so large.

ex: We are sorting un-order list of number and finding max number from that, and our max number being found in the beginning or middle is best case scenario, usually Big O notation, don't care about that kind of situation, it care about, what happens, if max number is at the end of the list. how much time will be taken if that's the case?  same concept applies for memory also, how much space this algorithm can take if input size is arbitaritly large.