import WalletModal from '@/components/WalletModal';
import { navs } from '@/configs/common';
import useWatchAsset from '@/hooks/useWatchAsset';
import { getImageUrl } from '@/utils/tools';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 22px 32px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .nav-label {
    font-family: Inter;
    font-size: 16px;
  }

  .active-link {
    position: relative;

    div {
      color: #ffde82;
    }
    /* &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #ffde82;
      border-top: none;
      min-width: 55px;
      height: 15px;

      background: linear-gradient(to bottom, rgba(255, 222, 130, 0) 0%, rgba(255, 222, 130, 0.2) 100%);

      width: 100%;
      padding: 0 6px;
    } */
  }
`;

const WalletHeader = () => {
  const { pathname } = useLocation();

  return (
    <Container className="flex flex-row items-center justify-between">
      <div className="flex-1">
        <img src={getImageUrl('@/assets/images/_global/nav-logo.svg')} />
      </div>

      <div
        className="flex flex-row gap-20 items-center flex-1 justify-center"
        style={{
          marginLeft: '-181px',
        }}
      >
        {navs.map((i, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive || pathname === i?.extraHref ? 'active-link' : '')}
            to={i.href}
            target={i?.href?.startsWith('https') ? '_blank' : '_self'}
          >
            <div className="pointer nav-label">
              {i.label}
            </div>
          </NavLink>
        ))}
      </div>

      <div className="flex-1 justify-end items-center flex flex-row">
        <WalletModal />
      </div>
    </Container>
  );
};

export default WalletHeader;
