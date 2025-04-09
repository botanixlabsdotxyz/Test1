const dotenv = require('dotenv')
const Blockchain = require('./Blockchain.js')

dotenv.config({ path: './config.env' });

const arrayToMine = [];
for (let i = 1; i <= 10; i++) {
	const name = process.env[`BLOCK_NAME_${i}`];
	const value = parseInt(process.env[`BLOCK_VALUE_${i}`], 10);
	if (name && value) {
		arrayToMine.push({ name, value });
	}
}

const thisBlockchain = new Blockchain()
const startTime = Date.now();

arrayToMine.map(each => {
  thisBlockchain.mine(each)
})

const endTime = Date.now();
console.log(`Mining time: ${endTime - startTime} ms`);
