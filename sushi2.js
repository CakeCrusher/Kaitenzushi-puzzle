function getMaximumEatenDishCount(N, D, K) {
  // Write your code here
  // N = amt of dishes
  // D = each dish
  // K = memory
  D = D.map((ele, i) => {
    return [ele, i]
  })
  let res = [...D.slice(0,1)]
  

  while (true) {
    let limitingSlice = res.slice(Math.max(0,res.length-K), res.length).map(arr => arr[0])
    let relevantArr = D.filter(arr => 
      !limitingSlice.includes(arr[0]) && arr[1] > res[res.length-1][1] 
    )
    if (!relevantArr.length) {
      break
    }
    res.push(relevantArr[0])
  }

  return res.length;
}

console.log(getMaximumEatenDishCount(6,[1, 2, 3, 3, 2, 1],1))
console.log(getMaximumEatenDishCount(6,[1, 2, 3, 3, 2, 1],2))
console.log(getMaximumEatenDishCount(7,[1, 2, 1, 2, 1, 2, 1],2))
