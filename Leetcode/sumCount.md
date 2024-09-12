## Given a sorted array find the no of pair which have a Sum = k.

Brute Force approach
```javascript
let arr=[1,4,4,5,5,5,6,6,11];
let k=11;

//find number of pairs whose sum is 11
//6

let count = 0;

for (let i = 0; i<arr.length; i++) {
  for (let j = i+1; j<arr.length; j++) {

  if(arr[i]+arr[j]==k){
    count++;

  }
}
}
console.log(count);

```
