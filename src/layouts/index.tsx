import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Scrollbar } from '@/components';
import Header from './Header';
import '@/assets/styles/index.scss';
import Footer from './Footer';
import useMobile from '@/hooks/useMobile';
import MobileHeader from './MobileHeader';

function BasicLayout() {
  const ifMobile = useMobile();

  return (
    <React.Fragment>
      {ifMobile ? <MobileHeader /> : <Header />}
      <Scrollbar id="vite-content" trackGap={[10, 10, 10, 10]}>
        <main>
          <Outlet />
        </main>

        <Footer />
      </Scrollbar>
    </React.Fragment>
  );
}

export default BasicLayout;
