import { MAX_ALLOWANCE, presaleContract, usdtContract } from '@/configs/common';
import { recoilBalance } from '@/models';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import useAuth from './useAuth';
import { catchError } from '@/utils/tools';
import { ethers } from 'ethers';
import { Address } from 'wagmi';
import BigNumber from 'bignumber.js';

const useBalance = () => {
  const { connector } = useAuth(true);

  const [balance] = useRecoilState(recoilBalance);
  const usdtBalance = useMemo(() => {
    if (!balance) return;
    const base = balance?.[usdtContract.address?.toLowerCase()]?.balanceReadable;
    return BigNumber(base).toFixed(6, BigNumber.ROUND_DOWN)
  }, [balance]);

  const presaleAllowance = useMemo(() => {
    if (!balance) return;
    return balance?.[usdtContract.address?.toLowerCase()]?.allowance;
  }, [balance]);

  const approve = async () => {
    try {
      const signer = await connector?.getSigner();
      // erc20
      const contract = new ethers.Contract(usdtContract?.address as Address, usdtContract?.abi, signer);

      const tx = await contract?.approve(presaleContract?.address, MAX_ALLOWANCE);
      const result = await tx?.wait();

      return result;
    } catch (e) {
      throw e
      catchError(e);
    }
  };

  return { balance, usdtBalance, presaleAllowance, approve };
};

export default useBalance;
