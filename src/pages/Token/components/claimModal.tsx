import { Button, Input, Modal, message } from '@/components';
import { isDev, presaleContract } from '@/configs/common';
import useAuth from '@/hooks/useAuth';
import useDepositHistory from '@/hooks/useDepositHistory';
import { catchError, jumpLink } from '@/utils/tools';
import { useBoolean } from 'ahooks';
import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
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
    .f-24 {
      color: var(--unnamed, #fbc65f);
      text-align: center;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 34px; /* 141.667% */
    }
  }
`;

const ClaimModal = ({ visible, onClose }: { visible: boolean; onClose: any }) => {
  const { releasingAmount, totalReleasingAmount } = useDepositHistory();
  const { connector } = useAuth(true);

  const [curTx, setCurTx] = useState('');

  const [loading, { setTrue: setTrueLoading, setFalse: setFalseLoading }] = useBoolean(false);

  const [submitted, { setTrue, setFalse }] = useBoolean(false);
  useEffect(() => {
    if (visible) {
      setFalse();
    }
  }, [visible]);

  const handleConfirm = async () => {
    try {
      setTrueLoading();
      const signer = await connector?.getSigner();
      // erc20
      const contract = new ethers.Contract(presaleContract?.address as Address, presaleContract?.abi, signer);

      const tx = await contract?.claimAll();
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
    <Container visible={visible} onClose={onClose} onCancel={onClose} title="Claim TART">
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
            <div className="flex flex-col gap-10 items-center">
              <div className="flex flex-row items-center justify-between">
                <span className="f-14" style={{ color: '#FEFCFA' }}>
                  Claim Amount
                </span>
              </div>
              <span className="f-24">{releasingAmount || '-'}&nbsp;TART</span>
            </div>
            <div className="divider" />
            <div className="flex flex-col gap-22">
              <div className="flex flex-col gap-14">
                <div className="flex flex-row items-center justify-between">
                  <span className="f-14">Total Unreleased</span>
                  <span className="f-14">{totalReleasingAmount || '-'} TART</span>
                </div>
              </div>
              <Button
                type="tart"
                onClick={handleConfirm}
                loading={loading}
                disabled={!releasingAmount || BigNumber(releasingAmount).lte(0)}
              >
                <div style={{ height: '42px' }} className="flex flex-row items-center ">
                  <span>Confirm</span>
                </div>
              </Button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default ClaimModal;
