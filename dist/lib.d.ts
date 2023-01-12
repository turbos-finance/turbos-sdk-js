import { ContractConfigType, NetworkType, SymbolType, SymbolPoolConfigObjectType } from './types/config.type';
import { TurbosSuiSDK } from './types/types';
export declare class TurbosSuiSDKJs extends TurbosSuiSDK {
    private network;
    private contractConfig;
    private symbolPoolConfig;
    constructor(network?: NetworkType);
    getNetwork(): NetworkType;
    getContratConfig<T extends keyof ContractConfigType>(value: T): string;
    getSymbolPoolConfig(value: SymbolType): SymbolPoolConfigObjectType;
}
