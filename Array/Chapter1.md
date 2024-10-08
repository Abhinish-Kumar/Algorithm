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


# Q 3) Calculate the sum,product of all the elements in the given array.
1. Sum
2. Product
3. Max
4. Min


# Q 4) Given an array of integers, change the value of all odd indexed elements to its second multiple and increment all even indexed value by 10.

odd  2,4,6

```javascript
let arr=[1,2,3,4,5,6];
for(let i=0;i<arr.length;i++){
if(arr[i]%2===0){
arr[i]=arr[i]*2;
}else{
arr[i]=arr[i]+10;;
}
}
console.log(arr);
// [11, 4, 13, 8, 15, 12]
```

# Q 5) Count the number of elements in given array greater than a given number x.

```javascript
let arr=[1,2,3,4,5,6];
let x=4;
let count=0;
for(let i=0;i<arr.length;i++){
if(arr[i]>x){
count++;
}
}
console.log(count);

```

# Q 6) Find the difference between the sum of elements at even indices to the sum of elements at odd indices.


```javascript
let arr=[1,2,3,4,5,6,7];
let even=0;
let odd=0;
for(let i=0;i<arr.length;i++){
if(arr[i]%2===0){
//odd
even+=arr[i]
}else{
//even
odd+=arr[i]
}
}
console.log(even-odd);
//4
```

# Q 7) Find the total number of pairs in the Array whose sum is equal to the given value x.


```javascript
let arr=[1,2,3,4,5,6,7,8];
let target=12;
let count=0;
for(let i=0;i<arr.length;i++){
for(let j=i;j<arr.length;j++){
if(arr[i]+arr[j]===target && i!==j){
count++;
console.log(arr[i],arr[j])
}
}
}
console.log(count);

```

# Q 8) Find the second largest element in the given array.

```javascript
let arr=[1,2,3,4,5,6,7,8];
let firstMax=-1;
let secondMax=-1;
for(let i=0;i<arr.length;i++){
if(firstMax<arr[i]){
firstMax=arr[i]
}
}

for(let i=0;i<arr.length;i++){
if(secondMax<arr[i] && firstMax!==arr[i]){
secondMax=arr[i]
}
}



console.log(secondMax);

```
With one loop.

```javascript
let arr=[1,2,3,4,5,6,7,8,9];
let firstMax=-1;
let secondMax=-1;
for(let i=0;i<arr.length;i++){
if(firstMax<arr[i]){
secondMax=firstMax;
firstMax=arr[i];
}
}


console.log(secondMax);
//work only with increasing order

```

Problem with this array

```javascript
let arr=[5,4,3,2,1];
let firstMax=-1;
let secondMax=-1;
for(let i=0;i<arr.length;i++){
if(firstMax<arr[i]){
secondMax=firstMax;
firstMax=arr[i];
}
}


console.log(secondMax);
//second max is -1 because of only one if condition

```



```javascript
let arr=[5,4,3,2,1];
let firstMax=-1;
let secondMax=-1;
for(let i=0;i<arr.length;i++){
if(firstMax<arr[i]){
secondMax=firstMax;
firstMax=arr[i];
}else if(secondMax<arr[i]){  //max > arr[i]
//koi problem nahi hi ki ham smax ko array ki chhoti value de rahe hi
secondMax=arr[i];
}
}


console.log(secondMax); //4

```

problem if two greater vales are there then it will return ma as second max

```javascript
let arr=[5,5,4,4,3,2,1];
let firstMax=-1;
let secondMax=-1;
for(let i=0;i<arr.length;i++){
if(firstMax<arr[i]){
secondMax=firstMax;
firstMax=arr[i];
}else if(secondMax<arr[i]){  //max > arr[i]
//koi problem nahi hi ki ham smax ko array ki chhoti value de rahe hi
secondMax=arr[i];
}
}


console.log(secondMax); //5
```

solution

```javascript
let arr=[5,5,4,4,3,2,1];
let firstMax=-1;
let secondMax=-1;
for(let i=0;i<arr.length;i++){
if(firstMax<arr[i]){
secondMax=firstMax;
firstMax=arr[i];
}else if(secondMax<arr[i] && firstMax!=arr[i]){  //max > arr[i]
//koi problem nahi hi ki ham smax ko array ki chhoti value de rahe hi
secondMax=arr[i];
}
}


console.log(secondMax); //5
```

# Q 9) Write a program to copy the contents of one array into another in the reverse order.

You just have to copy and pase the elements index wise in reverse order.

```javasccript
let arr=[1,2,3,4,5];
let copirdArray = [];

for(let i=0;i<arr.length;i++){
copirdArray[arr.length-i-1]=arr[i]
}
console.log(copirdArray);
```

# Q 10) Write a program to reverse the array without using extra array.



```javasccript
let arr=[1,2,3,4,5];

for(let i=0;i<arr.length/2;i++){
[arr[arr.length-i-1],arr[i]]=[arr[i],arr[arr.length-i-1]]
}
console.log(arr);
```

# Q 11) If an array arr contains n elements , then check if the  given array is a palindrome or not.


