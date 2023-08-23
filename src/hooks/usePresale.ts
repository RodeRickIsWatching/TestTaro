import { multicall } from '@wagmi/core';
import useAuth from './useAuth';
import { useRequest } from 'ahooks';
import { useRecoilState } from 'recoil';
import { recoilBalance, recoilPresaleInfo } from '@/models';
import { ethers } from 'ethers';
import { basicChainId, presaleContract, tartContract, usdtContract } from '@/configs/common';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import BigNumber from 'bignumber.js';

const stages = 2;

const usePresale = () => {
  const { connector } = useAuth(true);
  const [presale, setPresale] = useRecoilState(recoilPresaleInfo);

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

    let p: any[] = [
      {
        ...presaleContract,
        chainId: basicChainId,
        functionName: 'getStageInfo',
        args: ['0'],
      },
      {
        ...presaleContract,
        chainId: basicChainId,
        functionName: 'getStageInfo',
        args: ['1'],
      },
      // {
      //   ...presaleContract,
      //   chainId: basicChainId,
      //   functionName: 'getStageInfo',
      //   args: ['2'],
      // },
      {
        ...presaleContract,
        chainId: basicChainId,
        functionName: 'currentStage',
        args: [],
      },
      // {
      //   ...presaleContract,
      //   chainId: basicChainId,
      //   functionName: 'depositsCount',
      //   args: [],
      // },
    ];

    // if (address) {
    //   p = [
    //     ...p,
    //     {
    //       ...usdtContract,
    //       chainId: basicChainId,
    //       functionName: 'decimals',
    //       args: [],
    //     },
    //     {
    //       ...usdtContract,
    //       chainId: basicChainId,
    //       functionName: 'balanceOf',
    //       args: [address],
    //     },
    //     {
    //       ...usdtContract,
    //       chainId: basicChainId,
    //       functionName: 'allowance',
    //       args: [address, presaleContract.address],
    //     },
    //     {
    //       ...tartContract,
    //       chainId: basicChainId,
    //       functionName: 'decimals',
    //       args: [],
    //     },
    //     {
    //       ...tartContract,
    //       chainId: basicChainId,
    //       functionName: 'balanceOf',
    //       args: [address],
    //     },
    //     {
    //       ...tartContract,
    //       chainId: basicChainId,
    //       functionName: 'allowance',
    //       args: [address, presaleContract.address],
    //     },
    //   ];
    // }

    try {
      const res = await multicall({
        contracts: p,
      });

      const result: any = {};

      const stageInfo = res.slice(0, stages);
      const otherInfo = res.slice(stages);

      stageInfo.forEach((i: any, index: number) => {
        const overWrittenIndex = +index + 1;
        const addr = p[index]?.address?.toLowerCase();
        if (!result[`${addr}`]) {
          result[`${addr}`] = {};
        }

        const totalLimit = i?.totalLimit.toString();
        const leftLimit = i?.leftLimit.toString();

        const totalLimitReadable = ethers.utils.formatUnits(totalLimit, 18);
        const leftLimitReadable = ethers.utils.formatUnits(leftLimit, 18);

        result[`${addr}`][`stage-${index}`] = {
          leftLimit: leftLimit,
          lockDuration: i?.lockDuration?.toString(),
          price: i?.price?.toString(),
          totalLimit: totalLimit,

          leftLimitReadable: leftLimitReadable,
          priceReadable: ethers.utils.formatUnits(i?.price?.toString(), 8),
          totalLimitReadable: totalLimitReadable,
          index: +index + 2,
          depositsCount: BigNumber(totalLimit).minus(leftLimit).toString(),
          depositsCountReadable: BigNumber(totalLimitReadable).minus(leftLimitReadable).toString(),
        };
      });

      otherInfo.forEach((i: any, index) => {
        const curIndex = +index + +stages;

        const addr = p[curIndex]?.address?.toLowerCase();
        if (!result[`${addr}`]) {
          result[`${addr}`] = {};
        }

        result[`${addr}`][p[curIndex].functionName] = i?._isBigNumber ? i.toString() : i;
        result[`${addr}`][`${p[curIndex].functionName}Readable`] = ethers.utils.formatUnits(
          i?._isBigNumber ? i.toString() : i,
          18,
        );
      });

      setPresale(result);

      return result;
    } catch (e) {
      console.log('e', e);
    }
  };

  const curStageInfo = useMemo(() => {
    if (!presale) return;
    const info = presale[presaleContract.address.toLowerCase()];

    let curStage = {
      leftLimit: '0',
      lockDuration: '0',
      price: '0',
      totalLimit: '0',
      leftLimitReadable: '0',
      priceReadable: '0',
      totalLimitReadable: '0',
      index: '0',
    };
    const stage1 = info?.['stage-0'];
    const stage2 = info?.['stage-1'];
    const ifStage1Complete = BigNumber(info?.['stage-0']?.leftLimit).lte(0);
    const ifStage2Complete = BigNumber(info?.['stage-1']?.leftLimit).lte(0);

    if (!ifStage1Complete) {
      curStage = stage1;
    } else if (!ifStage2Complete) {
      curStage = stage2;
    }
    return {
      ...info,
      ...curStage,
    };
  }, [presale]);

  const props = useRequest(intervalUpdate, {
    manual: true,
    pollingInterval: 5000,
  });

  return { ...props, presale, curStageInfo };
};

export default usePresale;
