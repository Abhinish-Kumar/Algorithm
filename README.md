# Algorithm
Solve any problem in simple ways.

## Crack any interview 😉
For this course, you do not need to worry about any specific language. Pick any programming language and go through this course. I am using JavaScript here.

### So first of all, we all have a dream to get a job in Google, Microsoft or other FAANG companies.
All these companies hire a person who has excellent problem-solving skills. So continue with me and be a problem solver to get a job…

## What is a algorithm?
An algorithm is a fintie number of step to solve a problem.Steps to bake a cake.
Learn with visualization.You can create a defination of all the keypoints while visualizing the things in algorithm.

## 1 BIG O 
How well a problem is solved is claculated by BIG O notation.
#### What is Good Code?
1. Redable.
2. Scalable :-We will cover in BIG O notation.

```javascript
// Eg:1
const arr = ['apple'];
function findNemo(fruits) {
  for(let i=0;i<fruits.length;i++){
    if(fruits[i] === 'apple'){
      console.log("yes i found apple");
    }
  }
}
findNemo(arr);//yes i found apple
```
```javascript
//The above code is similar to

const arr = ['apple'];
function findNemo(fruits) {
  for(let i=0;0<fruits.length;i++){
    if('apple' === 'apple'){
      console.log("yes i found apple");
    }
  }
}
findNemo(arr);
```

1. Function first takes a array of fruits and loop through it.
2. If statement have a condition if condition full fil it returns the message written in console.
   
the above code is simple a instruction that we gave to the computer to find a fruit.
Big o notation is used to measure the performance of the code ,how much time it took to run a program.
What happens if the array goes to larger and larger?Think about it...


#### Let’s measure the performance of this function
JavaScript gave us a tool performance.now() to check the performance of a program that how much time it took to solve a block of code.

In your language, you may have a different option to do this. 

```javascript
const arr = ['apple'];
function findNemo(fruits) {
  let t0=performance.now();
  for(let i=0;i<fruits.length;i++){
    if(fruits[i] === 'apple'){
      console.log("yes i found apple");
    }
  }
  let t1=performance.now();
  console.log("Call to find apple took " + (t1 -t0) + "millisecond");
}
findNemo(arr);
//Run1 :-Call to find apple took 0.2999999523162842millisecond
//Run 2 :-Call to find apple took 0.10000014305114746millisecond
//Run 3 :-Call to find apple took 0.09999990463256836millisecond
```

### What happen if we have a larger array of elements?

```javascript
const arr = ['apple'];
const lArray=['banana','papaya','orange','apple','banana','papaya','orange','banana','papaya','orange','banana','papaya','orange'];
function findNemo(fruits) {
  let t0=performance.now();
  for(let i=0;i<fruits.length;i++){
    if(fruits[i] === 'apple'){
      console.log("yes i found apple");
    }
  }
  let t1=performance.now();
  console.log("Call to find apple took " + (t1 -t0) + "millisecond");
}
findNemo(arr);
//Run1 :-Call to find apple took 0.3000001907348633millisecond
//Run 2 :-Call to find apple took 0.09999990463256836millisecond
//Run 3 :-Call to find apple took 0.20000004768371582millisecond
```

There is no very large difference between the first function and second function with more array elements.Because our computer is so fast 
.The difference between one loop and 10 loop is not that big.

### Increase the size of array and check again.

```javascript
const large = new Array(100).fill('apple');
//Create a new array of size 100 and fill all index with the value 'apple'
function findNemo(fruits) {
  let t0=performance.now();
  for(let i=0;i<fruits.length;i++){
    if(fruits[i] === 'apple'){
      console.log("yes i found apple");
    }
  }
  let t1=performance.now();
  console.log("Call to find apple took " + (t1 -t0) + "millisecond");
}
findNemo(large);//yes i found apple * 100
```

### Output with 100 elements
1. 4.1000001430511475millisecond
2. 4.900000095367432millisecond
3. 5millisecond

### Output with 1000 elements

1. 35.700000047683716millisecond
2. 50.89999985694885millisecond
3. 52millisecond

### Output with 10000 elements

1. 419.09999990463257millisecond 
2. 387.5millisecond
3. 374.5millisecond

### Output with 100000 elements

1. 3.5 seconds

