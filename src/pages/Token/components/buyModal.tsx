import { Button, Input, Modal, message } from '@/components';
import { usdtContract, presaleContract, MAX_ALLOWANCE, isDev } from '@/configs/common';
import useAuth from '@/hooks/useAuth';
import useBalance from '@/hooks/useBalance';
import usePresale from '@/hooks/usePresale';
import useUpdate from '@/hooks/useUpdate';
import { catchError, jumpLink } from '@/utils/tools';
import { useBoolean, useCountDown } from 'ahooks';
import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { Address } from 'wagmi';

const Container = styled(Modal)`
  .modal-content-container {
    max-width: 400px;
    width: calc(100vw - 18px);
    padding: 24px;
    .divider {
      width: 100%;
      height: 1px;
      background: #333230;
    }

    .f-14 {
      color: #cbcac4;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }

    .f-18 {
      color: #fefcfa;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 155.556% */
    }
  }
`;

const inputDecimal = 6;

const HistoryModal = ({ visible, onClose }: { visible: boolean; onClose: any }) => {
  const [submitted, { setTrue, setFalse }] = useBoolean(false);
  const { connector } = useAuth(true);
  useEffect(() => {
    if (visible) {
      setFalse();
    }
  }, [visible]);

  const { refresh } = useUpdate();
  const { presale, curStageInfo } = usePresale();

  const months = useMemo(() => {
    if (!curStageInfo?.lockDuration) return;
    return BigNumber(curStageInfo?.lockDuration / 3600 / 24 / 30).toFixed(0, BigNumber.ROUND_DOWN);
  }, [curStageInfo?.lockDuration]);

  const minutes = useMemo(() => {
    if (!curStageInfo?.lockDuration) return;
    return BigNumber(curStageInfo?.lockDuration / 60).toFixed(0, BigNumber.ROUND_DOWN);
  }, [curStageInfo?.lockDuration]);

  const { balance, approve, usdtBalance, presaleAllowance } = useBalance();
  const [buyAmount, setBuyAmount] = useState('');

  const [curTx, setCurTx] = useState('');

  const usdtAmount = useMemo(() => {
    return BigNumber(buyAmount || '0')
      .multipliedBy(curStageInfo?.priceReadable || '0')
      .toString();
  }, [buyAmount, curStageInfo?.priceReadable]);

  const curStageMaxValueRemaining = useMemo(() => {
    return BigNumber.min(usdtBalance || '0', curStageInfo?.leftLimitReadable || '0').toFixed(
      inputDecimal,
      BigNumber.ROUND_DOWN,
    );
  }, [curStageInfo?.leftLimitReadable, usdtBalance]);

  const handleMax = () => {
    if (!curStageMaxValueRemaining) return;

    console.log('curStageMaxValueRemaining', curStageMaxValueRemaining);
    setBuyAmount(curStageMaxValueRemaining as string);
  };

  const needApprove = useMemo(() => {
    const amount = ethers.utils.parseUnits(BigNumber(usdtAmount || '0').toFixed(6), 18).toString();

    console.log('amount', amount, presaleAllowance);
    return BigNumber(amount || '0').gt(presaleAllowance || '0');
  }, [usdtAmount, presaleAllowance]);

  const [loading, { setTrue: setTrueLoading, setFalse: setFalseLoading }] = useBoolean(false);

  const handleConfirm = async () => {
    const amount = ethers.utils.parseUnits(BigNumber(buyAmount || '0').toFixed(6), 18).toString();

    try {
      setTrueLoading();
      if (needApprove) {
        await approve();
        // refresh();
        // cancelAnimationFrame()
        setFalseLoading();
        return;
      }

      const signer = await connector?.getSigner();
      // erc20
      const contract = new ethers.Contract(presaleContract?.address as Address, presaleContract?.abi, signer);

      console.log('amount', amount);

      const tx = await contract?.deposit(amount);
      const result = await tx?.wait();
      console.log('result', result, tx);

      setCurTx(result?.transactionHash);
      //   refresh();
      setTrue();
      setFalseLoading();
      //   message.success('Success');
    } catch (e) {
      console.log('e', e);
      message.error(catchError(e));
      setFalseLoading();
    }
  };
  return (
    <Container visible={visible} onClose={onClose} onCancel={onClose} title="Buy Order">
      <div className="modal-content-container flex flex-col gap-20">
        {submitted ? (
          <>
            <div className="flex flex-col gap-16 items-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                <path
                  d="M33 66C14.7829 65.98 0.0200058 51.2171 0 33V32.34C0.362774 14.205 15.2941 -0.237685 33.4312 0.00296411C51.5683 0.243613 66.1112 15.0774 65.9926 33.2156C65.8741 51.3539 51.1386 65.9964 33 66Z"
                  fill="#27AF6C"
                />
                <path
                  d="M13.2002 36.3L17.8532 31.6471L26.4002 40.161L48.1472 18.4141L52.8002 23.1001L26.4002 49.5L13.2002 36.3Z"
                  fill="#FEFCFA"
                />
              </svg>

              <span className="f-18">Transcation submitted</span>
              <Button type="tart" onClick={onClose} className="w-full" style={{ marginTop: '12px' }}>
                <div style={{ height: '42px' }} className="flex flex-row items-center ">
                  <span>Close</span>
                </div>
              </Button>
              <span
                className="f-14 active-color pointer"
                style={{ color: '#FBC65F' }}
                onClick={() => {
                  //
                  jumpLink(`https://${isDev ? 'testnet.' : ''}bscscan.com/tx/${curTx}`, '_blank');
                }}
              >
                View on Block Explorer
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-10">
              <div className="flex flex-row items-center justify-between">
                <span className="f-14" style={{ color: '#FEFCFA' }}>
                  Buy Amount
                </span>
                <span className="f-14" style={{ color: '#9E9D9A' }}>
                  Balance: {usdtBalance || '-'}USDT
                </span>
              </div>
              <Input
                decimal={inputDecimal}
                onChange={setBuyAmount}
                value={buyAmount}
                max={curStageMaxValueRemaining}
                placeholder="Input Amount"
                suffix={
                  <div className="flex items-center gap-8">
                    <span className="f-14" style={{ color: '#9E9D9A' }}>
                      (～{usdtAmount || '-'} USDT)
                    </span>
                    <span className="f-14 pointer" style={{ color: '#FBC65F' }} onClick={handleMax}>
                      MAX
                    </span>
                  </div>
                }
              />
            </div>
            <div className="divider" />
            <div className="flex flex-col gap-22">
              <div className="flex flex-col gap-14">
                <div className="flex flex-row items-center justify-between">
                  <span className="f-14">Stage</span>
                  <span className="f-14">{curStageInfo?.index || '-'}</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="f-14">Cost</span>
                  <span className="f-14">{usdtAmount || '-'} USDT</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span className="f-14">LockTime</span>
                  <span className="f-14">{months || '-'} Months</span>
                </div>
              </div>
              <Button type="tart" onClick={handleConfirm} loading={loading}>
                <div style={{ height: '42px' }} className="flex flex-row items-center ">
                  {needApprove ? <span>Approve</span> : <span>Confirm</span>}
                </div>
              </Button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default HistoryModal;
