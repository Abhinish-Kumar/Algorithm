# BInary Search

```javascript
function binarySearch(arr,x){
  let min=0;
  let max=arr.length-1;
while(min<=max){
  let mid=Math.floor((min+max)/2);
  if(arr[mid]===x) return "element found at index " + mid;
  else if(arr[mid]<x) min=mid+1;
  else max=max-1;
}
return "element not found"
}

console.log(binarySearch([1,2,3,4,5],4));
```
