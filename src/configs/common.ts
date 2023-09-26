import { getImageUrl } from '@/utils/tools';
import { erc20ABI } from 'wagmi';
import { arbitrum, arbitrumGoerli, bsc, bscTestnet } from '@wagmi/core/chains';
import presaleAbi from '@/configs/abi/presale.json';

export const prod = true;

export const MAX_ALLOWANCE = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

export const isProd = import.meta.env.MODE === 'production';

export const isDev = import.meta.env.MODE === 'development';

export const graphBaseUrl = prod
  ? 'https://api.thegraph.com/subgraphs/name/dragonprot/tarotpi'
  : 'https://api.thegraph.com/subgraphs/name/dragonprot/tarotpi-dev';

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
  { label: 'Prediction', href: 'https://prediction.tarotpi.com/' },
  { label: 'Prophet', href: '/prophet' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Gitbook', href: 'https://docs.tarotpi.com/' },
];

export const MockUSDT = prod
  ? '0x55d398326f99059fF775485246999027B3197955'
  : '0x3c2980a3962B1BaFFe58241249866D7779B5546a';

export const TART = prod ? '0xd0c193c6902361e75d41bba6a282C70ecBB70408' : '0x649AFCeFD255CadFE1DFca27DbC3D300F2915542';

export const PresaleMarket = prod
  ? '0xf2b6Cd959cF2CfC98cd829F54Afb2D42F84150De'
  : '0x03C295ff7f1Fe1085e9ceA827d5d7b7f8cA7c684';

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

export const basicChainId = prod ? bsc.id : bscTestnet.id;
