/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let paths = path.split('/')
  let result = []
  for (let i = 0; i < paths.length; i++) {
    if (!paths[i] || paths[i] === '.') continue
    if (paths[i] === '..') {
      result.pop()
    } else {
      result.push(paths[i])
    }
  }
  return '/' + result.join('/')
};
simplifyPath('/home//foo/')
module.exports = simplifyPath