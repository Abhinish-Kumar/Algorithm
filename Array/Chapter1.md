# Array in one go


## Why array?
You have to store a marks of 50 students , or height of 100 students.

will you create 50 varibles or box in the memory with different name?

This is little inefficient way because you can not handle thatmuch of variable separately.


## What is an Array?
Array is a collection , `int a[50]` it means we have 50 book boxes which are empty. 
Array is a Data Structure.
Algorithm is a way to solve one questiion in different ways.

Data Structures are storage spaces. where we feed the data. different dsa allow us to organize out data in such a way so that we can easily perform our operations on them.

- All the array boxes which are created have some links between them.
- The first propery of array is that it is continuous in nature.


```javascript
let a; / it creates an array.

//creation
let age=[]; //create a space in ram.

//initialization
 age=[2,4,6,7,8]; //create a space in ram.
//age is a array name

```

Array will store the initialized value in the same order.]

- Second property of array is that every array element has a index value. that is the identity of that variable. think it as a roll number. When ever we create a array of size 5 then compiler will assign the roll number or index to every block of the array , and with that index we can call the value of that index. Every index is unique.
- Array name act as a class and index act as the roll number of the student in the class.
- Arr[0] arr class roll number 0. deal with this student.
- 3rd Array property is that array index always start from 0.


Note: if the size of the array is 4 then index will be from 0 to 4-1

Note: by using this index we can print the array or modify as well.

arr[0], arr[1] , arr[2]

```javascript

let arr=[5,3,5,3,11];
//access element
for(let i=0;i<arr.length;i++){
console.log(arr[i]);
}


//update array element
arr[0]=200;
```

## Taking input from user.


```javascript
let arr=[5,3,5];
//access element
for(let i=0;i<arr.length;i++){
 arr[i]=prompt("Enter value");
}
console.log(arr);

//['466', '555', '5345']

```


# Q 1.) Given an array of marks of students, if the mark of any student is less than 35 print its roll number. [roll number here refers to the index of the array.]

```javascript
let marks=[45,77,47,77,4,34,12];
for(let i=0;i<marks.length;i++){
if(marks[i]<35){
console.log(i);
}}

//4,5,6
```


# Memory allocation in Arrays.

- Continuous memory allocation.
- Every element occupy the memory , one after another , and if you know the address of first element of the arrya you can easily get the next element.
- By calculating the first address of the arrya you can get the address of 50th element. O(1)
- Note: address of first array element is the address of whole array.































