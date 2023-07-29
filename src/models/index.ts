import { atom } from 'recoil';

export const recoilStableTokenPrice = atom<any>({
  key: 'stableTokenPrice',
  default: null,
});
