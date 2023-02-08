import { SymbolPoolsConfig } from "../types/config.type";

export const symbolPoolsConfig: SymbolPoolsConfig = {
  "DEVNET": {
    "BTC": {
      "PackageId": "0x573284904a029a7df14f01223f9e88af24af3b5e",
      "PriceFeedObjectId": "0xe64ef093cfb66b41ebb1d3a61b28393f725b2a69",
      "PriceFeedId": "fbd7c495fcc83ec7ce6522eb44a453a70f88ef64664f1ed49e011be87ffe3525",
      "Type": "0x573284904a029a7df14f01223f9e88af24af3b5e::btc::BTC",
      "PoolObjectId": "0xb91c034184e5e9a8389fa5c2e00360b0a50add10",
      "PoolDataObjectId": "0xe5b32addbdec15778d391f2b2d33e3d5b175e115"
    },
    "ETH": {
      "PackageId": "0x573284904a029a7df14f01223f9e88af24af3b5e",
      "PriceFeedObjectId": "0xa86802a4aba504573c773e20c8f50c2780397f14",
      "PriceFeedId": "3b3852469b9667b95ce1ef1fe4ceba4ebba4e07b42acda4e8e3246598e5cb73f",
      "Type": "0x573284904a029a7df14f01223f9e88af24af3b5e::eth::ETH",
      "PoolObjectId": "0x1efe3dc579b918498b08d3699a9a90437d598c46",
      "PoolDataObjectId": "0xdc9fb71bc87eb593367402536c95416c2d7fd1a3"
    },
    "USDC": {
      "PackageId": "0x573284904a029a7df14f01223f9e88af24af3b5e",
      "PriceFeedObjectId": "0xd10e07b4d499972297d7730b3b561ec89ae11e18",
      "PriceFeedId": "348eb3a88317813f7541e4008843b907822259c008a2793e43edce2d1360e27d",
      "Type": "0x573284904a029a7df14f01223f9e88af24af3b5e::usdc::USDC",
      "PoolObjectId": "0xb1df3afd3e540b74baf6cdb4aed2732dc86f6527",
      "PoolDataObjectId": "0x72ea07b41208fc3871897f6fb5e90e79e6dc58a1"
    },
    "SUI": {
      "PackageId": "0x0000000000000000000000000000000000000002",
      "PriceFeedObjectId": "0x1ad4067abc2ff1bc2c9b94939745c4a421a8722d",
      "PriceFeedId": "16c3533d98cb020a2304c7f26169ac2597079f9aac853dd141d0aff86f540d56",
      "Type": "0x0000000000000000000000000000000000000002::sui::SUI",
      "PoolObjectId": "0xa08277b23e651e3daba175bc361224201d9dff2f",
      "PoolDataObjectId": "0x6e4f50054269f834bf8cbbd48fba3717687c1000"
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