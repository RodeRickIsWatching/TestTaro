import fetchDepositLogs from '@/graphql/history';
import { useRequest } from 'ahooks';
import { useMemo } from 'react';
import usePresale from './usePresale';
import { presaleContract } from '@/configs/common';
import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';
import { recoilReleasingAmount, recoilTotalReleasingAmount } from '@/models';

const mock = {
  depositLogs: [
    {
      amount: '66',
      depositId: '1',
      createdAt: '1692418747',
      id: '0x0ebd03fd49eb1c91e95c734c9d5b7e49850445f4f275910b71fe719132a8d929-5',
      paid: '9.9',
      user: '0x0FB0A5c94b0b6464fD4e5eDf43B2aEbCe11814Bc',
      stageId: '0',
    },
  ],
};

const useDepositHistory = () => {
  const [_releasingAmount, setReleasingAmount] = useRecoilState(recoilReleasingAmount);
  const [_totalReleasingAmount, setTotalReleasingAmount] = useRecoilState(recoilTotalReleasingAmount);
  const props: any = useRequest(fetchDepositLogs, {
    manual: true,
    pollingInterval: 5000,
  });

  const { presale } = usePresale();

  const stages = useMemo(() => {
    return presale?.[presaleContract?.address?.toLowerCase()];
  }, [presale]);

  const history = useMemo(() => {
    if (!props?.data) return;
    const depositLogs = props?.data?.depositLogs?.map((i: any) => {
      const releaseTimestamp = BigNumber(i?.createdAt).plus(stages?.[`stage-${i?.stageId}`]?.lockDuration).toString();
      const released = props?.data?.claimLogs?.reduce((prev, next) => {
        const p = next?.depositId === i?.depositId;
        return BigNumber(prev)
          .plus(p ? next?.amount : '0')
          .toString();
      }, '0');
      const remain = BigNumber.max('0', BigNumber(i?.amount).minus(released)).toString();

      return {
        ...i,
        type: `Buy(Stage ${+i?.stageId + 1})`,
        lockTime: releaseTimestamp,
        released: released,
        remain: remain,
        status: dayjs().isAfter(dayjs.unix(+releaseTimestamp)) ? 'Releasing' : 'All Unlocked',
      };
    });

    const claimLogs = props?.data?.claimLogs?.map((i: any) => {
      return {
        ...i,
        type: 'Claim',
        lockTime: '',
        released: '',
        remain: '',
        status: 'Arrived',
      };
    });

    return [...depositLogs, ...claimLogs].sort((a, b) => +a.createdAt - +b.createdAt);
  }, [props?.data, stages]);

  const releasingAmount = useMemo(() => {
    const amount = history?.reduce((previousValue, nextValue) => {
      return BigNumber(previousValue)
        .plus(nextValue?.status === 'Releasing' ? BigNumber.max(nextValue?.remain, '0') : '0')
        .toString();
    }, '0');
    setReleasingAmount(amount || '');
  }, [history]);

  const totalClaimed = useMemo(() => {
    const amount = history?.reduce((previousValue, nextValue) => {
      return BigNumber(previousValue)
        .plus(nextValue?.status === 'Arrived' ? BigNumber.max(nextValue?.amount, '0') : '0')
        .toString();
    }, '0');
    return amount;
  }, [history]);

  const totalReleased = useMemo(() => {
    const amount = history?.reduce((previousValue, nextValue) => {
      return BigNumber(previousValue)
        .plus(nextValue?.status === 'Releasing' ? BigNumber.max(nextValue?.amount, '0') : '0')
        .toString();
    }, '0');
    return amount;
  }, [history]);

  const totalReleasingAmount = useMemo(() => {
    const amount = BigNumber(totalReleased).minus(totalClaimed).toString();

    setTotalReleasingAmount(amount || '');
  }, [totalClaimed, totalReleased]);

  return { ...props, history, releasingAmount: _releasingAmount, totalReleasingAmount: _totalReleasingAmount };
};

export default useDepositHistory;
