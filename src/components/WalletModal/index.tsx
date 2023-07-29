import { styled } from "styled-components";
import { Button } from "..";
import useAuth from "@/hooks/useAuth";
import { injectedConnector } from "@/configs/wallet";
import { filterHideText } from "@/utils/tools";

const Container = styled.div`
  .f-14 {
    font-size: 14px;
    line-height: 21px;
  }

  .p-14-53 {
    padding: 14px 53px;
  }
`;

const WalletModal = () => {
  const { connect, isConnected, isConnecting, address } = useAuth(true);

  return (
    <Container>
      <Button
        type="solid"
        onClick={() => {
          if (isConnecting || isConnected) return;
          connect({ connector: injectedConnector });
        }}
      >
        <div className="p-14-53 flex flex-row items-center gap-10">
          <div className="f-14">
            {isConnected
              ? filterHideText(address as string, 8, 2)
              : isConnecting
              ? "Loading..."
              : "Connect Wallet"}
          </div>
        </div>
      </Button>
    </Container>
  );
};

export default WalletModal;
