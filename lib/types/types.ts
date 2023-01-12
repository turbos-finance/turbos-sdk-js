export * from './config.type';

import {
  ContractConfigType,
  NetworkType,
  SymbolType,
  SymbolPoolConfigObjectType
} from './config.type';

export abstract class TurbosSuiSDK {
  abstract getNetwork(): NetworkType
  abstract getContratConfig<T extends keyof ContractConfigType>(value: T): string
  abstract getSymbolPoolConfig(value: SymbolType): SymbolPoolConfigObjectType
}