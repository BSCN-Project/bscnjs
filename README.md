The BSCN JavaScript library for Smart Contract development.

# Install

```
npm install bscnjs
```

This is a sample code snippet that transfer ERC20 tokens:

```js
import { BscnRPC } from "bscnjs"

const repoData = require("./solar.json")
const bscn = new Bscn("http://bscn:test@localhost:22002", repoData)

const myToken = bscn.contract(
  "zeppelin-solidity/contracts/token/CappedToken.sol",
)

async function transfer(fromAddr, toAddr, amount) {
  const tx = await myToken.send("transfer", [toAddr, amount], {
    senderAddress: fromAddr,
  })

  console.log("transfer tx:", tx.txid)
  console.log(tx)

  await tx.confirm(3)
  console.log("transfer confirmed")
}
```

The [full source code](https://github.com/BSCN-Project/bscnbook-mytoken-bscnjs-cli).

> This example uses async/await (supported natively by Node 8+).


Build and run tests:

```
npm build
npm run test
```
