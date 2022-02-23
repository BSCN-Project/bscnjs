import "mocha"

import { assert } from "chai"

import { rpcURL, repoData } from "./test"
import { Bscn } from "./Bscn"
import { Contract } from "./Contract"

describe("Bscn", () => {
  const bscn = new Bscn(rpcURL, repoData)

  it("can instantiate a contract", () => {
    const contract = bscn.contract("test/contracts/Methods.sol")
    assert.instanceOf(contract, Contract)
  })

  it("throws an error if contract is not known", () => {
    // assertThrow
    assert.throw(() => {
      bscn.contract("test/contracts/Unknown.sol")
    })
  })
})
