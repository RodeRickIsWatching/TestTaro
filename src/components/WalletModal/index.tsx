import { styled } from 'styled-components';
import { Button } from '..';
import useAuth from '@/hooks/useAuth';
import { injectedConnector } from '@/configs/wallet';
import { filterHideText, getImageUrl } from '@/utils/tools';
import useChainWatcher from '@/hooks/useChainWatcher';
import useBalance from '@/hooks/useBalance';
import { tartContract } from '@/configs/common';
import useWatchAsset from '@/hooks/useWatchAsset';

const RoundStatus = styled.div<{ status: string }>`
  width: 6px;
  height: 6px;
  margin: 4px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case 'warning':
        return '#FBC65F';
      case 'success':
        return '#25B23C';
      case 'error':
        return '#E33319';
      default:
        return '#FBC65F';
    }
  }};
`;

const Container = styled.div`
  .component-button.connect {
    border-radius: 12px;
    border: 1px solid var(--unnamed, #fbc65f);
    padding: 8px 20px;
  }

  .f-16 {
    color: #fbc65f;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }

  .connected {
    .tart-balance {
      padding: 10px 16px;
      min-width: 109px;
      height: 40px;
      flex-shrink: 0;
      background-color: rgba(251, 198, 95, 0.2);
      border-radius: 16px;
      .f-14 {
        color: #fefcfa;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }
    }

    .profile-container {
      border: 1px solid #353535;
      border-radius: 16px;
      padding: 7px 14px;

      .verticle-seperator {
        height: 100%;
        width: 1px;
        background-color: #999898;
        height: 20px;
      }

      .f-14 {
        color: var(--white, #fff);
        font-variant-numeric: lining-nums proportional-nums;

        /* Paragraph/Regular */
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
      }
    }
  }
`;

const WalletModal = () => {
  const { connect, isConnected, isConnecting, address } = useAuth(true);

  const { chain, status, chains, unsupported, isLoading, pendingChainId, setupNetwork } = useChainWatcher();

  const { balance } = useBalance();
  const { watchTart } = useWatchAsset();

  return (
    <Container>
      {isConnected ? (
        <div className="connected flex flex-row items-center gap-18">
          <div className="tart-balance flex flex-row items-center gap-8">
            <img onClick={watchTart} src={getImageUrl('@/assets/images/_global/symbol/tart.svg')} />
            <span className="f-14">{balance?.[tartContract.address.toLowerCase()]?.balanceReadable}</span>
          </div>
          <div
            className="profile-container flex flex-row items-center gap-10 pointer"
            onClick={() => {
              if (!unsupported) return;
              setupNetwork();
            }}
          >
            <div className="flex flex-row items-center gap-2">
              <RoundStatus status={unsupported ? 'error' : 'success'} />
              <span className="f-14">{unsupported ? 'wrong network' : chain?.name}</span>
            </div>
            <div className="verticle-seperator" />
            <div className="f-14">{filterHideText(address as string, 8, 2)}</div>
          </div>
        </div>
      ) : (
        <Button
          type="solid"
          className="connect"
          onClick={() => {
            if (isConnecting || isConnected) return;
            connect({ connector: injectedConnector });
          }}
        >
          <div className="p-14-53 flex flex-row items-center gap-10">
            <div className="f-16">
              {isConnected ? filterHideText(address as string, 8, 2) : isConnecting ? 'Loading...' : 'Connect Wallet'}
            </div>
          </div>
        </Button>
      )}
    </Container>
  );
};

export default WalletModal;
