import { getImageUrl } from '@/utils/tools';
import { erc20ABI } from 'wagmi';
import { arbitrum, arbitrumGoerli, bsc, bscTestnet } from '@wagmi/core/chains';
import presaleAbi from '@/configs/abi/presale.json';

export const MAX_ALLOWANCE = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

export const isProd = import.meta.env.MODE === 'production';

export const isDev = import.meta.env.MODE === 'development';

export const medias = [
  {
    type: 'TikTok',
    img: getImageUrl('@/assets/images/_global/media/tiktok.svg'),
    mobileImg: getImageUrl('@/assets/images/_global/media/tiktok-mobile.svg'),
    href: 'https://www.tiktok.com/@Tarot_pi',
  },
  {
    type: 'twitter',
    img: getImageUrl('@/assets/images/_global/media/twitter.svg'),
    mobileImg: getImageUrl('@/assets/images/_global/media/twitter-mobile.svg'),
    href: 'https://twitter.com/tarotpi',
  },
  {
    type: 'ins',
    img: getImageUrl('@/assets/images/_global/media/ins.svg'),
    mobileImg: getImageUrl('@/assets/images/_global/media/ins-mobile.svg'),
    href: 'https://www.instagram.com/_tarotpi/',
  },
  {
    type: 'facebook',
    img: getImageUrl('@/assets/images/_global/media/facebook.svg'),
    mobileImg: getImageUrl('@/assets/images/_global/media/facebook-mobile.svg'),
    href: 'https://www.facebook.com/profile.php?id=100094770578472',
  },
  {
    type: 'medium',
    img: getImageUrl('@/assets/images/_global/media/medium.svg'),
    mobileImg: getImageUrl('@/assets/images/_global/media/medium-mobile.svg'),
    href: 'https://medium.com/@tarotpi',
  },
];

export const navs = [
  { label: 'Home', href: '/home', extraHref: '/' },
  { label: 'Token', href: '/token' },
  { label: 'Prediction', href: '/prediction' },
  { label: 'Prophet', href: '/prophet' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Gitbook', href: 'https://docs.tarotpi.com/' },
];

export const MockUSDT = '0x3c2980a3962B1BaFFe58241249866D7779B5546a';
export const TART = '0x649AFCeFD255CadFE1DFca27DbC3D300F2915542';

export const PresaleMarket =
  '0xcb186F6bbB2Df145ff450ee0A4Ec6aF4baadEec7' || '0x2861bDFC1a5398bfFaeda8476db3077a94A374Cb';

export const usdtContract = {
  address: MockUSDT,
  abi: erc20ABI,
};

export const tartContract = {
  address: TART,
  abi: erc20ABI,
};

export const presaleContract = {
  address: PresaleMarket,
  abi: presaleAbi,
};

export const basicChainId = bscTestnet.id;