# Here we see that as our input grows out function findNemo() becomes slower and slower.

If you run the same code in your computer your time can be different frome me.
It also depends on how powerful cpu and the computer you have.
Which programming language you use and which program you try to run.


All these features handles the speed of your code.

If you all have same pc or computer but still have a difference in performance ? why..

The person who write a good code tooks less time to run a program?

So what is a good code?

#### BIG O 
BIG O notation the language we use to talking about how long an algorithm takes to run

By using Big O we find that which algorith took more and less time to run.

<img src="https://th.bing.com/th/id/OIP.ZRwR7EASHC93avMl-ns4aAHaEY?pid=ImgDet&rs=1" width="400px">

This is a chart of Big O notaiton to find that which code took more or less time.


### Big O and Scalability of code means that:-
when we grow biger and biger with our input how much does the algorithm or function slow down.

1. In chart the bottom line indicates the number of input elements.
2. The horizontal line indicates how many operations we have to do .
   All the above is called as algorithmic efficiency.

3. Green color in chart indicates that with the increase of input operation is not increases which is a good code.
4. And red color indicates that as out input increases Operations are rapidally increases That increases Bad code because it took max time to run.
5. Each operation takes time in a computer.

<hr><hr>

# Explore the chart of Big O notation

What is the big O for findig the apple function 

<img src="https://th.bing.com/th/id/R.cff1a34fb50717531e13ffcf9d089cb5?rik=EQdlVHDhS4JSiQ&riu=http%3a%2f%2fwww.101computing.net%2fwp%2fwp-content%2fuploads%2fBig-O-Notation-Linear-Algorithm.png&ehk=4G80cpT08jOZLg5Nu0QtpqFOfTv04XK4tfCViIoYlZI%3d&risl=&pid=ImgRaw&r=0" width="400px">

see the chart it indicates that as the number of input increases the number of operation increases.Findapple function checks the every element of the array by appling operation on every array element.
*** number of arr element = number of operation ***

thats why our chart is linear.

### Our findApple function have a BIG O notaion of 
## 1. O(n) --linear time

From where n come from?
n is used because of its a standard form.
n is a arbatory lettor we can put here any value.
1. O(10)
2. O(100)
3. O(1000)

Think it as a doctor treated his single patient in 30 minutes as the patient increases total  time to treat all the patient also increases.

# 2. O(1) --Constant Time 

#### What is the big a for the below code?
```javascript
function takeArr(boxes){
console.log(boxes[0]);
}
```
Here no matter how many times the boxes increase or haw may boxes we have ,we just have to grab the first element.

<img src="https://www.section.io/engineering-education/big-o-notation/o-1.png" width="400px">

We can see clearly in the graph that we have only one operation with so many inputs Thats why our program took constant time to deals with n number of input elements.

### What if we have a different function like the below?

What is the BIG O for this function?
How do we measure the BIG O for this function?
```javascript
const boxes=[0,1,2,3,4,5,6,7,8];
function takeArr(boxes){
console.log(boxes[0]); //O(1) number of operation
console.log(boxes[1]); //O(2)
}
takeArr(boxes);  //O(2)
```

Our funcion call do 2 operations every time no matter the number of inputs.

<img src="https://i.imgur.com/DpSLIzO.jpg" width="400px">

In the above graph the green line goes one step up when O(1) + O(1) = O(2).

#### we always write O(1) for O(4),O(10) or more which is made by the combination of singel operation or O(1) + O(1) + O(1)


For a flat line BIG O is always O(1) for any number of inputs.

### Try this 
```javascript
function funChalange(input){
  let a= 10; //O(1)
  a=50+3;   //O(1)

  for(let i=0;i<input.length;i++){  //O(n) its call depends on the length of the input
    anotherFunciton();  //O(n) runs every time
    let stranger = true;  //O(n)
    a++;  //O(n)
  }
  return a; //O(1)
}

funChalange();
```

To find the eficiency of the funciton lets calculater the value of BIG O.
#### 1+1+1+n+n+n+n=3+4n
So that BIG O notation for this funciton is O(3+4n)


### Try it also

