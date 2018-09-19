/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

 import {UndirectedGraphNode} from '../../../helper'
/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  if(!graph) return null
  let cache = new Map()
  let newGraph = new UndirectedGraphNode(graph.label)
  cache.set(graph.label, newGraph)
  let arr = [graph]
  for (let i = 0; i < arr.length; i++){
    let item = arr[i]
    let target = cache.get(item.label)
    item.neighbors.forEach(n => {
      let g = cache.get(n.label)
      if (!g) {
        g = new UndirectedGraphNode(n.label)
        cache.set(g.label, g)
        arr.push(n)
      }
      target.neighbors.push(g)
    })
  }
  return newGraph
};

module.exports = cloneGraph