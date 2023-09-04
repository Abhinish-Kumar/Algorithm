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