Palindrom :- 12321 same from both the side

```javasccript
let arr=[1,2,3,2,1];

let palindrom =true ;
for(let i=0;i<arr.length/2;i++){
if(arr[arr.length-i-1]!=arr[i]){
palindrom=false;
break;
}
}
console.log(palindrom);
```

# Q 12) Rotate the given array "a" by k steps, where k is non-negative.

Note:- k can be greater than n as well where n is the size of array "a"


Note:- remove last element and add it to the first.


```javasccript
let arr=[1,2,3,4,5];
let k=2;
for(let i=0;i<k;i++){
let last=arr.pop();
arr.unshift(last)
}
console.log(arr); //[4, 5, 1, 2, 3]
```

if k is larger then array size `k=k%sizeofarray` because by traversing array at the size it reaches at the strting point so why to traverse.

```javascript

let arr=[1,2,3,4,5];
let k=2;
for(let i=0;i<k%arr.length;i++){
let last=arr.pop();
arr.unshift(last)
}
console.log(arr); //[4, 5, 1, 2, 3]

```

Do this without array methods.


# Q13) Given an array containing elements from 1 to 100 except one element in this range is missing. Find the missing element.

Find the missing element from array
- 99 elments are present initially

- 1st aproach will be the search every elemnt from 1 to 100 in array of 100 elements

### linear search (search every element in array)
```javascript 
//1. given a array and a number x, Find out if x lies in the array or not if yes tehn print the index.

let arr=[3,5,6,2,7,8];
let x=8;
for(let i=0;i<arr.length;i++){
if(arr[i]==8){
console.log("yes x is present in the array and its index is 
 "+i);
break; //if copy is there print two time
}
}


//2. print all the indexes of its copy also

let arr=[3,5,6,2,7,8,4,2,8,52,8];
let x=8;
for(let i=0;i<arr.length;i++){
if(arr[i]==8){
console.log("yes x is present in the array and its index is "+i);
//break; 
}
}

//output
//**yes x is present in the array and its index is 5**
//yes x is present in the array and its index is 8
//yes x is present in the array and its index is 10


// 3. Print the last occurance of it
let arr=[3,5,6,2,7,8,4,2,8,52,8];
let x=8;
for(let i=arr.length;i>0;i--){
if(arr[i]==8){
console.log("yes x is present in the array and its index is "+i);
break; 
}
}

//Output :- yes x is present in the array and its index is 10


//4. if not present then give message (use flag)
let arr=[3,5,6,2,7,8,4,2,8,52,8];
let x=8;
let flag=false;
let ind=-1;
for(let i=arr.length;i>0;i--){
if(arr[i]==x){
flag=true;
ind=i
break; 
}
}


if(flag){
console.log("yes x is present in the array index is "+ind);
}else{
console.log("not found ");
}

```

Our question

1st way to find the missing element in array (two loops to find missing element)

100*100=10000

2nd way (add sum of every element in array)

```javascript
//find the mussung number in the array
let arr=[1,2,3,4,5,6,8,9,10];
let sum=0;
for(let i=0;i<arr.length;i++){
  sum+=arr[i];
}

let sumOf10NaturalNo=0;

for(let i=1;i<=10;i++){
  sumOf10NaturalNo+=i
}

let missingNUmber=sumOf10NaturalNo-sum;

// console.log(sumOf10NaturalNo,sum)
console.log("missing number is "+ missingNUmber)//7

```

Time complexity :- loop 1 = O(n) loop 2 = O(n) ==> O(2n);
Space Complexity :- O(1)

```javascript
//find the mussung number in the array
let arr=[1,2,3,4,5,6,8,9,10];
let sum=0;
for(let i=0;i<arr.length;i++){
  sum+=arr[i];
}
let n=arr.length+1;
let sumOf10NaturalNo=(n*(n+1))/2;


let missingNUmber=sumOf10NaturalNo-sum;

// console.log(sumOf10NaturalNo,sum)
console.log("missing number is "+ missingNUmber)//7
```

Time Complexity :- O(n)
Space Complexity :- O(1)

# Q14) WAP to find the duplicate element from a given array of integers.

```javascript
let arr=[2,3,4,5,6,7,6,9];
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
      console.log("index is " + j)
      break;
    }
  }
}

//index is 6
```

# Q15) FInd the unique number in a given array where all the elements are being repeated twice with one value being unique.

unique element is coming once only

what if we take one element and search remaining array and found its duplicate then what we should do. break ?

break:- break two loops

```javascript
//reset pointer
let arr=[2,2,3,3,4,4,5,5,6,7,7];
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
      i++;
      j=i+1;
    }
  }
}
```

With flag

```javascript
let arr = [1, 3, 6,88, 1, 1, 2, 3,6];

for (let i = 0; i < arr.length; i++) {
  let flag = true;

  for (let j = i+1; j < arr.length; j++) {
    if ( arr[i] === arr[j]) {
      flag = false;
      break;
    }
  }

  if (flag) {
    console.log(arr[i]);
    break;
  }
}
```





































