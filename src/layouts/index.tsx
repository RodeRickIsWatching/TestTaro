import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Scrollbar } from '@/components';
import Header from './Header';
import '@/assets/styles/index.scss';
import Footer from './Footer';
import useMobile from '@/hooks/useMobile';
import MobileHeader from './MobileHeader';
import styled, { css } from 'styled-components';

const Container = styled.main<{ ifMobile?: boolean }>`
  ${({ ifMobile }) => ifMobile && css``}
`;

function BasicLayout() {
  const ifMobile = useMobile();

  return (
    <React.Fragment>
      {ifMobile ? <MobileHeader /> : <Header />}
      <Scrollbar id="vite-content" trackGap={[10, 10, 10, 10]}>
        <Container ifMobile={ifMobile}>
          <Outlet />
        </Container>

        <Footer />
      </Scrollbar>
    </React.Fragment>
  );
}

export default BasicLayout;
