/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  let p1 = { x: Math.min(A, C), y: Math.min(B, D) }
  let p2 = { x: Math.max(A, C), y: Math.max(B, D) }
  let p3 = { x: Math.min(E, G), y: Math.min(F, H) }
  let p4 = { x: Math.max(E, G), y: Math.max(F, H) }
  let sum = (p2.x - p1.x) * (p2.y - p1.y) + (p4.x - p3.x) * (p4.y - p3.y)
  if (p1.x >= p4.x || p1.y >= p4.y || p2.x <= p3.x || p2.y <= p3.y) {
    return sum
  } else {
    let x = Math.min(p2.x, p4.x) - Math.max(p1.x, p3.x)
    let y = Math.min(p2.y, p4.y) - Math.max(p1.y, p3.y)
    return sum - x * y
  }
};

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2))