import { multicall } from '@wagmi/core';
import useAuth from './useAuth';
import { useRequest } from 'ahooks';
import { useRecoilState } from 'recoil';
import { recoilBalance } from '@/models';
import { ethers } from 'ethers';
import { basicChainId, presaleContract, tartContract, usdtContract } from '@/configs/common';

const useUpdate = () => {
  const { connector } = useAuth(true);
  const [balance, setBalance] = useRecoilState(recoilBalance);

  const intervalUpdate = async (
    props: any = {
      address: undefined,
    },
  ) => {
    const {
      address,
    }: {
      address?: string;
    } = props;

    let p: any[] = [];

    if (address) {
      p = [
        ...p,
        {
          ...usdtContract,
          chainId: basicChainId,
          functionName: 'decimals',
          args: [],
        },
        {
          ...usdtContract,
          chainId: basicChainId,
          functionName: 'balanceOf',
          args: [address],
        },
        {
          ...usdtContract,
          chainId: basicChainId,
          functionName: 'allowance',
          args: [address, presaleContract.address],
        },
        {
          ...tartContract,
          chainId: basicChainId,
          functionName: 'decimals',
          args: [],
        },
        {
          ...tartContract,
          chainId: basicChainId,
          functionName: 'balanceOf',
          args: [address],
        },
        {
          ...tartContract,
          chainId: basicChainId,
          functionName: 'allowance',
          args: [address, presaleContract.address],
        },
      ];
    }

    try {
      const res = await multicall({
        contracts: p,
      });

      const result: any = {};
      res.forEach((i: any, index) => {
        const addr = p[index]?.address?.toLowerCase();
        if (!result[`${addr}`]) {
          result[`${addr}`] = {};
        }

        if (p[index].functionName === 'balanceOf') {
          result[`${addr}`][p[index].functionName] = {
            balance: i?._isBigNumber ? i.toString() : i,
            balanceReadable: ethers.utils.formatUnits(
              i?._isBigNumber ? i.toString() : i,
              result[`${addr}`].decimals.toString(),
            ),
          };

          result[`${addr}`].balance = i?._isBigNumber ? i.toString() : i;
          result[`${addr}`].balanceReadable = ethers.utils.formatUnits(
            i?._isBigNumber ? i.toString() : i,
            result[`${addr}`].decimals.toString(),
          );
        } else {
          result[`${addr}`][p[index].functionName] = i?._isBigNumber ? i.toString() : i;
        }

        if (addr === usdtContract.address.toLowerCase()) {
          result[`${addr}`]['token'] = 'USDT';
        }
        if (addr === tartContract.address.toLowerCase()) {
          result[`${addr}`]['token'] = 'TART';
        }
      });

      setBalance(result);

      return result;
    } catch (e) {
      console.log('e', e);
    }
  };

  const props = useRequest(intervalUpdate, {
    manual: true,
    pollingInterval: 5000,
  });

  return { ...props };
};

export default useUpdate;
