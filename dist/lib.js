"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TurbosSuiSDKJs = void 0;
var contract_config_1 = require("./config/contract.config");
var pool_config_1 = require("./config/pool.config");
var types_1 = require("./types/types");
var TurbosSuiSDKJs = /** @class */ (function (_super) {
    __extends(TurbosSuiSDKJs, _super);
    function TurbosSuiSDKJs(network) {
        if (network === void 0) { network = 'DEVNET'; }
        var _this = _super.call(this) || this;
        _this.network = network;
        _this.contractConfig = contract_config_1.contractConfig[network];
        _this.symbolPoolConfig = pool_config_1.symbolPoolsConfig[network];
        return _this;
    }
    TurbosSuiSDKJs.prototype.getNetwork = function () {
        return this.network;
    };
    TurbosSuiSDKJs.prototype.getContratConfig = function (value) {
        return this.contractConfig[value];
    };
    TurbosSuiSDKJs.prototype.getSymbolPoolConfig = function (value) {
        return this.symbolPoolConfig[value];
    };
    return TurbosSuiSDKJs;
}(types_1.TurbosSuiSDK));
exports.TurbosSuiSDKJs = TurbosSuiSDKJs;
//# sourceMappingURL=lib.js.map