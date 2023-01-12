# turbos-sdk-js


## Installing
```
npm install --save @turbos-finance/turbos-sdk-js
```

## Sample Usage
```
import { TurbosSuiSDKJs } from '@turbos-finance/turbos-sdk-js';

const trubosSuiSDKJs = new TurbosSuiSDKJs('DEVNET'); // default: DEVNET

// get current network
const network = trubosSuiSDKJs.getNetwork();

// get contract config
const exchangePackageId = trubosSuiSDKJs.getContratConfig('ExchangePackageId'); // ExchangePackageId, VaultObjectId, ...

//get symbol pool config 
const btcSymbolPool = trubosSuiSDKJs.getSymbolPoolConfig('BTC'); // BTC, ETH, USDC, SUI

```
