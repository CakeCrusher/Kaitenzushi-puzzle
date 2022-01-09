function getMaximumEatenDishCount(N, D, K) {
  // Write your code here
  // N = amt of dishes
  // D = each dish
  // K = memory
  let res = []
  let scanIndex = 0
  while (scanIndex < N) {
    const slice = res.length > K ? [...res.slice(res.length-K, res.length)] : res
    if (!slice.includes(D[scanIndex])) {
      console.log(`currentScan at ${scanIndex}`, slice)
      res.push(D[scanIndex])
    }
    scanIndex++
  }
  // for (let scanIndex = 0; scanIndex < N; scanIndex++) {

  // }

  return res.length;
}

console.log(getMaximumEatenDishCount(6,[1, 2, 3, 3, 2, 1],1))
console.log(getMaximumEatenDishCount(6,[1, 2, 3, 3, 2, 1],2))
console.log(getMaximumEatenDishCount(7,[1, 2, 1, 2, 1, 2, 1],2))
