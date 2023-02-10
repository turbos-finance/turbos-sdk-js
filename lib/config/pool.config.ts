import { SymbolPoolsConfig } from "../types/config.type";

export const symbolPoolsConfig: SymbolPoolsConfig = {
  "DEVNET": {
    "BTC": {
      "PackageId": "0x9febb144e1e06461b1be9a64dd0b6d69e371d156",
      "PriceFeedObjectId": "0x1df5190e3c353a7253c8b091646ba18d8d973d43",
      "PriceFeedId": "fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525",
      "Type": "0x9febb144e1e06461b1be9a64dd0b6d69e371d156::btc::BTC",
      "PoolObjectId": "0x1d4ce9d2bf7ab7cb9ad58220d107fbc00d2fb514",
      "PoolDataObjectId": "0xd62fcf232d9218cc9cf292692dc6e0a42009e0e7"
    },
    "ETH": {
      "PackageId": "0x9febb144e1e06461b1be9a64dd0b6d69e371d156",
      "PriceFeedObjectId": "0x0391f36d066da32f4ca2845a7d97a15b6b86a37f",
      "PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
      "Type": "0x9febb144e1e06461b1be9a64dd0b6d69e371d156::eth::ETH",
      "PoolObjectId": "0x10517e46c41b02d56c2ca333c3651fb5874633d0",
      "PoolDataObjectId": "0x249c4d7b95f5053cf03f4eb5c02f6ededecc14df"
    },
    "USDC": {
      "PackageId": "0x9febb144e1e06461b1be9a64dd0b6d69e371d156",
      "PriceFeedObjectId": "0x1c670827ae6f5e5c877503c62f7426a40da38cec",
      "PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
      "Type": "0x9febb144e1e06461b1be9a64dd0b6d69e371d156::usdc::USDC",
      "PoolObjectId": "0x96352abdfe1fe2d601226801cd0bb56ea9f9a7ff",
      "PoolDataObjectId": "0x4f5990862842b71db0c13df7d79bd70a2383c573"
    },
    "SUI": {
      "PackageId": "0x0000000000000000000000000000000000000002",
      "PriceFeedObjectId": "0xc3f6de86a71cc477c23b7c8dc9e07f1f29adfe66",
      "PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
      "Type": "0x0000000000000000000000000000000000000002::sui::SUI",
      "PoolObjectId": "0xb86a1a7b741c85eb7af068fa15505e7e47a849f8",
      "PoolDataObjectId": "0xa79f002950eed94317f7d40440bc291570482d0c"
    }
  },
  "TESTNET": {
    "BTC": {
      "PackageId": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67",
      "PriceFeedObjectId": "0xf8043ceb62be9456f88abe519ba832f8421c5c72",
      "PriceFeedId": "fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525",
      "Type": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67::btc::BTC",
      "PoolObjectId": "0xdccaf9e100e6cca56af266190ad89f2502e45c91",
      "PoolDataObjectId": "0xea35b6a0c53b293f96148a786e25cd6c71d6ba2f"
    },
    "ETH": {
      "PackageId": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67",
      "PriceFeedObjectId": "0x11b3b9710b904be694e5f4f98e22c275bbe11b8f",
      "PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
      "Type": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67::eth::ETH",
      "PoolObjectId": "0x81d3a4da010d483af43165a007722effea0788b4",
      "PoolDataObjectId": "0x75b70e9131e7df65d49e604dd67ccebe95ccf652"
    },
    "USDC": {
      "PackageId": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67",
      "PriceFeedObjectId": "0x4fe7bd77b217793729b534a02f11527bc388bb18",
      "PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
      "Type": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67::usdc::USDC",
      "PoolObjectId": "0x2a3cf9014d717ba53844782fc3463ec7056382bd",
      "PoolDataObjectId": "0x46778ccfa952013142bb3dac4b063e3932b1136d"
    },
    "SUI": {
      "PackageId": "0x0000000000000000000000000000000000000002",
      "PriceFeedObjectId": "0x1f4aba162d030ef629b8146b6b5dec495cc99396",
      "PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
      "Type": "0x0000000000000000000000000000000000000002::sui::SUI",
      "PoolObjectId": "0xd96821d81c0d7fecc9e20e7e896401703bf76a65",
      "PoolDataObjectId": "0xba6fe9e04df32a0ee6f0d165dec22eebd20af441"
    }
  },
  "MAINNET": {
    "BTC": {
      "PackageId": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67",
      "PriceFeedObjectId": "0xf8043ceb62be9456f88abe519ba832f8421c5c72",
      "PriceFeedId": "fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525",
      "Type": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67::btc::BTC",
      "PoolObjectId": "0xdccaf9e100e6cca56af266190ad89f2502e45c91",
      "PoolDataObjectId": "0xea35b6a0c53b293f96148a786e25cd6c71d6ba2f"
    },
    "ETH": {
      "PackageId": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67",
      "PriceFeedObjectId": "0x11b3b9710b904be694e5f4f98e22c275bbe11b8f",
      "PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
      "Type": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67::eth::ETH",
      "PoolObjectId": "0x81d3a4da010d483af43165a007722effea0788b4",
      "PoolDataObjectId": "0x75b70e9131e7df65d49e604dd67ccebe95ccf652"
    },
    "USDC": {
      "PackageId": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67",
      "PriceFeedObjectId": "0x4fe7bd77b217793729b534a02f11527bc388bb18",
      "PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
      "Type": "0x2d37b4f2e8382ed9494bac9a9f4a1ddb5b067d67::usdc::USDC",
      "PoolObjectId": "0x2a3cf9014d717ba53844782fc3463ec7056382bd",
      "PoolDataObjectId": "0x46778ccfa952013142bb3dac4b063e3932b1136d"
    },
    "SUI": {
      "PackageId": "0x0000000000000000000000000000000000000002",
      "PriceFeedObjectId": "0x1f4aba162d030ef629b8146b6b5dec495cc99396",
      "PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
      "Type": "0x0000000000000000000000000000000000000002::sui::SUI",
      "PoolObjectId": "0xd96821d81c0d7fecc9e20e7e896401703bf76a65",
      "PoolDataObjectId": "0xba6fe9e04df32a0ee6f0d165dec22eebd20af441"
    }
  }
}