```javscript
function anotherFunChalange(input){
  let a=5;  //O(1)
  let b=10; //O(1)
  let c=50;  //O(1)
  for(let i=0;i<input;i++){  //O(n)
    let x=i+1;  //O(n)
    let y=i+2;   //O(n)
    let z=i+3;   //O(n)
  }
  for(let j = 0;j<input;j++){  //O(n)
    let p=j*2;   //O(n)
    let q=j*2;    //O(n)
  }
  let whoAmI = "I don't know";  //O(1)
}

```

Calculate the BIG O.

BIG O(4+7n)

## Simplifying BIG O

#### Ans of 1st chalange is O(n)
#### Ans of 2nd chalange is O(n)


There are several rules that you have to follow for this.

Rule 1. Worst Case.
Rule 2. Remove Constants.
Rule 3. Different terms for inputs.
Rule 4. Drop Non Dominants.


# Rule 1 Worst Case


```javascript
const every=[1,2,3,4,5,6,7,8,9,10];

function find(arr) {
  for(let i=0;i<arr.length;i++){
    console.log("running");
    if(arr[i]==5){
      console.log('Found 5 !!!');
    }
  }
}

find(every);
```

```javascript
running
running
running
running
running
running
 Found 5 !!!
running
running
running
```

This is not a efficient code so Lets make it efficient.

```javascript
const every=[1,2,3,4,5,6,7,8,9,10];

function find(arr) {
  for(let i=0;i<arr.length;i++){
    console.log("running");
    if(arr[i]==5){
      console.log('Found 5 !!!');
break;
    }
  }
}

find(every);
```

```javascript
running
running
running
running
running
running
 Found 5 !!!
```

Here when we find our ans or occurance the loop will break;


1. Big O only cares about the worst case.
2. SO what is the worst case here.
3. The worst case in the above code is that if is at last.
4. And best case is if the 5 is at the very begining.

# Rule 2 Remove Constants
####  Q1 Orint first item,first half item and say 100 times hayy.
```javascript

function printFirstItemThenFirstHalfSayhi100TImes(items){
    console.log(items[0]); // O(1)
    var middleIndex=Math.floor(items.length/2);
    var index=0;
    while(index<middleIndex){
        console.log(items[index]); //  O(n/2)
        index++;
    }
    for(var i=0;i<100;i++){
        console.log('hi');  // O(100)
    }
}

a=[1,2,3,4,5,6,7,8,9,10]
printFirstItemThenFirstHalfSayhi100TImes((a));

```


What is the BIG O of this function.
Note :- We are ignoring variable assignments and small calculations for this example.
#### O(1+n/2+100)

By using the rule number 2 we drop the constants.
1. Adding 100 to the array element has no very effect on n number of array elements.(O(n/2+1)).
2. Also we remove n from here because no matter how long is our aray we have to do its half every time.(O(n+1)).
3. We also remove 1 from it beacuse it also has no effect on our n number of array elements.
4. Finally (O(n)) is the value of BIG O.
5. If (O(n+5000000000)) it does not matter how long or small is our constant we just have to remove it.

### If we have another situation having 2 for loops doing same thing in the function.
What is the BIG O for this.

```javascript
function compressBoxesTwice(boxes){
  boxes.forEach(function(boxes){
    console.log(boxes);
  })

  boxes.forEach(function(boxes){
    console.log(boxes);
  })
}

a=[1,2,3,4,5,6,7];
compressBoxesTwice(a);
```
### O(2n) we jsut add both?NO
We drop the constant here 
### O(n)
<img src="https://us-static.z-dn.net/files/d7d/e7976bdb7b655d9b3727614fb46556b8.png" width="400px"/>

in the above graph we have two steps with same array Whose BIG O is (O(2n)).
But We remove constant from here because It is still a linear graph.
Because as the number of array element s increases number of operation is always two.So it has no effect on number of operatins because all operations is coverd in the same time frame so we remove the 2 which is constant here.
Here we dont care that how is the line of graph we care only for how the line moves in this case it moves linearly so the BIG O is (n).

# Rule 2 Different terms for inputs.
What if we have two inputs.

```javascript
function compressBoxesTwice(boxes,boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes);
  })

  boxes2.forEach(function(boxes){
    console.log(boxes);
  })
}

a=[1,2,3,4,5,6,7];
b=[8,9,10,11,12,13];
compressBoxesTwice(a,b);
```

