import { Button, Input, Modal } from '@/components';
import { useBoolean } from 'ahooks';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import ClaimModal from './claimModal';
import useDepositHistory from '@/hooks/useDepositHistory';
import useAuth from '@/hooks/useAuth';
import BigNumber from 'bignumber.js';
import useMobile from '@/hooks/useMobile';

// {
//   "amount": "1000",
//   "depositId": "8",
//   "createdAt": "1692192961",
//   "id": "0x29a1d36af1886dbbe59e5b7533624018ac626c1ed5cc3a4b5c7bba1063c89c9a-5",
//   "paid": "150",
//   "user": "0x0fb0a5c94b0b6464fd4e5edf43b2aebce11814bc",
//   "stageId": "0"
// }

const Container = styled(Modal)`
  .inside {
    position: relative;
  }
  .modal-content-container {
    max-width: 932px;
    width: calc(100vw - 18px);
    padding: 24px;
    .divider {
      width: 100%;
      height: 1px;
      background: #333230;
    }

    .f-12-mobile {
      color: var(--unnamed, #999898);
      text-align: right;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
    }
    .f-14-mobile {
      color: #fefcfa;
      text-align: right;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 114.286% */
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

    .f-12 {
      color: #9e9d9a;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 150% */
    }
    .claim-tart {
      position: absolute;
      top: 15px;
      right: 0;
      transform: translate(-50%, 0%);
      cursor: pointer;
      color: var(--unnamed, #fbc65f);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 214.286% */
    }
    .claim-tart-mobile{
      text-align: right;
      cursor: pointer;
      color: var(--unnamed, #fbc65f);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 214.286% */
    }
    table {
      thead {
        tr {
          background-color: #33312d;
        }
      }
      td,
      th {
        padding: 14px 0;
        &:first-of-type {
          padding-left: 20px;
        }
        &:last-of-type {
          padding-right: 20px;
        }
      }
    }
  }
`;

const colums: any = [
  {
    timestamp: 1692016059,
    action: 'Buy',
    amount: '4000',
    lockTime: '9 months',
    released: '2000',
    remain: '200',
    status: 'All Unlocked',
  },
  {
    timestamp: 1692016059,
    action: 'Buy',
    amount: '4000',
    lockTime: '9 months',
    released: '2000',
    remain: '200',
    status: 'All Unlocked',
  },
];

const BuyModal = ({ visible, onClose }: { visible: boolean; onClose: any }) => {
  const { run, history, releasingAmount, cancel } = useDepositHistory();
  const ifMobile = useMobile();

  const { address } = useAuth(true);
  const [submitted, { setTrue, setFalse }] = useBoolean(false);
  const [claimTartVisible, { setTrue: claimTartVisibleSetTrue, setFalse: claimTartVisibleSetFalse }] =
    useBoolean(false);
  useEffect(() => {
    if (visible) {
      setFalse();
    }
  }, [visible]);

  useEffect(() => {
    if (address) {
      run(address);
      return () => {
        cancel();
      };
    } else {
      cancel();
    }
  }, [address]);

  return (
    <>
      <Container visible={visible} onClose={onClose} onCancel={onClose} title="My order and claim history">
        <div className="modal-content-container flex flex-col gap-20">
          {!releasingAmount || BigNumber(releasingAmount).lte(0) ? null : (
            <div className={`active-color ${ifMobile ? 'claim-tart-mobile' : 'claim-tart'}`} onClick={claimTartVisibleSetTrue}>
              Claim released TART
            </div>
          )}



          {ifMobile ? (
            <div className="flex flex-col gap-14">
              <>
                <div className="flex flex-row items-center justify-between">
                  <span className="f-12-mobile">Action/Lock/Status</span>
                  <span className="f-12-mobile">Amount/Released&To released/Data</span>
                </div>
                <div className="flex flex-col">
                  {history?.map((i, index) => (
                    <div key={index} className="flex flex-col gap-12">
                      <div className="flex flex-row items-center justify-between">
                        <span style={{ color: '#E7BB41' }} className="f-14-mobile">
                          {i.type}
                        </span>
                        <span className="f-14-mobile">{i.amount} TART</span>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <span className="f-14-mobile">
                          {i?.lockTime ? dayjs.unix(i.lockTime).format('DD/MM/YYYY HH:mm:ss') : '-'}
                        </span>
                        <span className="f-14-mobile">
                          {i.released || '-'} ; {i.remain || '-'} TART
                        </span>
                      </div>
                      <div className="flex flex-row items-center justify-between">
                        <span style={{ color: '#CBCAC4' }} className="f-14-mobile">
                          {i.status}
                        </span>
                        <span style={{ color: '#CBCAC4' }} className="f-14-mobile underlined">
                          {dayjs.unix(i.createdAt).format('DD/MM/YYYY HH:mm:ss')}
                        </span>
                      </div>
                      <div className="divider" style={{ margin: '2px 0 14px' }} />
                    </div>
                  ))}
                </div>
              </>
            </div>
          ) : history?.length ? (
            <div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="f-14 align-left">Date</th>
                    <th className="f-14 align-left">Action</th>
                    <th className="f-14 align-left">Amount(TART)</th>
                    <th className="f-14 align-left">LockTime</th>
                    <th className="f-14 align-left">Released(TART)</th>
                    <th className="f-14 align-left">To released</th>
                    <th className="f-14 align-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history?.map((i, index) => (
                    <tr key={index}>
                      <td className="f-14 align-left">{dayjs.unix(i.createdAt).format('DD/MM/YYYY HH:mm:ss')}</td>
                      <td className="f-14 align-left">
                        <span>{i.type}</span>
                      </td>
                      <td className="f-14 align-left">{i.amount}</td>
                      <td className="f-14 align-left">
                        {i?.lockTime ? dayjs.unix(i.lockTime).format('DD/MM/YYYY HH:mm:ss') : '-'}
                      </td>
                      <td className="f-14 align-left">{i.released || '-'}</td>
                      <td className="f-14 align-left">{i.remain || '-'}</td>
                      <td className="f-14 align-right">{i.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center f-12" style={{ padding: '100px 0' }}>
              All records loaded
            </div>
          )}
        </div>
      </Container>
      <ClaimModal visible={claimTartVisible} onClose={claimTartVisibleSetFalse} />
    </>
  );
};

export default BuyModal;
