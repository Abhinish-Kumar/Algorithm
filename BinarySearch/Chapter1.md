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



# Find lowest bound in repeated array elements

```javascript
//return lower bound of frequency


function binarySearch(arr,x){
  let min=0;
  let max=arr.length-1;
while(min<=max){
  let mid=Math.floor((min+max)/2);
  if(arr[mid]<x) min=mid+1;
  else if(arr[mid]>x) max=max-1;
  else{
    if(arr[mid-1]===arr[mid]){
      max=mid+1;
    }else{
      return mid;
    }
  }
  
}
return "element not found"
}

console.log(binarySearch([1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5],3));
```









