import { getImageUrl } from "@/utils/tools";

export const MAX_ALLOWANCE = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

export const isProd = import.meta.env.MODE === 'production';

export const isDev = import.meta.env.MODE === 'development';

export const medias = [
  {
    icon: getImageUrl('@/assets/images/medias/twitter.svg'),
    link: 'https://twitter.com/SubstanceX_',
    label: 'Twitter',
  },
  {
    icon: getImageUrl('@/assets/images/medias/discord.svg'),
    link: 'https://discord.gg/substancex',
    label: 'Discord',
  },
  {
    icon: getImageUrl('@/assets/images/medias/telegram.svg'),
    link: 'https://t.me/Substancexofficial',
    label: 'Telegram',
  },
  {
    icon: getImageUrl('@/assets/images/medias/medium.svg'),
    link: 'https://medium.com/@SubstanceX',
    label: 'Medium',
  },
];