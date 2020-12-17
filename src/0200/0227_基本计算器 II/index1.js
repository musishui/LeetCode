/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var  q = [], n = '', f = '+'
  for (var i = 0; i < s.length || n; i++) {
      if (s[i] === ' ') continue
      if (/\D/.test(s[i])) {
          switch (f) {
              case '+':
                  q.push(+n) 
              break;
              case '-':
                  q.push(-n) 
              break;  
              case '*':
                  q.push(q.pop() * n) 
              break;
              case '/':
                  q.push(q.pop() / n | 0) 
          }
          f = s[i], n = ''
      } else n += s[i]
  }
  return q.reduce((p, v) => p + (v | 0), 0)
};