Here we have two inputs one is may be 100 and second is 1000000.

### n is the arbitorry letter.

The BIG O of this function is 
### O(n+m)

## O(n*n) or O(n²)

Q1 Log all the pairs of the array.(important)

```javascript
function logALlPairsOfArr(array){
  for(let i=0;i<array.length;i++){
     for(let j=0;j<array.length;j++){
    console.log(array[i],array[j]);
  }
  }
}

logALlPairsOfArr([1,2,3,4,5]);
```

What is the BIG O of this.

### O(n*n)  or O(n²)
O(n²) = Quadratic Time

<img src="https://th.bing.com/th/id/OIP.FkQzWqqIMlAHZ_xNrEPKeAHaGZ?pid=ImgDet&rs=1" width="400px" />

Wen we increate the number of elements it increases quadratically.

It means in first step we have 4 operations and in second step we have 8 operations.
We have the 3² elements so as we increase the number of elements our operations will increase rappidly and make a curve in graph.


# Rule no 4 = Drop Non Dominants.

```javascript
 function printAllNumbersThenAllPairSums(numbers) {
        console.log("These are the numbers");
        numbers.forEach((number) => {
          console.log(number);//O(n)
        });

        console.log("And these are their sums ");
        numbers.forEach((firstNumber) => {
          numbers.forEach((secondNumber) => {
            console.log(firstNumber + secondNumber);//O(O²)
          });
        });
      }

      printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
```
```Javascript
//Output
These are the numbers
 1
 2
 3
 4
 5
And these are their sums 
 2
 3
 4
 5
 6
 3
 4
 5
 6
 7
 4
 5
 6
 7
 8
 5
 6
 7
 8
 9
 6
 7
 8
 9
10
```

### What is the BIG O for the above code?

O(n + n²)

#### Use here 4th rule (Drop Non Dominents)
That means we only care about the most important term or the term wich dominant.This is because as the number of element is increases the n is less importance because the n² is bigger than that SO that we always keep the dominent term.

##### O(x²+3x+100+x/2)
By removing the non Dominating term we get the BIG O = O(x²)
1. 500*2=5500
2. 500/2=250
3. 500*3=1500

Thats why we let the x² as the Dominating term.

NOTE := The n² is very bad.(nested looping)

# Summary What does all these mean

<a href='https://www.bigocheatsheet.com/' >BIG O cheatsheet</a>

### Datastructure + Algorithms = Programs

Datastructure are simply store data and algorithm is the functions that always use ds to write our programs.

#### whats the write datastructure and whats the write algorithm to write the program.

# O(n!) ohno! dont use this

# What is a Good code?

1. Redable
2. Scalable.

Scalable 
1. -speed:-How fast your code run.How many time it took to run.How many operation does it perform.
2. Memory:- Computers have limited memory.(RAM)

   1. Redable and clean code (maintanable)
   2. Speed (Time Complexity)
   3. Memory (Space Complexity)

# Space Complexity
When programs executes there are two ways to remember things Heap and Stack.
#### Heap - store variables and where we assign values.

#### Stack - Where we keep track of our function calls.

## What Causes space Complexity.

1. Variable
2. Data structure
3. functions
4. Allocation

### Exercise Space complexity

```javascript
function foooo(n){
    for(let i=0;i<n.length;i++){
        console.log("boooooo!")
    }
}

foooo([1,2,3,4,5])
```

```javascript
boooooo!
boooooo!
boooooo!
boooooo!
boooooo!

```

##### What is the time complexity of this function?
When we are tawlking about space complexity we are tawlking about additional space.
We really dont care how big the input is.
We really dont have controll over the input we only have a controll on what happens inside the funciton.

#### ans BIG O(1) space complexity
because we are not adding any more memory in the above funciotn.

### What if we have ?

```javascript
function arrayOfHiNTimes(n){
    let hiArray=[];
    for(let i=0;i<n;i++){
       hiArray[i]="hi";
    }
    return hiArray;
};

console.log(arrayOfHiNTimes(6)) //O(n)
```

```javascript
[ 'hi', 'hi', 'hi', 'hi', 'hi', 'hi' ]
```

### What is the space Complexity of this function?
1. Variable
2. Data structure
3. functions
4. Allocation

