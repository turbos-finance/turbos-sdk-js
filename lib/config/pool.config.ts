import { SymbolPoolsConfig } from "../types/config.type";

export const symbolPoolsConfig: SymbolPoolsConfig = {
  "DEVNET": {
    "BTC": {
      "PackageId": "0xfaf4e2441c904cd67d24704ff635587a7c9156c5f0d6f0b75d67b8c2f9f40c8c",
      "PriceFeedObjectId": "0x1c685138bc08bc8b38a65e5b071e21bbd2d2f1df",
      "PriceFeedId": "fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525",
      "Type": "0xfaf4e2441c904cd67d24704ff635587a7c9156c5f0d6f0b75d67b8c2f9f40c8c::btc::BTC",
      "PoolObjectId": "0x69462886e525678bf065c8afa6f24801d47a4dee",
      "PoolDataObjectId": "0xe8664bc6430e8eb1012ca7ca7ffaf56359a9bb1d"
    },
    "ETH": {
      "PackageId": "0xfaf4e2441c904cd67d24704ff635587a7c9156c5f0d6f0b75d67b8c2f9f40c8c",
      "PriceFeedObjectId": "0xcfa94cc65a45fb0668e69585e984d918b56951ce",
      "PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
      "Type": "0xfaf4e2441c904cd67d24704ff635587a7c9156c5f0d6f0b75d67b8c2f9f40c8c::eth::ETH",
      "PoolObjectId": "0x6d671bd710ffc1d6c3ee7e3321f73160223ba42e",
      "PoolDataObjectId": "0x4ea8f453b6a7ef412d26d54a705688ed599d6403"
    },
    "USDC": {
      "PackageId": "0xfaf4e2441c904cd67d24704ff635587a7c9156c5f0d6f0b75d67b8c2f9f40c8c",
      "PriceFeedObjectId": "0x12f0340cefa25f9bf3cee8e39277f7181b96e072",
      "PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
      "Type": "0xfaf4e2441c904cd67d24704ff635587a7c9156c5f0d6f0b75d67b8c2f9f40c8c::usdc::USDC",
      "PoolObjectId": "0x2df23e6ec6e5f109788c04be09849ebe2a8848ed",
      "PoolDataObjectId": "0xf6d9183b7e1b717065e089df40b37a9ea908b5a2"
    },
    "SUI": {
      "PackageId": "0x0000000000000000000000000000000000000002",
      "PriceFeedObjectId": "0x33935818758ed932364398691da48e3b9bd84b66",
      "PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
      "Type": "0x0000000000000000000000000000000000000002::sui::SUI",
      "PoolObjectId": "0x48ed42932db5c1e9197980867297a6e554dc1b54",
      "PoolDataObjectId": "0x79475ebe6f26fdd91ccd984574c8e1a7b404d433"
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