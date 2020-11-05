/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let num = 0;
  const fn = (i, j) => {
    if (grid[i][j] === "0") {
      return false;
    }
    grid[i][j] = "0";
    if (i >= 1) {
      fn(i - 1, j);
    }
    if (i + 1 < grid.length) {
      fn(i + 1, j);
    }
    if (j >= 1) {
      fn(i, j - 1);
    }
    if (j + 1 < grid[i].length) {
      fn(i, j + 1);
    }
    return true;
  };
  for (let m = grid.length; m--; ) {
    for (let n = grid[m].length; n--; ) {
      if (fn(m, n)) {
        num++;
      }
    }
  }
  return num;
};
