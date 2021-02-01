/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let arr = Array.from({ length: numCourses }).map((v, i) => ({ value: i, next: [], depend: 0 }))
  for (let i = 0; i < prerequisites.length; i++) {
    let [m, n] = prerequisites[i]
    arr[n].next.push(m)
    arr[m].depend += 1
  }
  let stack = arr.filter(item => item.depend === 0)
  for (let i = 0; i < stack.length; i++) {
    stack[i].next.forEach(n => {
      let item = arr[n]
      item.depend -= 1
      if (item.depend === 0) {
        stack.push(item)
      }
    })
  }
  if (stack.length === numCourses) {
    return stack.map(item => item.value)
  } else {
    return []
  }
};

console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))