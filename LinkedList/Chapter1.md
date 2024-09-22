# Linked List

## Arrays - Limitations

1. Fix size :- if we increase the array element it creates a new memory of double size and copy the previous elements.
2. Continuous memory :- suppose that we are creating a 1000 size of the array , but there is no continuos memory is available to create that array, array find the memory in storage which will be large and continuous. Also it has advantage , to calculate the memory address of any element with their base address or index.
 Get O(1) :- because memory is continuous
3. Insert in between :- to insert element at starting point we need to shift the other elements. 


## New linear data structure that does not occupy the memory in continuous manner. 
It finds the requied memory for a node size , and register it.That is not possible in the case of array.



## Introduction to linked list

we have to create our own data type `node` , every element of a linked list is node. 
Every node have two attributes 
1. Data
2. Memory address of next node.

Every thing created in memory has an address. 

- First node contain the address of second node , second node contain the address of 3rd node and last node does not contain the address of any node , it contain null,
- We can get all the nodes if we have the address of first node.
- The first member is called as *head*
- The last node is called as  the *tail*
- If we have head then we can say that we have complete linked list. 


```javascript
class Node{
constructor(data){
this.data=data; //node store data
this.next=null; //and address of next node
}
}

//create node with data
let a=new Node("A");
let b=new Node("B");
let c=new Node("C");

//link created nodes
a.next=b;
b.next=c;

console.log(a);

```
Output :- 

`Node {
  data: 'A',
  next: Node { data: 'B', next: Node { data: 'C', next: null } }
}`


















