 //find the frequency of each element in the array
      let arr = [1, 2, 3, 4, 1, 2, 4, 5, 3, 1, 2];
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
          obj[arr[i]]++;
        } else {
          obj[arr[i]] = 1;
        }
      }
      console.log(obj);
      //{1: 3, 2: 3, 3: 2, 4: 2, 5: 1}
