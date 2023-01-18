export * from './config.type';

import BigNumber from "bignumber.js";
import {
  ContractConfigType,
  NetworkType,
  SymbolType,
  SymbolPoolConfigObjectType
} from './config.type';

export type BigNumberOrNumberOrString = number | string | BigNumber;

export type PositionFeesType = {
  vaultMarginFeeBasisPoints: BigNumberOrNumberOrString,
  positionSizeDelta: BigNumberOrNumberOrString
}

export type BorrowFeesType = {
  poolLastFundingTimes: BigNumberOrNumberOrString,
  poolAmounts: BigNumberOrNumberOrString,
  poolIsStableToken: boolean,
  poolReservedAmounts: BigNumberOrNumberOrString,
  vaultFundingInterval: BigNumberOrNumberOrString,
  vaultStableFundingRateFactor: BigNumberOrNumberOrString,
  vaultFundingRateFactor: BigNumberOrNumberOrString,
  currentTimestamp: BigNumberOrNumberOrString
}

export type SwapFeesType = {
  outSymbolBalance: BigNumberOrNumberOrString,
  inSymbolBalance: BigNumberOrNumberOrString,
  inSymbolPrice: BigNumberOrNumberOrString,
  inPoolIsStableToken: boolean,
  inPoolTusdAmounts:BigNumberOrNumberOrString,

  outPoolIsStableToken: boolean,
  outPoolTusdAmounts:BigNumberOrNumberOrString,

  vaultStableSwapFeeBasisPoints: number,
  vaultSwapFeeBasisPoints: number,
  vaultStableTaxBasisPoints: number,
  vaultTaxBasisPoints: number,
  vaultHasDynamicFees: number,
  vaultTusdSupplyAmount : BigNumberOrNumberOrString
}


export abstract class TurbosSuiSDK {
  abstract getNetwork(): NetworkType
  abstract getContratConfig<T extends keyof ContractConfigType>(value: T): string
  abstract getSymbolPoolConfig(value: SymbolType): SymbolPoolConfigObjectType
  // abstract getPositionFees(positionFees: PositionFeesType): BigNumber
  // abstract getBorrowFees(borrowFees: BorrowFeesType): BigNumber
  // abstract getSwapFees(swapFees: SwapFeesType): BigNumber
}