import { getImageUrl } from '@/utils/tools';
import './index.scss';
import { keyframes, styled } from 'styled-components';
import BaseLabel from '@/components/_global/BaseLabel';
import { useMemo, useState } from 'react';

const scroll = keyframes`
from{
  transform: translate(0%, 0);
}
to{
  transform: translate(-75%, 0);
}
`;
const scrollReverse = keyframes`
from{
  transform: translate(-150%, 0);
}
to{
  transform: translate(-75%, 0);
}
`;

const partner = [
  {
    name: 'binance',
    img: <img src={getImageUrl('@/assets/images/_global/partner/binance.svg')} />,
  },
  {
    name: 'exodus',
    img: <img src={getImageUrl('@/assets/images/_global/partner/exodus.svg')} />,
  },
  {
    name: 'plasmapay',
    img: <img src={getImageUrl('@/assets/images/_global/partner/plasmapay.svg')} />,
  },
  {
    name: 'revolut',
    img: <img src={getImageUrl('@/assets/images/_global/partner/revolut.svg')} />,
  },
  {
    name: 'sequoia',
    img: <img src={getImageUrl('@/assets/images/_global/partner/sequoia.svg')} />,
  },
];

const meidas = [
  {
    type: 'twitter',
    img: <img src={getImageUrl('@/assets/images/_global/media/twitter.svg')} />,
    href: '',
  },
  {
    type: 'facebook',
    img: <img src={getImageUrl('@/assets/images/_global/media/facebook.svg')} />,
    href: '',
  },
  {
    type: 'tiktok',
    img: <img src={getImageUrl('@/assets/images/_global/media/tiktok.svg')} />,
    href: '',
  },
  {
    type: 'ins',
    img: <img src={getImageUrl('@/assets/images/_global/media/ins.svg')} />,
    href: '',
  },
];

const tarots = [
  {
    name: 'Bilge Sahim',
    country: 'Turkey',
    lng: 'English; Turkish; korean',
    sign: 'Aries',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card1.png')} />,
  },
  {
    name: 'Muhammad Rizwan',
    country: 'Pakistan',
    lng: 'English; Urdu',
    sign: 'Gemini',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card1.png')} />,
  },
  {
    name: 'Keo Ceo',
    country: 'Myanmar',
    lng: 'English; Burmese',
    sign: 'Taurus',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card1.png')} />,
  },
  {
    name: 'Ronald Maunze',
    country: 'Zimbabwe',
    lng: 'English; Chinese; Shona; Portuguese',
    sign: 'Cancer',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card1.png')} />,
  },
  {
    name: 'Sheikh Muhammad Usama',
    country: 'Saudi Arabia',
    lng: 'English; Arabic',
    sign: 'Leo',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card1.png')} />,
  },
  {
    name: 'Ayaka Fujiwara',
    country: 'Japen',
    lng: 'English; Japanese',
    sign: 'Virgo',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card1.png')} />,
  },
  {
    name: 'James Mcmurray',
    country: 'Ireland',
    lng: 'English;',
    sign: 'Libra',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card2.png')} />,
  },
  {
    name: 'Yonatan Henok',
    country: 'Ethiopian',
    lng: 'English; French',
    sign: 'Scorpion',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card2.png')} />,
  },
  {
    name: 'Jennie Hua',
    country: 'Singapore',
    lng: 'English; Chinese',
    sign: 'Sagittarius',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card2.png')} />,
  },
  {
    name: 'Musa Jonathan Sesay',
    country: 'Sierra Leone',
    lng: 'English',
    sign: 'Capricorn',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card2.png')} />,
  },
  {
    name: 'Hyeon Jeong',
    country: 'Korea',
    lng: 'English; Korean',
    sign: 'Aquarius',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card2.png')} />,
  },
  {
    name: 'Shamim Mia',
    country: 'Bangladesh',
    lng: 'English; Bengali',
    sign: 'Pisces',
    src: <img src={getImageUrl('@/assets/images/_global/tarot/card2.png')} />,
  },
];

