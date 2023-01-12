import { describe, expect, test } from '@jest/globals';
import { TurbosSuiSDKJs } from '../lib';

test('DEVNET network', () => {
  const turbos = new TurbosSuiSDKJs();
  expect(turbos.getNetwork()).toEqual('DEVNET');
});

test('TESTNET network', () => {
  const turbos = new TurbosSuiSDKJs('TESTNET');
  expect(turbos.getNetwork()).toEqual('TESTNET');
});

test('ExchangePackageId config', () => {
  const turbos = new TurbosSuiSDKJs();
  const exchangePackageId = turbos.getContratConfig('ExchangePackageId');
  expect(exchangePackageId).toEqual('0x88b3387f36c92e0fa79019c3997e43dcb248a158');
});

test('Symbol pool config', () => {
  const turbos = new TurbosSuiSDKJs();
  const btcPoolCofing = turbos.getSymbolPoolConfig('BTC');
  expect(btcPoolCofing.PackageId).toEqual('0x6e6100221904c8a8e1984190c1c371ba449cd706');
});