export type NetworkType = 'DEVNET' | 'TESTNET' | 'MAINNET';
export type SymbolType = 'BTC' | 'ETH' | 'USDC' | 'SUI';
export type TLPAndSymbolType = SymbolType | 'TLP';
export type SymbolPoolConfigObjectType = {
    PackageId: string;
    PriceFeedObjectId: string;
    Type: string;
    PriceFeedId: string;
    PoolObjectId: string;
    PoolDataObjectId: string;
};
export type SymbolPoolConfigType = {
    [y in SymbolType]: SymbolPoolConfigObjectType;
};
export type SymbolPoolsConfig = {
    [x in NetworkType]: SymbolPoolConfigType;
};
export type ContractConfigType = {
    ExchangePackageId: string;
    VaultObjectId: string;
    PositionsObjectId: string;
    ManagerCapObjectId: string;
    TimeOraclePackageId: string;
    PriceOraclePackageId: string;
    TimeOracleObjectId: string;
    PriceFeedStorageObjectId: string;
    PriceOracleAuthorityCapObjectId: string;
    TimeOracleAuthorityCapObjectId: string;
};
export type ContractsConfig = {
    [x in NetworkType]: ContractConfigType;
};
