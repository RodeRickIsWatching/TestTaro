import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Scrollbar } from '@/components';
import '@/assets/styles/index.scss';
import Footer from './Footer';
import useMobile from '@/hooks/useMobile';
import MobileHeader from './MobileHeader';
import styled, { css } from 'styled-components';
import WalletHeader from './WalletHeader';
import useAuth from '@/hooks/useAuth';
import useUpdate from '@/hooks/useUpdate';
import usePresale from '@/hooks/usePresale';

const Container = styled.main<{ ifMobile?: boolean }>`
  ${({ ifMobile }) => ifMobile && css``}
`;

function WalletLayout() {
  const ifMobile = useMobile();

  const { address } = useAuth(true);
  const { run, cancel } = useUpdate();
  const { run: presaleRun, cancel: presaleCancel } = usePresale();

  React.useEffect(() => {
    if (address) {
      run({ address });
    }
    return () => {
      cancel();
    };
  }, [address]);

  React.useEffect(() => {
    presaleRun();
    return () => {
      presaleCancel();
    };
  }, []);

  return (
    <React.Fragment>
      {ifMobile ? <MobileHeader /> : <WalletHeader />}
      <Scrollbar id="vite-content" trackGap={[10, 10, 10, 10]}>
        <Container ifMobile={ifMobile}>
          <Outlet />
        </Container>

        <Footer />
      </Scrollbar>
    </React.Fragment>
  );
}

export default WalletLayout;
