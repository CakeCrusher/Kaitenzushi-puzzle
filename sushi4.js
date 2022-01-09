function getMaximumEatenDishCount(N, D, K) {
  // Write your code here
  // N = amt of dishes
  // D = each dish
  // K = memory
  // prevent consecutive duplicates in D
  let res = [];
  let stack = []

  for (let i = 0; i < D.length; i++) {
    // const slice = res.length > K ? res.slice(res.length - K, res.length) : res;
    if (!stack.includes(D[i])) {
      res.push(D[i]);
      if (stack.length === K) {
        stack.shift()
        stack.push(D[i]);
      } else {
        stack.push(D[i]);
      }
    }
  }
  return res.length;
}

console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1));
console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2));
console.log(getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 2));
