/* eslint-disable no-negated-condition */
import Progress from '@/components/Progress';
import BaseLabel from '@/components/_global/BaseLabel';
import { getImageUrl, jumpLink } from '@/utils/tools';
import { useBoolean, useCountDown } from 'ahooks';
import { styled } from 'styled-components';
import BuyModal from './components/buyModal';
import ClaimModal from './components/claimModal';
import HistoryModal from './components/historyModal';
import { useMemo } from 'react';
import usePresale from '@/hooks/usePresale';
import { presaleContract } from '@/configs/common';
import BigNumber from 'bignumber.js';
import useMobile from '@/hooks/useMobile';
import Faq from 'react-faq-component';

const baseStage = 0;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 100vw;

  .bg-shadow {
    width: 434px;
    height: 305px;
    opacity: 0.3;
    background: #ecc600;
    filter: blur(175px);
    position: absolute;
    top: 108px;
    left: 171px;
  }

  .banner {
    width: 515px;
    height: 467.921px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(20%, -5%);
  }
  .mobile-banner {
    width: 375px;
    margin: auto;
  }

  .gap-194 {
    gap: 194px;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .f-56 {
    color: #fefcfa;
    font-family: Canela Trial;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 67.2px */
    letter-spacing: 3px;
  }

  .f-36 {
    color: var(--unnamed, #fbc65f);
    text-align: center;
    font-family: Canela Trial;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px; /* 94.444% */
    letter-spacing: 1.2px;
  }

  .f-22 {
    color: #cfcfb0;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-family: Canela Trial;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;
  }

  .f-22-active-color {
    color: var(--unnamed, #fbc65f);
    /* text-align: left; */
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    font-family: Canela Trial;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 26.4px */
    letter-spacing: 2px;
  }

  .f-48 {
    color: #fffffd;
    font-family: Canela Trial;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 57.6px */
    letter-spacing: 2px;
  }

  .f-31-mobile {
    color: var(--white-white-stich, #fffffd);
    text-align: center;
    font-family: Canela Trial;
    font-size: 31px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 37.2px */
  }

  .f-20-mobile {
    color: var(--white-white-stich, #fffffd);
    text-align: center;
    font-family: Canela Trial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .f-12-mobile {
    color: #cfcfb0;
    text-align: center;
    font-family: Canela Trial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
    letter-spacing: 1.5px;
  }

  .f-14-mobile {
    color: var(--unnamed, #fbc65f);
    text-align: center;
    font-family: Canela Trial;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: 1.75px;
  }

  .feature-card {
    border-radius: 12px;
    background: linear-gradient(153deg, rgba(255, 211, 77, 0.2) 0%, rgba(255, 211, 77, 0.05) 100%);

    img {
      width: 100%;
    }

    .f-24 {
      color: #fffffd;
      font-family: Canela Trial;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 34px; /* 141.667% */
      letter-spacing: 1.2px;
    }

    .f-18 {
      color: #cfcfb0;
      font-family: Canela Trial;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 144.444% */
      letter-spacing: 0.8px;
    }

    .f-18-mobile {
      color: var(--white-white-stich, #fffffd);
      font-family: Canela Trial;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 144.444% */
      letter-spacing: 1px;
    }

    .f-14-mobile {
      color: #cfcfb0;
      text-shadow: 0px 1.8052631616592407px 3.6105263233184814px rgba(0, 0, 0, 0.25);
      font-family: Canela Trial;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.722px;
    }
  }

  .presale-container {
    padding: 10px;

    .stage-label-container {
      .f-14 {
        color: var(--unnamed, #c2bdad);
        font-family: Canela Trial;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        letter-spacing: 1.451px;
      }
      .f-16 {
        color: var(--unnamed, #c2bdad);
        font-family: Canela Trial;
        font-size: 18.138px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 21.766px */
        letter-spacing: 1.814px;
      }
    }

    .container {
      border-radius: 4px;
      background: linear-gradient(180deg, rgba(64, 53, 21, 0.8) 0%, rgba(35, 35, 32, 0.8) 100%);
      backdrop-filter: blur(15px);
    }
    .border-1 {
      position: absolute;
      top: 0;
      left: 0;
    }
    .border-2 {
      position: absolute;
      top: 0;
      right: 0;
    }
    .border-3 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .border-4 {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .f-16 {
      color: #ccc7b8;
      text-align: center;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
      font-family: Canela Trial;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 19.2px */
      letter-spacing: 2px;
    }
    .f-18 {
      color: #cfcfb0;
      font-family: Canela Trial;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 166.667% */
      letter-spacing: 0.36px;
    }

    .f-30 {
      color: #fefcfa;
      font-family: Canela Trial;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 36px */
      letter-spacing: 2px;
    }

    .f-20 {
      color: #fff;
      font-family: Canela Trial;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 150% */
      letter-spacing: 0.6px;
    }

    .f-22 {
      font-family: Canela Trial;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 26.4px */
      letter-spacing: 1px;
    }

    .active {
      color: var(--unnamed, #fbc65f);
    }

    .progress-bar {
      width: 100%;
      height: 14px;
      .bar {
        height: 14px;
        position: inherit;
        transform: translate(0, 0);
        left: 0;
        top: 0;
      }
    }

    .count-down-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: linear-gradient(180deg, #bc9418 0%, #3f381d 100%);
      backdrop-filter: blur(19px);
      border: 1px solid #bc9418;
      font-family: Inter;
      font-weight: 700;
    }
    .count-down-item-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 12px;
      background: linear-gradient(180deg, #bc9418 0%, #3f381d 100%);
      backdrop-filter: blur(19px);
      border: 1px solid #bc9418;
      font-family: Inter;
      font-weight: 700;
    }
  }

  .faq-row-wrapper {
    width: 100%;
    margin: auto;
    background: transparent;
    .faq-body {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .faq-row {
      position: relative;
      padding: 0 20px !important;
      .icon-wrapper {
        position: static !important;
        /* top: 50%; */
        /* transform: translate(0, -50%); */
        svg {
          fill: #fff !important;
        }
      }
      border-radius: 8px;
      border: none;
      background: linear-gradient(90deg, #201d13 0%, #221f13 100%);
      padding: 0 40px;

      .row-content-text {
        /* height: 80px; */
        color: var(--1, #cbcac4) !important;
        font-family: PingFang SC;
        font-size: 14px !important;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
      }
      .row-title-text {
        color: var(--unnamed, #fefcfa);
        font-family: Canela Trial;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1px;
      }
      .row-content-text {
        border-top: 1px solid #333230;
        display: flex;
        align-items: center;
        padding: 16px 0 !important;
      }
    }
  }

  .buy-btn{
    border: none;
    backdrop-filter: none;
    &::before{
      background: url(${getImageUrl('@/assets/images/token/buy.svg')}) no-repeat;
      background-size: contain;
      opacity: 1;
      filter: none;
      
    }
  }
`;

const section5 = {
  rows: [
    {
      title: '1. Introduction',
      content:
        'This Privacy Policy outlines the way in which www.tarotpi.com and its affiliated entities collect, use, maintain, share, and safeguard user information on the TarotPi website. When "we", "our", or "us" is mentioned, it refers to TarotPi and its affiliates. Our commitment is to your privacy, and as described in this policy, we gather certain types of information for regulatory obligations and for purposes to help us enhance the services we offer.',
    },
    {
      title: '2. Information Collection',
      content: (
        <>
          Direct Information: This includes personal data you provide when you create a TarotPi account, possibly
          including your wallet address.
          <br />
          Indirect Information: This is garnered during your interaction with our services. Examples are:
          <br />
          Service Usage Information: This encompasses data such as access times, device data, and browser details.
          <br />
          Transaction Information: Transaction details might be collected for both personal and enterprise users.
        </>
      ),
    },
    {
      title: '3. Purposes of Data Collection',
      content: (
        <>
          Service Provisioning: To offer and maintain our array of services.
          <br />
          User Safety: For protective measures against potential threats like phishing, spam, or other cyber-attacks.
          <br />
          Legal & Regulatory Compliance: To meet legal requirements and respond to legal requests or demands.
          <br />
          Performance Analysis: To ensure that our platform runs efficiently and address any potential issues.
          <br />
          Communication: For direct communication, which is held in confidence.
          <br />
          Terms Enforcement: To ensure that users adhere to our Terms of Use.
        </>
      ),
    },
    {
      title: '4. Protection of User Data',
      content:
        "At TarotPi, we prioritize the safety and integrity of your data. We've incorporated various security protocols, such as PCI Scanning and SSL encryption, to safeguard your data. We also adopt internal access restrictions and physical security measures. However, please understand that no data transmission over the internet can be fully guaranteed to be secure.",
    },
    {
      title: '5. Changes to the Privacy Policy',
      content:
        'We may occasionally modify this Privacy Policy. Any significant changes will be communicated on our platform, and by continuing to use our services post-update, you consent to the revised policy.',
    },
    {
      title: '6. Contact Us',
      content:
        'Your trust is invaluable to us. If you have questions, concerns, or data protection requests related to our Privacy Policy, please reach out to us at contact@tarotpi.com.',
    },
  ],
};

const tartFeatureCard = [
  {
    title: 'Spice Up Your Prediction',
    content: (
      <>
        Participate in any prediction game
        <br />
        Engage in exciting team battle Stake to earn more TART
      </>
    ),
    banner: getImageUrl('@/assets/images/token/card-1.png'),
  },
  {
    title: 'Empower Your Tarot Card',
    content: (
      <>
        Upgrade your NFT tarot card for more rewards
        <br />
        Upgrade your minor arcana to boost your Tarot Card
        <br />
        Join Card Reading Game to see your future
        <br />
        Receive mystery box for more TART or tarot cards
      </>
    ),
    banner: getImageUrl('@/assets/images/token/card-2.png'),
  },
  {
    title: 'Enjoy Privilege in Tarotverse',
    content: (
      <>
        Open Marketplace to trade tarot cards
        <br />
        Participate in special events
        <br />
        Vote for future TarotPi initiatives
        <br />
        Purchase assets in future TarotPi expansion
      </>
    ),
    banner: getImageUrl('@/assets/images/token/card-3.png'),
  },
];

const startTime = 1692077403;

export function Component() {
  const ifMobile = useMobile();
  const [buyOrderVisible, { setTrue: buyOrderSetTrue, setFalse: buyOrderSetFalse }] = useBoolean(false);

  const [orderHistoryVisible, { setTrue: orderHistoryVisibleSetTrue, setFalse: orderHistoryVisibleSetFalse }] =
    useBoolean(false);

  const [startCountdown, formattedRes] = useCountDown({
    targetDate: startTime * 1000,
  });
  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  const { presale, curStageInfo } = usePresale();

  const depositsCountReadable = useMemo(() => {
    return BigNumber(curStageInfo?.depositsCountReadable).plus(baseStage).toString();
  }, [curStageInfo?.depositsCountReadable]);
  return (
    <>
      <Container
        className={`flex flex-col items-center relative ${ifMobile ? 'gap-100' : 'gap-194'}`}
        style={{ padding: ifMobile ? '33px 6px 0' : '131px 0 0' }}
      >
        <div className="bg-shadow" style={ifMobile ? { width: '100vw' } : {}} />

        <div className="flex flex-col gap-55 w-full">
          <div className="flex flex-col gap-20 relative" style={ifMobile ? { marginBottom: '-100px' } : {}}>
            <div
              style={{ fontFamily: 'Canela Trial Bold' }}
              className={`${ifMobile ? 'align-center f-31-mobile' : 'f-56'}`}
            >
              TART:
              <br />
              Tarot, Predict and Win!
            </div>
            <div
              className={`${ifMobile ? 'align-center f-12-mobile' : 'f-22'}`}
              style={ifMobile ? { maxWidth: '320px', margin: 'auto' } : { maxWidth: '737px' }}
            >
              TART is your ticket to the prediction market, your entry to the TarotPi Card game and your bread and
              butter for the Tarotverse!
            </div>
            <div
              className={`pointer ${ifMobile ? 'align-center f-14-mobile' : 'f-22-active-color'}`}
              onClick={() => jumpLink('https://docs.tarotpi.com/tarotpi-tokenomics', '_blank')}
            >
              &gt;&gt;More Detail
            </div>

            <img
              className={ifMobile ? 'mobile-banner' : 'banner'}
              src={getImageUrl('@/assets/images/token/banner.png')}
            />
          </div>

          <div className="presale-container relative">
            <img className="border-1" src={getImageUrl('@/assets/images/token/border-1.svg')} />
            <img className="border-2" src={getImageUrl('@/assets/images/token/border-2.svg')} />
            <img className="border-3" src={getImageUrl('@/assets/images/token/border-3.svg')} />
            <img className="border-4" src={getImageUrl('@/assets/images/token/border-4.svg')} />
            <div
              className="container flex flex-col gap-50"
              style={{ padding: ifMobile ? '20px' : '35px', gap: ifMobile ? '22px' : '50px' }}
            >
              <div className="h-1 flex flex-row items-center justify-between flex-wrap gap-14">
                <div className="flex flex-row items-center gap-24">
                  <div
                    className="f-30"
                    style={
                      ifMobile
                        ? { fontSize: '21px', fontFamily: 'Canela Trial Bold' }
                        : { fontFamily: 'Canela Trial Bold' }
                    }
                  >
                    Stage{curStageInfo?.index || '-'}
                  </div>
                  <div className="flex flex-row items-center gap-12 stage-label-container">
                    <BaseLabel>
                      <div
                        className={ifMobile ? 'f-14' : 'f-16'}
                        // style={ifMobile ? { fontSize: '14px', color: '#C2BDAD!important' } : { color: '#C2BDAD!important' }}
                      >
                        Live
                      </div>
                    </BaseLabel>
                    <BaseLabel>
                      <div
                        className={ifMobile ? 'f-14' : 'f-16'}
                        // style={ifMobile ? { fontSize: '14px', color: '#C2BDAD!important' } : { color: '#C2BDAD!important' }}
                      >
                        BSC
                      </div>
                    </BaseLabel>
                  </div>
                </div>
                {/* count-down */}
                {ifMobile ? null : startCountdown ? (
                  <div
                    className={`flex flex-row items-center gap-10 ${ifMobile ? 'f-14-mobile' : 'f-18'}`}
                    style={{ fontFamily: 'Inter' }}
                  >
                    <span style={{ fontFamily: 'Canela Trial' }}>Start in</span>
                    <div className="count-down-item">{days}</div> D <div className="count-down-item">{hours}</div> H{' '}
                    <div className="count-down-item">{minutes}</div> M <div className="count-down-item">{seconds}</div>{' '}
                    S
                  </div>
                ) : (
                  <div className="f-18 pointer" style={{ color: '#FBC65F' }} onClick={orderHistoryVisibleSetTrue}>
                    Check my order and claim history
                  </div>
                )}
              </div>
              <div className="h-2 flex flex-col gap-15">
                <div className="flex flex-row items-center justify-between">
                  <div
                    className="flex flex-row gap-20 items-center"
                    style={
                      ifMobile
                        ? {
                            justifyContent: 'space-between',
                            width: '100%',
                          }
                        : {}
                    }
                  >
                    <span
                      className="f-22 active"
                      style={
                        ifMobile
                          ? { fontSize: '16px', fontFamily: 'Canela Trial Bold' }
                          : { fontFamily: 'Canela Trial Bold' }
                      }
                    >
                      TART Sold: {depositsCountReadable || '-'}
                    </span>
                    <span
                      className="f-22"
                      style={
                        ifMobile
                          ? { fontSize: '15px', fontFamily: 'Canela Trial Bold', color: '#FEFCFA' }
                          : { fontFamily: 'Canela Trial Bold', color: '#FEFCFA' }
                      }
                    >
                      1 TART = {curStageInfo?.priceReadable || '-'} USDT
                    </span>
                  </div>
                  {ifMobile ? null : (
                    <span className="f-18" style={{ fontFamily: 'Canela Trial Bold', fontSize: '20px' }}>
                      Total Stock Amount in this stage: {curStageInfo?.totalLimitReadable || '-'} TART
                    </span>
                  )}
                </div>
                <div className="progress relative">
                  <Progress
                    percent={BigNumber(depositsCountReadable)
                      .div(curStageInfo?.totalLimitReadable)
                      .multipliedBy(100)
                      .toString()}
                  />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="f-20" style={ifMobile ? { fontSize: '14px' } : {}}>
                    {curStageInfo?.leftLimitReadable || '-'} tokens remaining until price increases.
                  </span>
                  {ifMobile ? null : (
                    <div className="flex items-center">
                      <span className="f-20" style={{ fontFamily: 'Canela Trial Bold' }}>
                        {depositsCountReadable || '-'}
                      </span>
                      <span
                        className="f-20"
                        style={{ fontFamily: 'Canela Trial Bold', color: 'rgba(255, 255, 255, 0.46);' }}
                      >
                        /
                      </span>
                      <span className="f-20 active" style={{ fontFamily: 'Canela Trial Bold' }}>
                        {curStageInfo?.totalLimitReadable || '-'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="h-3 flex flex-row items-center justify-between"
                style={
                  ifMobile
                    ? {
                        flexDirection: 'column-reverse',
                        gap: '18px',
                      }
                    : {}
                }
              >
                <div>
                  <div
                    className="f-18"
                    style={{
                      fontSize: ifMobile ? '14px' : '18px',
                      letterSpacing: ifMobile ? '0.18px' : '0.36px',
                      lineHeight: ifMobile ? '20px' : '30px',
                    }}
                  >
                    The Token you buy in this stage will release daily in 9 month.
                  </div>
                  {!ifMobile ? null : startCountdown ? null : (
                    <div
                      className="f-18 pointer"
                      style={{
                        fontSize: ifMobile ? '14px' : '18px',
                        letterSpacing: ifMobile ? '0.18px' : '0.36px',
                        lineHeight: ifMobile ? '20px' : '30px',
                        color: '#FBC65F',
                      }}
                      onClick={orderHistoryVisibleSetTrue}
                    >
                      Check my order and claim history
                    </div>
                  )}
                </div>

                {!ifMobile ? null : startCountdown ? (
                  <div
                    className={`flex flex-row items-center gap-10 ${ifMobile ? 'f-14-mobile' : 'f-18'}`}
                    style={{ fontFamily: 'Inter' }}
                  >
                    <span style={{ fontFamily: 'Canela Trial' }}>Start in</span>
                    <div className="count-down-item-mobile">{days}</div> D{' '}
                    <div className="count-down-item-mobile">{hours}</div> H{' '}
                    <div className="count-down-item-mobile">{minutes}</div> M{' '}
                    <div className="count-down-item-mobile">{seconds}</div> S
                  </div>
                ) : null}

                <BaseLabel
                  disabled={!!startCountdown}
                  className="pointer buy-btn"
                  style={
                    ifMobile
                      ? {
                          width: '100%',
                        }
                      : {}
                  }
                  onClick={() => {
                    if (startCountdown) return;
                    buyOrderSetTrue();
                  }}
                >
                  <div style={{ color: '#FFFFFD', padding: '10px 20px', fontFamily: 'Canela Trial Bold' }} className="f-16">
                    {startCountdown ? 'Coming soon' : 'Buy Now'}
                  </div>
                </BaseLabel>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-col ${ifMobile ? 'gap-24' : 'gap-60'} items-center`}>
          <div className={ifMobile ? 'f-20-mobile' : 'f-48'}>WIth TART You can</div>
          <div className="flex flex-row items-center gap-30 flex-wrap justify-center">
            {tartFeatureCard.map((i, index) => (
              <div
                className="feature-card flex flex-col gap-28"
                key={index}
                style={
                  ifMobile
                    ? {
                        width: '343px',
                        height: '388px',
                        margin: 'auto',
                      }
                    : {
                        width: '380px',
                        height: '498px',
                      }
                }
              >
                <img src={i.banner} />
                <div className="flex flex-col gap-12" style={{ padding: '0 27px' }}>
                  <div className={ifMobile ? 'f-18-mobile align-left' : 'f-24'}>{i.title}</div>
                  <div className={ifMobile ? 'f-14-mobile align-left' : 'f-18'}>{i.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`flex flex-col ${ifMobile ? 'gap-24' : 'gap-60'} items-center`}>
          <div className={ifMobile ? 'f-20-mobile' : 'f-48'}>Privacy Policy for TarotPi</div>
          <div className="flex flex-row items-center gap-30 flex-wrap">
            <Faq
              data={section5}
              // styles={styles} config={config}
            />
          </div>

          <div
            className={`pointer flex flex-col ${ifMobile ? 'mt-20' : 'mt-20'} items-center`}
            onClick={() => jumpLink('https://docs.tarotpi.com/tarotpi-tokenomics/terms-of-service', '_blank')}
          >
            <div style={{ color: '#FBC65F' }} className={ifMobile ? 'f-20-mobile' : 'f-36'}>
              See more about T&Cs &gt;&gt;
            </div>
          </div>
        </div>
      </Container>
      <BuyModal visible={buyOrderVisible} onClose={buyOrderSetFalse} />

      <HistoryModal visible={orderHistoryVisible} onClose={orderHistoryVisibleSetFalse} />
    </>
  );
}

Component.displayName = 'Token';
