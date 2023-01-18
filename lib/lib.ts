import BigNumber from "bignumber.js";
import { contractConfig } from './config/contract.config';
import { symbolPoolsConfig } from './config/pool.config';
import { BASIS_POINTS_DIVISOR } from './config/config';
import {
  SymbolPoolConfigType,
  ContractConfigType,
  NetworkType,
  SymbolType,
  SymbolPoolConfigObjectType
} from './types/config.type';
import { BigNumberOrNumberOrString, BorrowFeesType, PositionFeesType, SwapFeesType, TurbosSuiSDK } from './types/types';

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

  // // long and show position receive fees 
  // getPositionFees(positionFees: PositionFeesType): BigNumber {
  //   const { positionSizeDelta, vaultMarginFeeBasisPoints } = positionFees;
  //   if (!positionSizeDelta || !vaultMarginFeeBasisPoints) {
  //     return BigNumber(0);
  //   }

  //   const after_fee_usd = BigNumber(positionSizeDelta)
  //     .multipliedBy(BigNumber(BASIS_POINTS_DIVISOR).minus(vaultMarginFeeBasisPoints))
  //     .div(BASIS_POINTS_DIVISOR);

  //   return BigNumber(vaultMarginFeeBasisPoints).minus(after_fee_usd);
  // }

  // // Borrow fee / 1h
  // getBorrowFees(borrowFees: BorrowFeesType): BigNumber {
  //   const {
  //     poolLastFundingTimes,
  //     poolAmounts,
  //     poolIsStableToken,
  //     poolReservedAmounts,
  //     vaultFundingInterval,
  //     vaultStableFundingRateFactor,
  //     vaultFundingRateFactor,
  //     currentTimestamp,
  //   } = borrowFees;

  //   if (BigNumber(poolLastFundingTimes).plus(vaultFundingInterval).minus(currentTimestamp).isGreaterThan(0)) {
  //     return BigNumber(0);
  //   };

  //   const intervals = BigNumber(currentTimestamp).minus(poolLastFundingTimes).div(vaultFundingInterval);
  //   if (poolAmounts == 0) {
  //     return BigNumber(0);
  //   };

  //   const fundingRateRactor = poolIsStableToken ? vaultStableFundingRateFactor : vaultFundingRateFactor;
  //   const next_funding_rate = BigNumber(fundingRateRactor)
  //     .multipliedBy(poolReservedAmounts)
  //     .multipliedBy(intervals)
  //     .div(poolAmounts)
  //     .div(10 ** 9);

  //   return next_funding_rate;
  // }

  // getSwapFees(swapFees: SwapFeesType): BigNumber {
  //   const { outSymbolBalance } = swapFees;
  //   const feeBasisPoints = this.get_swap_fee_basis_points(swapFees);

  //   const afterQuantity = BigNumber(outSymbolBalance)
  //     .multipliedBy(BigNumber(BASIS_POINTS_DIVISOR).minus(feeBasisPoints))
  //     .div(BASIS_POINTS_DIVISOR);
  //   const afterQuantityProportion = BigNumber(afterQuantity).div(outSymbolBalance);
  //   return BigNumber(1).minus(afterQuantityProportion).multipliedBy(100);
  // }

  // private get_target_tusd_amount(swapFees: SwapFeesType) {
  //   const {
  //     vaultTusdSupplyAmount
  //   } = swapFees;
  //   if (!vaultTusdSupplyAmount || vaultTusdSupplyAmount == 0) {
  //     return 0
  //   };

  //   let weight = pool_data.token_weights;
  //   let target_weight = BigNumber(weight).multipliedBy(supply).div(vault?.total_token_weights).toNumber()
  //   return target_weight;
  // }

  // private get_fee_basis_points(
  //   swapFees: SwapFeesType,
  //   tusd_amounts: BigNumberOrNumberOrString,
  //   tusd_delta: BigNumber,
  //   fee_basis_points: number,
  //   tax_basis_points: number,
  //   increment: boolean
  // ) {

  //   const {
  //     vaultHasDynamicFees
  //   } = swapFees;

  //   if (!vaultHasDynamicFees) { return fee_basis_points };

  //   let initial_amount = tusd_amounts;
  //   let next_amount = initial_amount + tusd_delta;
  //   if (!increment) {
  //     next_amount = tusd_delta > initial_amount ? 0 : initial_amount - tusd_delta;
  //   };

  //   let target_amount = this.get_target_tusd_amount(swapFees);
  //   if (target_amount == 0) { return fee_basis_points };

  //   let initial_diff = initial_amount > target_amount ? initial_amount - target_amount : target_amount - initial_amount;
    
  //   let next_diff = next_amount > target_amount ? next_amount - target_amount : target_amount - next_amount;

  //   if (next_diff < initial_diff) {
  //     let rebate_bps = BigNumber(tax_basis_points).multipliedBy(initial_diff).div(target_amount).toNumber();
  //     return rebate_bps > fee_basis_points ? 0 : fee_basis_points - rebate_bps
  //   };

  //   let average_diff = (initial_diff + next_diff) / 2;
  //   if (average_diff > target_amount) {
  //     average_diff = target_amount;
  //   };
  //   let tax_bps = BigNumber(tax_basis_points).multipliedBy(average_diff).div(target_amount).toNumber();
  //   return fee_basis_points + tax_bps;
  // }

  // private get_swap_fee_basis_points(swapFees: SwapFeesType) {
  //   const {
  //     inSymbolBalance,
  //     inSymbolPrice,
  //     inPoolIsStableToken,
  //     inPoolTusdAmounts,

  //     outPoolIsStableToken,
  //     outPoolTusdAmounts,

  //     vaultStableSwapFeeBasisPoints,
  //     vaultSwapFeeBasisPoints,
  //     vaultStableTaxBasisPoints,
  //     vaultTaxBasisPoints,
  //   } = swapFees;
  //   const tusd_amount = BigNumber(inSymbolBalance).multipliedBy(inSymbolPrice);
  //   let is_stable_swap = inPoolIsStableToken && outPoolIsStableToken;
  //   let base_bps = is_stable_swap ? vaultStableSwapFeeBasisPoints : vaultSwapFeeBasisPoints;
  //   let tax_bps = is_stable_swap ? vaultStableTaxBasisPoints : vaultTaxBasisPoints;
  //   let fee_basis_points_0 = this.get_fee_basis_points(swapFees, inPoolTusdAmounts, tusd_amount, base_bps, tax_bps, true);
  //   let fees_basis_points_1 = this.get_fee_basis_points(swapFees, outPoolTusdAmounts, tusd_amount, base_bps, tax_bps, false);
  //   let point = fee_basis_points_0 > fees_basis_points_1 ? fee_basis_points_0 : fees_basis_points_1;
  //   return point;
  // }

}

