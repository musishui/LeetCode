/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0
  let nodes = [root]
  for(let i=0;i<nodes.length;i++){
    if(nodes[i].left){
      nodes.push(nodes[i].left)
    }
    if(nodes[i].right){
      nodes.push(nodes[i].right)
    }
  }
  return nodes.length
};