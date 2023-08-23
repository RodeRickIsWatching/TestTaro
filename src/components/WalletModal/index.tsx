import { styled } from 'styled-components';
import { Button, Modal, message } from '..';
import useAuth from '@/hooks/useAuth';
import { injectedConnector } from '@/configs/wallet';
import { filterHideText, getImageUrl } from '@/utils/tools';
import useChainWatcher from '@/hooks/useChainWatcher';
import useBalance from '@/hooks/useBalance';
import { tartContract } from '@/configs/common';
import useWatchAsset from '@/hooks/useWatchAsset';
import { useBoolean, useClickAway } from 'ahooks';
import { useRef } from 'react';
import { generateAvatar } from '@/utils/jazzIcon';
import clipboard from 'copy-to-clipboard';

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
  .round {
    border-radius: 50%;
  }
  /* .wallet-modal-trigger {
    margin-bottom: 22px;
    &:hover {
      .balance-modal-ctl {
        display: flex;
      }
    }
  } */
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

const StyledModal = styled.div`
  &.balance-modal-ctl {
    display: none;
    padding-top: 22px;
    margin-top: 22px;
    top: 100%;
    z-index: 22;
    right: 0;
    position: absolute;
    padding: 24px;
    width: 306px;
    /* height: 308px  ; */
    background: #212020;

    .f-14 {
      color: #deddd7;
      text-align: center;
      font-family: PingFang SC;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }

    .divider {
      height: 1px;
      width: 100%;
      background-color: #333230;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const WalletBalanceModal = ({ triggerRef, visible, onClose }: { triggerRef: any; visible: boolean; onClose?: any }) => {
  const { address, disconnect } = useAuth(true);
  const { balance, usdtBalance } = useBalance();

  const ref = useRef<HTMLButtonElement>(null);
  useClickAway(() => {
    onClose?.();
  }, [ref, triggerRef]);

  const handleCopy = async () => {
    await clipboard(address as string);
    message.success('Done')
  };

  return (
    <StyledModal
      ref={ref}
      className="balance-modal-ctl flex flex-col gap-20"
      style={{
        display: visible ? 'flex' : 'none',
      }}
    >
      <div className="flex flex-row items-center gap-10">
        <img className="round" src={generateAvatar(address || '', 22)} />
        <div className="f-14">{filterHideText(address as string, 8, 2)}</div>
        <div className="pointer" onClick={handleCopy}>
          <img src={getImageUrl('@/assets/images/_global/icon-copy.svg')} />
        </div>
      </div>
      <div className="divider" />
      <div className="flex flex-col gap-24">
        {Object.values(balance || {}).map((i: any, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div>
                <img src={getImageUrl(`@/assets/images/_global/symbol/${i.token?.toLowerCase()}.svg`)} />
              </div>
              <div>{i.token}</div>
            </div>
            <div>{i.balanceReadable}</div>
          </div>
        ))}
      </div>
      <div className="divider" />
      <Button
        style={{ padding: '11px 0', width: '100%', background: '#373733' }}
        type="dark"
        onClick={() => disconnect()}
      >
        <span className="f-14">Disconnect Wallet</span>
      </Button>
    </StyledModal>
  );
};

const WalletModal = () => {
  const { connect, isConnected, isConnecting, address } = useAuth(true);

  const { chain, status, chains, unsupported, isLoading, pendingChainId, setupNetwork } = useChainWatcher();

  console.log('chain', chain);

  const { balance } = useBalance();
  const { watchTart } = useWatchAsset();

  const [showWallet, { setTrue, setFalse }] = useBoolean(false);

  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Container>
        {isConnected ? (
          <div className="connected flex flex-row items-center gap-18">
            <div
              className="profile-container flex flex-row items-center gap-10 pointer"
              onClick={() => {
                if (!unsupported) return;
                setupNetwork();
              }}
            >
              <div className="flex flex-row items-center gap-6">
                {unsupported ? (
                  <RoundStatus status={unsupported ? 'error' : 'success'} />
                ) : (
                  <img src={getImageUrl('@/assets/images/_global/symbol/bnb.svg')} />
                )}

                <span className="f-14">{unsupported ? 'wrong network' : chain?.network}</span>
              </div>
            </div>
            <div className="tart-balance flex flex-row items-center gap-8">
              <img onClick={watchTart} src={getImageUrl('@/assets/images/_global/symbol/tart.svg')} />
              <span className="f-14">{balance?.[tartContract.address.toLowerCase()]?.balanceReadable}</span>
            </div>
            <div
              ref={triggerRef}
              className="profile-container flex flex-row items-center gap-10 pointer relative wallet-modal-trigger"
              onClick={() => {
                if (unsupported) return;
                if (showWallet) {
                  setFalse();
                } else {
                  setTrue();
                }
              }}
            >
              <div>
                <img className="round" src={generateAvatar(address || '', 22)} />
              </div>
              <div className="f-14">{filterHideText(address as string, 8, 2)}</div>

              <WalletBalanceModal triggerRef={triggerRef} onClose={setFalse} visible={showWallet} />
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
    </>
  );
};

export default WalletModal;
