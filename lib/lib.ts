import { contractConfig } from './config/contract.config';
import { symbolPoolsConfig } from './config/pool.config';
import {
  SymbolPoolConfigType,
  ContractConfigType,
  NetworkType,
  SymbolType,
  SymbolPoolConfigObjectType
} from './types/config.type';
import { TurbosSuiSDK } from './types/types';

export class TurbosSuiSDKJs extends TurbosSuiSDK {
  private network: NetworkType
  private contractConfig: ContractConfigType
  private symbolPoolConfig: SymbolPoolConfigType

  constructor(network: NetworkType = 'DEVNET') {
    super();

    this.network = network;
    this.contractConfig = contractConfig[network];
    this.symbolPoolConfig = symbolPoolsConfig[network];
  }

  getNetwork(): NetworkType {
    return this.network;
  }

  getContratConfig<T extends keyof ContractConfigType>(value: T): string {
    return this.contractConfig[value];
  }

  getSymbolPoolConfig(value: SymbolType): SymbolPoolConfigObjectType {
    return this.symbolPoolConfig[value];
  }

}

