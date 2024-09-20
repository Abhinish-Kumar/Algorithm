# What and Why?
loops --> repetition 

print hello world 1000 times

```c
printf("Hello Dodo\n");
printf("Hello Dodo\n");
```


## DRY (do not repeat your self)

Used to write less code 

```c
#include<stdio.h>

int main(){
printf("Hello Dodo\n");
printf("Hello Dodo\n");
printf("Hello Dodo\n");
printf("Hello Dodo\n");
printf("Hello Dodo\n");
return 0;
}
```

We can not copy past for writing same line 1000 times 
For this we have shortcut called loop


## Syntax of a For Loop in C

```c

for (initialization; condition; increment) {
    // body of the loop
}

```
for loop takes 3 parameter 


```javascript

for (int i=1; i<=5; i++) {
   printf("Hello Dodo\n");
}


//Output
//Hello Dodo
//Hello Dodo
//Hello Dodo
//Hello Dodo
//Hello Dodo

```
```javascript

for (let i = 1; i <= 4; i++) {
   console.log("Hello Dodo");
}

// Output:
// Hello Dodo
// Hello Dodo
// Hello Dodo
// Hello Dodo
// Hello Dodo


```

condition:- contain the value to print the same thing ,as many times you want 
If you want to print hello world 10000 times you can do so as well


{} :- this block is used to do the same thing multiple times , whatever the code you want to repeat just write in this block.


## Lets see how the for loop treating the parameters that we pass in this for loop. 

```c

for (initialization; condition; increment) {
    // body of the loop
}

```

Initialization:- stores the value of i in a memory location. 
For loop starts with initialization and store value what ever we write here. Then its next step is condition.

Condition:- then it checks the condition , like other condition (if else) , that its tru or not , with the initialized value(updated vlaue). 

Then it run the code block if condition is true. 

Updation / increment:- then it update the initialized value. 

and repeat the same thing again and again until the condition become false.


#### Condition check -- run block -- update initialized value


Iteration Details

```c

for (let i = 1; i <= 5; i++) {
   console.log("Hello Dodo");
}


```

1. Iteration 1: i = 1, prints "Hello Dodo"
2. Iteration 2: i = 2, prints "Hello Dodo"
3. Iteration 3: i = 3, prints "Hello Dodo"
4. Iteration 4: i = 4, prints "Hello Dodo"
5. Iteration 5: i = 5, prints "Hello Dodo"


Note:- initialization of value occurs only once


1 to 5 = 5 time


## Q Print hello world "n" times . Takes as input from user

```javascript

let n = prompt("Enter the number of times to print Hello World:");
n = parseInt(n);  // Convert input to an integer

for (let i = 1; i <= n; i++) {
    console.log("Hello World");
}

```

1. Step 1 :- Check condition
2. Step 2 :- Go inside loop
3. Step 3 :- Updation (eg: i=i+2)


Note :- 0 --- i<10 ==== 10 times run loop
Note :- 1 --- i<=10 ==== 10 times run loop


```javascript
for (let i = 1; i <= 10; i=i+3) {
    console.log("Hello World");
}


//Hello World
//Hello World
//Hello World
//Hello World

```


# Scope in loops

the scope refers to the context in which variables are accessible. There are two main types of scope:

1. Global Scope: Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the code.
2. Local Scope: Variables declared within a function or block are in the local scope and can only be accessed within that function or block.

```javascript
  for (let k = 0; k < 10; k++) {
        // Block Scope 
        const loopConst = "I'm a loop variable ";
        console.log(loopConst); // Accessible within the loop
    }
console.log(k) //undefine
```
```javascript
let k;
  for ( k = 0; k < 10; k++) {
        // Block Scope 
        const loopConst = "I'm a loop variable";
        console.log(loopConst); // Accessible within the loop
    }
console.log(k) //10
```


# Print numbers from 1 to 100

```javascript

  for (let k = 1; k <=100; k++) {
        console.log(k); // Accessible within the loop
    }

```


# Print all teh even numbers from 1 to 100

```javascript

  for (let k = 1; k <=100; k++) {
        if(k%2===0)
        console.log(k); 
 }

// 2 4 6
```
go from 1 to 100 , when our if condition satisfy print the number 

or 

```javascript

  for (let k = 2; k <=100; k=k+2) {
        console.log(k); 
 }

// 2 4 6 -- 100
```

Same code but more optimized because loop will run only 50 times , also without if statement.


# Print all the odd numbers from 1 to 100

```javascript
  for (let k = 1; k <=100; k=k+2) {
        console.log(k); 
 }

// 1 3 5 --- 99
```


# Print the table of 19

```javascript
  for (let k = 1; k <=10; k++) {
        console.log(k*19);
 }

```
If you can print table of 1 then just multiply with that number like 19.


```javascript
  for (let k = 19; k <=190; k=k+19) {
        console.log(k);
 }

```

Every time increse the number with 19 till end. There are so many ways to do the same thing in programming , but you should use the algorithm with less lines of code and algorithm that takes less time to give output. 


# Print the table of "n". Here "n" is a integer which user will input. 

```javascript
let n=prompt("Enter number");
let table=parseInt(n);
  for (let k = 1; k <=10; k++) {
        console.log(k*table);
 }

```

# Display this AP - 1,3,5,7,9... upto "n" terms.

AP:- Arithmetic progression.(sequence)
Here difference is 2 
These are odd numbers 
What will be the nth term.

== 2n-1 (nth term)

Note: - learn about arithmetic progression.

```javascript

//print n tern in this series
// 1,3,5,7,9.. n
let n=10;
for(let i=1;i<=2*n-1;i=i+2){
console.log(i);
}

//1 3 5 7 9 11 13 15 17 19

```
 
# Q) Display this AP - 4,7,10,13,16... upto 'n' terms

```javascript

//print n term in this series
// 4,7,10,13,16..
let n=10;
for(let i=1;i<=2*n-1;i=i+2){
console.log(i);
}

//1 3 5 7 9 11 13 15 17 19

```



























