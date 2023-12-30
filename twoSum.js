function twoSum(nums, target) {
    let pairs = [];
      let count = 0;
      let wrk_nums = [...nums]
      while(nums.length > 0){
        firstPair = nums.shift();
        otherPairs = [...nums]
        for(i in otherPairs){
          total = firstPair + otherPairs[i]
          if(total===target && firstPair!=otherPairs[i]){
            pairs.push(wrk_nums.indexOf(firstPair),wrk_nums.indexOf(otherPairs[i]))
          }
          if(total===target && firstPair===otherPairs[i]){
            pairs.push(wrk_nums.indexOf(firstPair),count+1)
          }
        }
        count++
      }
      return pairs
  }


  console.log(twoSum([1, 2, 3], 4))
  console.log(twoSum([1234, 5678, 9012], 14690))
  console.log(twoSum([2, 2, 3], 4))
  console.log(twoSum([2, 3, 1], 3))