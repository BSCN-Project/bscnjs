import { BscnRPC } from "./BscnRPC"
import { IContractsRepoData, ContractsRepo } from "./ContractsRepo"
import { Contract, IContractInfo } from "./Contract"

/**
 * The `Bscn` class is an instance of the `bscnjs` API.
 *
 * @param providerURL URL of the bscnd RPC service.
 * @param repoData Information about Solidity contracts.
 */
export class Bscn extends BscnRPC {
  private repo: ContractsRepo

  constructor(providerURL: string, repoData?: IContractsRepoData) {
    super(providerURL)
    this.repo = new ContractsRepo(this, {
      // massage the repoData by providing empty default properties
      contracts: {},
      libraries: {},
      related: {},
      ...repoData,
    })
  }

  /**
   * A factory method to instantiate a `Contract` instance using the ABI
   * definitions and address found in `repoData`. The Contract instance is
   * configured with an event log decoder that can decode all known event types
   * found in `repoData`.
   *
   * @param name The name of a deployed contract
   */
  public contract(name: string, info?: IContractInfo): Contract {
    return this.repo.contract(name, info)
  }
}
