function getMaximumEatenDishCount(N, D, K) {
  // Write your code here
  // N = amt of dishes
  // D = each dish
  // K = memory
  // prevent consecutive duplicates in D
  let res = [...new Set(D.slice(0, K))];
  let uniqueD = [...new Set(D)];

  for (let i = K; i < D.length; i++) {
    const slice = res.length > K ? res.slice(res.length - K, res.length) : res;
    if (!slice.includes(D[i])) {
      res.push(D[i]);
    }
    if (K >= uniqueD.length && slice.length >= uniqueD.length) {
      return res.length;
    }
  }
  

  return res.length;
}

console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1));
console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2));
console.log(getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 4));
