import { getImageUrl } from '@/utils/tools';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { useBoolean } from 'ahooks';
import { medias, navs } from '@/configs/common';

const Container = styled.div<{ opened?: boolean }>`
  padding: 22px 32px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  position: relative;
  .nav-label {
    font-family: Inter;
  }

  .active-link {
    position: relative;
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
    } */
  }

  .nav-label {
    font-size: 18px;
  }

  .bm-burger-button > button {
    z-index: ${({ opened }) => (opened ? 1 : -1)}!important;
  }
`;

const styles = {
  bmMenuWrap: {
    // top: '82px',
    width: '100%',
    backgroundColor: '#000',
    // position: 'absolute',
    height: '100vh',
    right: 0,
    top: 0,
    // paddingTop: '82px',
    // height: 'calc(100vh - 81px)',
    // overflow: 'hidden',
    // transform: 'translate3d(100%, 0px, 0px)',
  },
  bmItemList: {
    padding: '22px 32px',
    // display: 'flex',
    // flexDirection: 'column',
    // gap: '12px',
  },
  bmItem: {
    height: '100%',
    display: 'flex',
  },
};

const MobileHeader = () => {
  const { pathname } = useLocation();
  const [opened, { setTrue, setFalse, toggle }] = useBoolean(false);

  return (
    <Container className="flex flex-row items-center justify-between" opened={opened}>
      <div style={{ position: 'relative', zIndex: '3' }}>
        <img src={getImageUrl('@/assets/images/_global/nav-logo.svg')} />
      </div>

      <div className="flex flex-row gap-20 items-center">
        <Menu
          onStateChange={(state) => {
            if (state.isOpen) return;
            setFalse();
          }}
          right
          styles={styles}
          isOpen={opened}
          customBurgerIcon={
            <img
              onClick={toggle}
              style={{ width: '24px', height: '24px', position: 'relative', zIndex: '3' }}
              src={getImageUrl('@/assets/images/_global/burger-menu.svg')}
            />
          }
        >
          <div className="flex flex-col gap-44">
            <div className="flex flex-row items-center justify-between">
              <div style={{ position: 'relative', zIndex: '3' }}>
                <img src={getImageUrl('@/assets/images/_global/nav-logo.svg')} />
              </div>
              <div
                className="flex items-center justify-center"
                onClick={toggle}
                style={{ fontSize: '24px', width: '24px', height: '24px', position: 'relative', zIndex: '3' }}
              >
                X
              </div>
            </div>
            <div className="flex flex-col gap-12 flex-1">
              {navs.map((i, index) => (
                <NavLink
                  key={index}
                  className={({ isActive }) => (isActive || pathname === i?.extraHref ? 'active-link' : '')}
                  to={i.href}
                  target={i?.href?.startsWith('https') ? '_blank' : '_self'}
                  style={{ padding: '8px 0' }}
                >
                  <div className="flex flex-row items-center justify-between">
                    <div
                      className="pointer"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '20px',
                      }}
                    >
                      {i.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '20px',
                      }}
                    >
                      &gt;
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
            <div className="medias flex items-center gap-20 justify-center">
              {medias.map((i) => (
                <a href={i.href} target="_blank">
                  <img src={i.mobileImg} style={{ width: '50px', height: '50px' }} />
                </a>
              ))}
            </div>
          </div>
        </Menu>

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