these things take care of space complexity.
In our case we created variable,Datastructure(new array).

### O(n) because we fill the hi as the number of input.


# Exercise Twitter

```javascript
//Find the most recent tweet and oldest tweet
const array = ["hi","my","teddy"];
array[0];  //O(1)
array[array.length-1] //O(1)
```

### What is the big O for the below O(n pow 2) because we have to compare it with all its values.

```javascript
//Also with date
const array = [
    {
        tweet:'hi',
        date:2020
    },
    {
        tweet:'hello',
        date:2010
    },
    {
        tweet:'good',
        date:2000
    },
    ]
```

###### what is the big O of arr.length

What is the big O notation of this .length 

## Ans its not a funciton that have to run its simple a builtin property of object its big o is (O(1)) constant time.


# There is a so many ways to loop in javascript 
1. forEach:

```javascript
let arr=[1,2,3,4,5]

const find3=array=>{
    array.forEach(number=>{
        if(number==3){
            console.log("found 3")
        }
    })
}

find3(arr);

//Found 3
```

2. For in loop
```javascript
let arr=[1,2,3,4,5]

const find3=array=>{
   for(let fish of array){
        if(fish==3){
            console.log("found 3")
        }
    }
}

find3(arr);

//Found 3
```
These are the Three ways to write the same code.

# Summary of BIG O

1. Some time by thinking about scalability we forgot the readability of the code.
2. Linear time algorithm is better than the constant time algorithm.
3. At last you know How to alalyse the code of others and you are able to find the difference between good and bad code.

# Chapter 2
# How to solve coding problems.

An interwiew is the way to find that are you able to solve the problem or not.

Just like a real life of coding you not neet to remember the things you have to deeply analyze the code.

### What are Companies Lookingfor.

1. Analytical Skills
2. Coding Skills
3. Technical skills
4. Communication Skills.

Analytical skill is all about how you think for a problrm 

### Continue with these Data Structures And Algorithms.

1. Arrays
2. Stacks
3. Queues
4. Linked Lists
5. Trees
6. Tries
7. Graphs
8. Hash Tables

#### Algorithms

1. Shorting
2. Dynamic Programming
3. BFS + DFS (Searching)
4. Recursion


### You not need to learn all the words of a dictionarry just learn the things that makes you able to communicate with others.

<a href='https://www.youtube.com/watch?v=XKu_SEDAykw' >What this google interview </a>

# Q1 
Given 2 Arrays ,create a function that let's a user know (true/false) whether these two arrays contain any common items 

```javascript
\\for example
\\const array[1,2,3,4,5];
\\const array2[13,23,33,43,5];
\\should return true


\\const array[1,2,3,4,5];
\\const array2[13,23,33,43,53];
\\should return false

```

```javascript
function checkCommon(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            return true;
        }
    }
      
    }
  return false;
}


console.log(checkCommon([11,27,3],[1,2,3]))
\\true
\\BIG O(n pow 2) or O(n*n)
\\this is bad code according to BIG O notation
```

### Note before code in interview

#### Step By Step through a problem
1. When the interviewer says the question, write down the key points at the top (i.e. sorted
array). Make sure you have all the details. Show how organized you are.(2 parameters.return true or false)

2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, and space and memory,
etc.. What is the main goal?(ask question array of length is fix or n)

4.  Don't be annoying and ask too many questions.(first create the image of the question without dought because you have no time to make mistakes in interview)
5.  Start with the naive/brute force approach. First thing that comes into mind. It shows that
you’re able to think well and critically (you don't need to write this code, just speak about it)(in our question we have to create two for loops to compare single array value to whole array element of the second array)

6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...(there are two nested loops which is a bad thing because of BIG O)
7. Walk through your approach, comment things and see where you may be able to break things.
Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on
that. Sometimes this occurs with repeated work as well

8. Before you start coding, walk through your code and write down the steps you are going to
follow

```javascript
//Most usable pattern
array1==>obj{
a:true,
b:true,
c:true,
d:true}
array2[index]===obj.properties;
```
```javascript
//Write down the steps


function containCommonItem2(arr1,arr2){
//loop through first array and create object were properties === items in the array
//loop through second array and check if item in second array exists on created objects.
}
```
##### BIG O(a+b) this is good code you make the code better



























