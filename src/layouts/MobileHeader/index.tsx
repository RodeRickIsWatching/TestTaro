import { getImageUrl } from '@/utils/tools';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  padding: 22px 32px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .nav-label {
    font-family: Inter;
  }

  .active-link {
    position: relative;
    &::after {
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
    }
  }
`;

const navs = [
  { label: 'Home', href: '/home', extraHref: '/' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Artists', href: '/artists' },
  { label: 'Community', href: '/community' },
  { label: 'Collections', href: '/collections' },
];

const MobileHeader = () => {
  const { pathname } = useLocation();

  return (
    <Container className="flex flex-row items-center justify-between">
      <div>
        <img src={getImageUrl('@/assets/images/_global/nav-logo.svg')} />
      </div>

      <div className="flex flex-row gap-20 items-center">
        {/* {navs.map((i, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive || pathname === i?.extraHref ? 'active-link' : '')}
            to={i.href}
          >
            <div className="pointer nav-label">{i.label}</div>
          </NavLink>
        ))} */}
      </div>
    </Container>
  );
};

export default MobileHeader;
