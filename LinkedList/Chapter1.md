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



## Does linked list overcomes the limilations of arrays?

1. First advantage is that nodes occupy the random address. but array occupy the continuous address. 
2. Drawback is that it does not store the address of integer , it store the address of node, which takes two values insted of one , first one is int and second one is the memory address of next node of type Node. Thats why linkedlist node occupy more memory then array.
3. Another disadvantages of the linked list is that , unlike array that takes O(i) to get a element from array with index, linked list has no index, that why for getting the value or for traversal we have to traverse the whole linked list until we found the correct node.
4. Traversal is same for both array and linked list , but insertion of a new node , takes more time in array to shift the other elements. But in linked list we just have to create a new node , and traverse the linked list until we find the correct position to inset out new created node then we just have to change the link.
5. All the mechanish of the linked list is based on the chnaging the link and creating the link. think it as a long chain of bangles.


## Types of Linked List

1. Singly :- Node contain two values , data and next nodes ref.
2. Doubly :- Node is big , that store the address of next and previous node. (limiation of singly linked list is that it can not move in reverse order)
3. Circular :- A linked list without tail , because the end is connected to the starting point.


# Singly linked list.

## 1. Display a linked list

If we have only head given then , print the linked list till tail. 

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

console.log(a.data)   //A
console.log(a.next.data) //B
console.log(a.next.next.data)  //C

```

with loop

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

let temp=a;
while(temp){
console.log(temp.data);
temp=temp.next;
}

```
We are taking here a new temporary pointer that is pointing to the first element of linked list , then we pass the temp variable the address of a next node , because we know that next contain the address of next node. and temp is now b.












