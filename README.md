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






