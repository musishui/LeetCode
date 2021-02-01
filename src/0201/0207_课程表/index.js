/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let links = new Set();
  const deep = (n) => {
    if (links.has(n)) {
      return false;
    }
    links.add(n);
    let nexts = [];
    for (let len = prerequisites.length; len--; ) {
      if (prerequisites[len][0] === n) {
        nexts.push(prerequisites[len]);
        prerequisites.splice(len, 1);
      }
    }
    for (let i = 0; i < nexts.length; i++) {
      if (!deep(nexts[i][1])) {
        return false;
      }
    }
    links.delete(n);
    return true;
  };
  while (prerequisites.length) {
    if (!deep(prerequisites[0][0])) {
      return false;
    }
  }
  return true;
};

console.log(canFinish(2, [[1,0]]))
