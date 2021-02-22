var coinChange = function (coins, amount) {
  coins.sort((a, b) => b - a);
  let res = Infinity;
  helper(0, amount, 0);
  return res == Infinity ? -1 : res;

  function helper(index, amount, count) {
      if (amount == 0) return res = Math.min(res, count);
      if (index == coins.length) return;
      for (let i = amount / coins[index] | 0; i + count < res && i >= 0; i--) {
          // 这里用条件判断的原因是，贪心查找到的第一个结果一定是最优的，后面就不用再找了
          let num = helper(index + 1, amount - i * coins[index], count + i)
          if (num) return;
      }
  }
}

console.log(coinChange([1,7,10],12))