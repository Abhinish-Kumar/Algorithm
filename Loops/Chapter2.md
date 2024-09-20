# Break;

# Q) Write a program to check if a number is prime or not.

Prime number :- having two factor only 1 and n.

start from 2,3,5,7,11,13....


Composite number:- the numbers which are not prime.

```javascript
//divide and check the number till that number
//25
//2 to 24
//25%2===0  composite
//25%3=== 0 composite
//25%5=== 0 yes it is composite number.

//first check if it is composite , then break and print , if not then go till that number and print it is a prime number.

//divide this n till n-1 becaue it divisible by n

```

```javascript
let n=25;
for(let i=2;i<=n-1;i++){
if(n%i===0){
console.log("this is a composite number:");
}
//console.log("prime number");
//we can not write any thing for prime
}
``

```javascript

//we can check the composite number
//but it can print two times that it is  a composite number 
let n=25;
for(let i=2;i<=n-1;i++){
if(n%i!==0){
console.log("this is a prime number:");
}
}

``

Here we use break condition.
It is used to `terminate` the loop.



```javascript

let n=100;
for(let i=2;i<=n-1;i++){
if(n%i===0){
console.log("this is a composite number:");
break;
}

}
//print only once and break the loop

``

Now what can we do for prime number

we can use the additional variable

```javascript
let n=47;
let prime=true;
for(let i=2;i<=n-1;i++){
if(n%i===0){
prime=false;
break;
}
}
if(prime){
console.log("prime number");
}else{
console.log("not a prime number");
}

```


Note:- when you are thinking that this is a hard problem take a extra variable. as a flag



# Continue;

Skill the step.

# Q) WAP to print odd numbers from 1 to 100.

with modulas

```javascript
let l=100;
for(let i=0;i<l;i++){
if(i%2!==0){
console.log(i);
}
}
```

without modulas

```javascript

let l=100;
for(let i=0;i<l;i++){
if(i%2==0){
//if number is even skip this step
continue;
}
console.log(i);


}

//1 3 5 7 99

```


Break is more important then this continue.































