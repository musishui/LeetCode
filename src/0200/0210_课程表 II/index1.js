/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let ins = new Array(numCourses).fill(0)
  let map = new Map()
  prerequisites.forEach(([m, n]) => {
    ins[m] += 1
    if (map.has(n)) {
      map.get(n).push(m)
    } else {
      map.set(n, [m])
    }
  })
  let strack = []
  for(let i=0;i<ins.length;i++){
    if(ins[i]===0){
      strack.push(i)
    }
  }
  for (let i = 0; i < strack.length; i++) {
    if (map.has(strack[i])) {
      map.get(strack[i]).forEach(m => {
        ins[m] -= 1
        if (ins[m] === 0) {
          strack.push(m)
        }
      })
    }
  }
  return strack.length === numCourses ? strack : []
};