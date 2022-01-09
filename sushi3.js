function getMaximumEatenDishCount(N, D, K) {
  // Write your code here
  // N = amt of dishes
  // D = each dish
  // K = memory
  // prevent consecutive duplicates in D
  let res = [];
  let uniqueD = [...new Set(D)];
  if (K === D.length) {
    res = [...new Set(D)];
    return res.length
  }
  res = res.filter((item, pos, arr) =>{
    return pos === 0 || item !== arr[pos-1];
  });
  for (let i = 0; i < D.length; i++) {
    const slice = res.length > K ? res.slice(res.length - K, res.length) : res;
    if (!slice.includes(D[i])) {
      res.push(D[i]);
    }
    
    if (K === res.length && res.length === uniqueD.length) {
      break;
    }
  }
  return res.length;
}

console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1));
// console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2));
// console.log(getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 4));