const roadmap1 = [
  {
    title: 'Q2',
    y: '2023',
    contentsPrefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    contents: ['Prediction Marketplace (done)'],
  },
  {
    title: 'Q3',
    y: '2023',
    contentsPrefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    contents: [
      'Launch Genesis Tarot Card NFT (Celtic Art Series)',
      'IIssue TART token',
      'Complete Major and Minor Arcana upgrading features',
      'Implement P2E feature',
    ],
  },
  {
    title: 'Q2',
    y: '2023',
    contentsPrefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    contents: [
      'Launch Carding Reading game',
      'Develop Mystery Box feature',
      'Develop marketplace for tarot card trading',
    ],
  },
];

const roadmap2 = [
  {
    title: 'Q2',
    y: '2025',
    contentsPrefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    contents: ['Collaborate with other brands and KOLs', 'Issue additional NFT series', 'Launch more card games'],
  },
  {
    title: 'Q2',
    y: '2024',
    contentsPrefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    contents: ['Launch Tarotverse'],
  },
  {
    title: '',
    y: '',
    contentsPrefix: null,
    contents: [],
  },
];

const magicianLevel = [
  {
    prefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    type: 'Ranty',
    children: [
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          EPIC
        </span>
      </BaseLabel>,
    ],
  },
  {
    prefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    type: 'Level',
    children: [
      <img style={{ width: '42px' }} src={getImageUrl('@/assets/images/_global/level/Level1.svg')} />,
      <img style={{ width: '42px' }} src={getImageUrl('@/assets/images/_global/level/more.svg')} />,
      <img style={{ width: '42px' }} src={getImageUrl('@/assets/images/_global/level/Level2.svg')} />,
      <img style={{ width: '42px' }} src={getImageUrl('@/assets/images/_global/level/Level3.svg')} />,
      <img style={{ width: '42px' }} src={getImageUrl('@/assets/images/_global/level/Level4.svg')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          11 Levle
        </span>
      </BaseLabel>,
    ],
  },
  {
    prefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    type: 'Arribute',
    children: [
      <img src={getImageUrl('@/assets/images/_global/attr/icon1.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          Wind
        </span>
      </BaseLabel>,
    ],
  },
  {
    prefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    type: 'Power',
    children: [
      <img src={getImageUrl('@/assets/images/_global/attr/icon1.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          ?
        </span>
      </BaseLabel>,

      <img src={getImageUrl('@/assets/images/_global/attr/icon2.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          ?
        </span>
      </BaseLabel>,

      <img src={getImageUrl('@/assets/images/_global/attr/icon3.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          ?
        </span>
      </BaseLabel>,

      <img src={getImageUrl('@/assets/images/_global/attr/icon4.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          ?
        </span>
      </BaseLabel>,
    ],
  },
  {
    prefix: <img src={getImageUrl('@/assets/images/_global/icon8.svg')} />,
    type: 'Suits',
    children: [
      <img src={getImageUrl('@/assets/images/_global/attr/icon5.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          X
        </span>
      </BaseLabel>,

      <img src={getImageUrl('@/assets/images/_global/attr/icon6.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          V
        </span>
      </BaseLabel>,

      <img src={getImageUrl('@/assets/images/_global/attr/icon7.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          II
        </span>
      </BaseLabel>,

      <img src={getImageUrl('@/assets/images/_global/attr/icon8.png')} />,
      <BaseLabel light>
        <span className="f-16" style={{ color: '#E1E1E1' }}>
          IV
        </span>
      </BaseLabel>,
    ],
  },
];

const Basic = styled.section`
  &.gap-200 {
    gap: 200px;
  }

  .gap-180 {
    gap: 180px;
  }

  .gap-80 {
    gap: 80px;
  }

  .gap-76 {
    gap: 76px;
  }
  .gap-70 {
    gap: 70px;
  }

  .gap-50 {
    gap: 50px;
  }
  .gap-44 {
    gap: 44px;
  }
  .gap-40 {
    gap: 40px;
  }
  .gap-34 {
    gap: 34px;
  }
  .gap-30 {
    gap: 30px;
  }
  .gap-23 {
    gap: 23px;
  }
  .gap-17 {
    gap: 17px;
  }

  .gap-9 {
    gap: 9px;
  }
  .relative {
    position: relative;
  }

  .minw-1200 {
    min-width: 1200px;
  }

  .maxw-1200 {
    max-width: 1200px;
    margin: auto;
  }

  .maxw-1250 {
    max-width: 1250px;
    margin: auto;
  }

  .maxw-300 {
    max-width: 300px;
  }

  .maxw-484 {
    max-width: 484px;
  }

  .maxw-858 {
    max-width: 858px;
  }

  .f-50 {
    text-align: center;
    font-family: Canela Trial;
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 120%; /* 60px */
    letter-spacing: 3px;
  }

  .f-48 {
    font-family: Canela Trial;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 57.6px */
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .f-34 {
    text-align: center;
    font-family: Canela Trial;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 40.8px */
    letter-spacing: 3px;
  }

  .f-30 {
    text-align: center;
    font-family: Canela Trial;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 36px */
    letter-spacing: 3px;
  }

  .f-28 {
    text-align: center;
    font-family: Canela Trial;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 33.6px */
    letter-spacing: 3px;
  }

  .f-22 {
    text-align: center;
    font-family: Canela Trial;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 118.182% */
    letter-spacing: 2px;
  }

  .f-17 {
    text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: Canela Trial;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 152.941% */
    letter-spacing: 2px;
  }

  .f-16 {
    text-align: center;
    font-family: Canela Trial;
    font-size: 16.325px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.589px */
    letter-spacing: 0.326px;
  }

  .f-18 {
    font-family: Canela Trial;
    font-size: 18.138px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 21.766px */
    letter-spacing: 1.814px;
  }

  .f-61 {
    font-family: Canela Trial;
    font-size: 61px;
    font-weight: 700;
    line-height: 73px;
    /* letter-spacing: 3px; */
    text-align: center;
  }
`;

const MainSection = styled(Basic)`
  .sc1 {
    .banner-img-container {
      .main-img {
        width: 442px;
      }
      .a-l,
      .a-r {
        position: absolute;
        top: 50%;
        color: #fff;
        text-align: right;
        font-family: Canela Trial;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
        letter-spacing: 2px;
      }

      .a-l {
        width: 240px;
        text-align: left;
        left: -52px;
        transform: translate(-100%, -50%);
      }
      .a-r {
        width: 133px;
        text-align: right;
        /* right: 52px; */
        left: 100%;
        transform: translate(50%, 80%);
      }
    }
  }

  .sc2 {
    .base-nft-exhi {
      padding: 52px 63px;
    }
  }

  .sc3 {
    position: relative;
    .i-card {
      padding: 44px 50px;
      border-radius: 12px;
      background: linear-gradient(to bottom, rgba(255, 211, 77, 0.2) 0%, rgba(255, 211, 77, 0.05) 100%);
      /* opacity: 0.3; */
      .main-img {
        width: 472px;
        height: 230px;
      }
    }
  }

  .sc4 {
    .line {
      & > p {
        height: 1px;
        width: 100%;
        background-color: #fedd82;
        transform: translate(0%, 6.5px);
        img {
          position: absolute;
          top: 0%;
          left: 50%;
        }
        img:nth-of-type(1) {
          transform: translate(30%, -100%);
        }

        img:nth-of-type(2) {
          transform: translate(0%, -60%);
        }
      }
      & > div {
        position: relative;
        &::after {
          position: absolute;
          top: 50%;
          transform: translate(0%, -50%);
          content: '';
          display: inline-block;
          height: 1px;
          width: 100%;
          background-color: #fedd82;
        }
        &::before {
          position: absolute;
          top: 50%;
          left: 0%;
          transform: translate(8px, -100%);
          content: '';
          display: inline-block;
          height: 30px;
          width: 1px;
          background-color: #fedd82;
        }
      }
    }
  }

  .sc5 {
    .thin-border {
      position: relative;
      background: url(${getImageUrl('@/assets/images/_global/tarot/border.svg')});
      background-size: cover;
      background-repeat: no-repeat;
      width: 383px;
      height: 490.5px;
      &:hover .desc {
        transform: translate(0, 0%) !important;
      }

      & > .c {
        padding: 55px 55px;

        & > div {
          overflow: hidden;

          img {
            width: 276px;
            height: 414px;
          }
          .desc {
            transition: all linear 0.4s;
            transform: translate(0, 120%);
            width: 100%;
            padding: 15px 26px;
            position: absolute;
            bottom: 0;
            background: rgba(26, 26, 24, 0.7);
            backdrop-filter: blur(100px);
            z-index: 3;
          }
        }
      }
    }

    .disable {
      filter: opacity(0.4);
    }
  }

  .sc6 {
    .scroll-logo-container {
      overflow-x: hidden;
      overflow-y: hidden;
      position: relative;
      &::after,
      &::before {
        position: absolute;
        content: '';
        display: inline-block;
        height: 100%;
        z-index: 1;
        /* backdrop-filter: blur(8px); */
        filter: blur(15px);
        background-color: #030303;
        width: 100px;
      }
      &::after {
        right: 0;
        transform: translate(50%, 0) scale(5);
      }
      &::before {
        left: 0;
        transform: translate(-50%, 0) scale(5);
      }

      & > div:nth-of-type(1) {
        animation: ${scroll} linear 20s infinite;
      }
      & > div:nth-of-type(2) {
        animation: ${scrollReverse} linear 20s infinite;
      }
    }

    .a-nft {
      position: absolute;
      width: 200px;
      top: 50%;
      left: 50%;
      transform: translate(-60%, -30%);
    }
  }
`;

const Container = styled(MainSection)`
  background: url(${getImageUrl('@/assets/images/_global/tarotpi.svg')});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 117px;

  .a-icon {
    position: absolute;
  }

  .a-icon-1 {
    width: 60px;
    left: 0;
    top: 5%;
  }
  .a-icon-2 {
    width: 152px;
    right: 0;
    top: 8%;
  }
  .a-icon-3 {
    width: 52px;
    left: 140%;
    top: 20%;
  }
  .a-icon-4 {
    width: 73px;
    left: 180%;
    top: 30%;
  }
  .a-icon-5 {
    width: 110px;
    left: -50%;
    bottom: 10%;
    transform: translate(-50%, -50%);
  }

  .border-1 {
    border: 1px solid #9e8436;
  }
`;

const perSize = 6;
const totalPage = 2;

export function Component() {
  const [curPage, setCurPage] = useState(1);
  const filteredTarots = useMemo(
    () => tarots.filter((i, index) => index < curPage * perSize && index >= (curPage - 1) * perSize),
    [curPage],
  );

  const handleAdd = () => {
    if (curPage >= 2) {
      setCurPage(2);
      return;
    }
    setCurPage((old) => old + 1);
  };
  const handleMinus = () => {
    if (curPage <= 1) {
      setCurPage(1);
      return;
    }
    setCurPage((old) => old - 1);
  };

  return (
    <>
      <Container className="pages-landing flex flex-col gap-200">
        <section className="sc1 maxw-1250 minw-1200 relative flex flex-col items-center gap-17">
          <img className="a-icon a-icon-1" src={getImageUrl('@/assets/images/_global/icon1.svg')} alt="" />

          <h1 className="f-61">
            ll these old letters of my Book are
            <br /> aright; but צ is not the Star.{' '}
            <span className="active-color">
              ---- Liber
              <br /> AL vel Legis I:57
            </span>
          </h1>
          <img className="a-icon a-icon-2" src={getImageUrl('@/assets/images/_global/icon2.svg')} alt="" />
          <div className="banner-img-container relative flex flex-row justify-center">
            <span className="a-l">
              Reversed cards hold within them growth and insight; <span className="active-color">upright cards</span>{' '}
              symbolize joy and abundance
            </span>
            <img className="a-icon a-icon-5" src={getImageUrl('@/assets/images/_global/icon5.svg')} alt="" />
            <img className="main-img" src={getImageUrl('@/assets/images/_global/nft1.png')} alt="" />
            <span className="a-r">May the light of wisdom guide your soul</span>
            <img className="a-icon a-icon-3" src={getImageUrl('@/assets/images/_global/icon3.svg')} alt="" />
            <img className="a-icon a-icon-4" src={getImageUrl('@/assets/images/_global/icon4.svg')} alt="" />
          </div>
        </section>

        <section className="sc2 maxw-1250 minw-1200 relative flex flex-col items-center gap-70">
          <div className="flex flex-row items-center justify-between gap-17 w-full">
            <div className="f-48">Initial NFT Offering</div>
            <div className="flex flex-row gap-23 items-center">
              <span className="f-34 sub-color">Counting Down</span>
              <span className="f-50 sub-active-color" style={{ fontFamily: '"Canela Trial Bold"' }}>
                50days
              </span>
            </div>
          </div>
          <div className="border-1 flex flex-row items-center justify-between base-nft-exhi gap-50">
            <div className="flex flex-col gap-9 items-center">
              <BaseLabel>
                <span style={{ color: '#CECECC' }} className="f-18">
                  NFT front
                </span>
              </BaseLabel>
              <div>
                <img src={getImageUrl('@/assets/images/_global/NFT-left.png')} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-30">
              <div className="flex flex-row items-center gap-16 justify-center">
                <img src={getImageUrl('@/assets/images/_global/icon6.svg')} alt="" />
                <span className="f-18" style={{ color: 'rgba(255, 255, 253, 0.8)' }}>
                  The Magician
                </span>
                <img src={getImageUrl('@/assets/images/_global/icon7.svg')} alt="" />
              </div>

              <div className="flex flex-col gap-20">
                {magicianLevel.map((i) => (
                  <div key={i.type} className="flex flex-col gap-10">
                    <div className="flex flex-row gap-8">
                      {i.prefix}
                      <span className="f-18" style={{ color: '#E1BF5E' }}>
                        {i.type}
                      </span>
                    </div>

                    <div className="flex flex-row gap-10 items-center">
                      {i.children.map((j, index) => (
                        <span key={index}>{j}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-9 items-center">
              <BaseLabel>
                <span style={{ color: '#CECECC' }} className="f-18">
                  NFT opposite
                </span>
              </BaseLabel>
              <div>
                <img src={getImageUrl('@/assets/images/_global/NFT-right.png')} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sc3 minw-1200 relative flex flex-col items-center gap-70">
          <div className="flex flex-col items-center gap-24">
            <div className="f-48">NFT Benefits</div>
            <div className="f-30" style={{ color: '#A6A695' }}>
              Get Your First TAROT Card to Predict Now
            </div>
          </div>
          <div className="flex flex-row items-center gap-44">
            <div className="i-card flex flex-col gap-34">
              <div className="flex flex-row items-center gap-16 justify-center">
                <img src={getImageUrl('@/assets/images/_global/icon12.svg')} alt="" />
                <span className="f-28" style={{ color: 'rgba(255, 255, 253, 0.8)' }}>
                  Prediction Team
                </span>
                <img src={getImageUrl('@/assets/images/_global/icon12.svg')} alt="" />
              </div>
              <img className="main-img" src={getImageUrl('@/assets/images/_global/team.png')} />
            </div>
            <div className="i-card flex flex-col gap-34">
              <div className="flex flex-row items-center gap-16 justify-center">
                <img src={getImageUrl('@/assets/images/_global/icon12.svg')} alt="" />
                <span className="f-28" style={{ color: 'rgba(255, 255, 253, 0.8)' }}>
                  Prediction Market
                </span>
                <img src={getImageUrl('@/assets/images/_global/icon12.svg')} alt="" />
              </div>
              <img className="main-img" src={getImageUrl('@/assets/images/_global/market.png')} />
            </div>
          </div>
        </section>

        <section className="sc4 minw-1200 relative flex flex-col items-center gap-70">
          <div className="flex flex-col items-center gap-24">
            <div className="f-48">ROAD MAP</div>
          </div>
          <div className="flex flex-col gap-50 w-full maxw-1250">
            <div className="roadmap-1 flex flex-col gap-30">
              <div className="flex flex-row ">
                {roadmap1.map((i) => (
                  <div key={i.title} className="flex-1 flex flex-row gap-6">
                    <span className="f-28">{i.title}</span>
                    <span className="f-28 active-color">{i.y}</span>
                  </div>
                ))}
              </div>
              <div className="line flex flex-row ">
                <div className="flex-1">
                  <img src={getImageUrl('@/assets/images/_global/icon6.svg')} alt="" />
                </div>
                <div className="flex-1">
                  <img src={getImageUrl('@/assets/images/_global/icon6.svg')} alt="" />
                </div>
                <div className="flex-1">
                  <img src={getImageUrl('@/assets/images/_global/icon6.svg')} alt="" />
                </div>
              </div>
              <div className="flex flex-row ">
                {roadmap1.map((i, index) => (
                  <div key={index} className="flex flex-col flex-1 gap-10">
                    {i.contents.map((j) => (
                      <div className="flex flex-row items-start gap-10">
                        {i.contentsPrefix}
                        <div className="f-18 maxw-300" style={{ color: '#CFCFB0' }}>
                          {j}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="roadmap-2 flex flex-col gap-30">
              <div className="flex flex-row ">
                {roadmap2.map((i) => (
                  <div key={i.title} className="flex-1 flex flex-row gap-6">
                    <span className="f-28">{i.title}</span>
                    <span className="f-28 active-color">{i.y}</span>
                  </div>
                ))}
              </div>
              <div className="line flex flex-row ">
                <div className="flex-1">
                  <img src={getImageUrl('@/assets/images/_global/icon6.svg')} alt="" />
                </div>
                <div className="flex-1">
                  <img src={getImageUrl('@/assets/images/_global/icon6.svg')} alt="" />
                </div>
                <p className="flex-1 relative">
                  <img src={getImageUrl('@/assets/images/_global/icon14.svg')} />
                  <img src={getImageUrl('@/assets/images/_global/icon15.svg')} />
                </p>
              </div>
              <div className="flex flex-row ">
                {roadmap2.map((i, index) => (
                  <div key={index} className="flex flex-col flex-1 gap-10">
                    {i.contents.map((j) => (
                      <div className="flex flex-row items-start gap-10">
                        {i.contentsPrefix}
                        <div className="f-18 maxw-300" style={{ color: '#CFCFB0' }}>
                          {j}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sc5 minw-1200 relative flex flex-col items-center gap-70">
          <div className="flex flex-col items-center gap-24">
            <div className="f-48">TAROT COMMUNITY AMBASSADORS</div>
          </div>
          <div className="flex flex-col gap-40 maxw-1250 ">
            <div className="flex flex-row justify-center gap-50 flex-wrap">
              {filteredTarots.map((i, index) => (
                <div key={index} className="thin-border flex flex-row items-center justify-center">
                  <div className="c relative flex-wrap flex flex-col items-center justify-center">
                    <div className="relative">
                      {i.src}
                      <div className="desc flex flex-col gap-8 f-17">
                        <div className="flex flex-row items-center gap-6 flex-wrap">
                          <span style={{ color: '#CFCFB0' }}>Name: </span>
                          <span style={{ color: '#CFCFB0' }}>{i.name}</span>
                        </div>

                        <div className="flex flex-row items-center gap-6 flex-wrap">
                          <span style={{ color: '#CFCFB0' }}>Country: </span>
                          <span style={{ color: '#CFCFB0' }}>{i.country}</span>
                        </div>

                        <div className="flex flex-row items-center gap-6 flex-wrap">
                          <span style={{ color: '#CFCFB0' }}>Languages: </span>
                          <span style={{ color: '#CFCFB0' }}>{i.lng}</span>
                        </div>

                        <div className="flex flex-row items-center gap-6 flex-wrap">
                          <span style={{ color: '#CFCFB0' }}>Sign: </span>
                          <span style={{ color: '#CFCFB0' }}>{i.sign}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                // <span key={index}>{i}</span>
              ))}
            </div>
            <div className="flex flex-row gap-30 justify-center items-center">
              <img
                onClick={handleMinus}
                className={`pointer ${curPage === 1 ? 'disable' : ''}`}
                src={getImageUrl('@/assets/images/_global/icon-left.svg')}
              />
              <img
                onClick={handleAdd}
                className={`pointer ${curPage === totalPage ? 'disable' : ''}`}
                src={getImageUrl('@/assets/images/_global/icon-right.svg')}
              />
            </div>
          </div>
        </section>

        <section className="sc6 minw-1200 relative flex flex-col items-center gap-70">
          <div className="flex flex-row items-center justify-center gap-20">
            <img src={getImageUrl('@/assets/images/_global/icon13.svg')} alt="" />
            <div className="f-48">OUR PARTNERS</div>
            <img src={getImageUrl('@/assets/images/_global/icon13.svg')} alt="" />
          </div>

          <div className="scroll-logo-container maxw-1250 flex flex-col gap-10">
            <div className="flex flex-row items-center gap-40">
              {[...partner, ...partner, ...partner, ...partner].map((i) => (
                <div key={i.name}>{i.img}</div>
              ))}
            </div>
            <div className="flex flex-row items-center gap-40">
              {[...partner, ...partner, ...partner, ...partner].reverse().map((i) => (
                <div key={i.name}>{i.img}</div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '110px' }} className="maxw-1250">
            <div className="flex flex-row gap-180">
              <div className="relative">
                <img src={getImageUrl('@/assets/images/_global/icon18.png')} alt="" />
                <img className="a-nft" src={getImageUrl('@/assets/images/_global/NFT-left.png')} alt="" />
              </div>
              <div className="flex flex-col gap-44 ">
                <span className="f-48">NEWS ABOUT US</span>
                <div className="maxw-484 f-22" style={{ color: '#9A9A9A', textAlign: 'left' }}>
                  TAROTPI is a platform for fate prediction and card sales, including 10,000 NFT cards，Including 22
                  large cards, which will be issued and sold through Opensea. And the constellation prediction platform
                  will also be launched.
                </div>
                <div className="flex flex-row flex-wrap gap-34">
                  {partner.map((i) => (
                    <div className="flex-1" style={{ maxWidth: '30%' }} key={i.name}>
                      {i.img}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc7 minw-1200 relative flex flex-col items-center gap-40">
          <div className="flex flex-row items-center justify-center gap-20">
            <img src={getImageUrl('@/assets/images/_global/icon13.svg')} alt="" />
            <div className="f-48">JOIN OUR COMMUNITY</div>
            <img src={getImageUrl('@/assets/images/_global/icon13.svg')} alt="" />
          </div>
          <div className="f-22 maxw-858" style={{ color: '#9A9A9A' }}>
            In our community, there will be the latest horoscope NFT hairstyle trends, live broadcast to predict the
            horoscope.
          </div>
          <div className="flex flex-row gap-40">
            {meidas.map((i) => (
              <a href={i.href} key={i.type}>
                <div>{i.img}</div>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}

Component.displayName = 'Home';
