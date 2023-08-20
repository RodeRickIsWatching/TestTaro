import { TokenBalanceInterface } from '@/typings';
import { atom } from 'recoil';

export const recoilStableTokenPrice = atom<any>({
  key: 'stableTokenPrice',
  default: null,
});

export const recoilTartBalance = atom<string>({
  key: 'tartBalance',
  default: '0',
});

export const recoilBalance = atom<null | TokenBalanceInterface>({
  key: 'tartBalance',
  default: null,
});


export const recoilPresaleInfo = atom<null | any>({
  key: 'presaleInfo',
  default: null,
});


export const recoilReleasingAmount = atom<string>({
  key: 'releasingAmount',
  default: '',
});


export const recoilTotalReleasingAmount = atom<string>({
  key: 'totalReleasingAmount',
  default: '',
});

