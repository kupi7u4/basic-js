const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    let pushValue = typeof(value) !== 'undefined' ? String(value) : ' '
    this.chain.push(pushValue) 
    return this
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = []
      throw new Error(`You can't remove incorrect link!`)
    } else {
      this.chain.splice(position - 1, 1)
    }
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let resArr = []
    for (let i = 0; i < this.chain.length; i++) {
      resArr.push('( ' + this.chain[i] + ' )' )
    }
    let resStr = resArr.join('~~')
    this.chain = []
    return resStr
  },
  chain: []
};

module.exports = {
  chainMaker
};