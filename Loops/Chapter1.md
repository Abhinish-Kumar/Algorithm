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


```c

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
```c

for (int i=1; i<=4; i++) {
   printf("Hello Dodo\n");
}


//Output
//Hello Dodo
//Hello Dodo
//Hello Dodo
//Hello Dodo

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

for (int i = 1; i <= 5; i++) {
    printf("Hello Dodo\n");
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




























