const CryptoJS = require('typo-crypto');

class Block {
  constructor (index, previousHash, timestamp, data, hash, nonce) {
    this.index = index
    this.previousHash = previousHash
    this.timestamp = timestamp
    this.data = data
    this.hash = hash
    this.nonce = nonce
  }

  static get genesis() {
    const index = 0
    const previousHash = '0'
    const timestamp = process.env['GENESIS_TIMESTAMP']
    const data = { name: process.env['GENESIS_NAME'], value: process.env['GENESIS_VALUE'] }
    const nonce = 0
    const hash = CryptoJS.SHA256(index + previousHash + timestamp + JSON.stringify(data) + nonce).toString()

    return new Block(index, previousHash, timestamp, data, hash, nonce)  
  }
}

module.exports = Block
