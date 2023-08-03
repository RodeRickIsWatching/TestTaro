import useMobile from '@/hooks/useMobile';
import { getImageUrl } from '@/utils/tools';
import { styled } from 'styled-components';

const Container = styled.div`
  margin-bottom: 62px;
  &.gap-40 {
    gap: 40px;
  }

  color: var(--white-white-stich, #fffffd);
  text-align: center;
  font-family: Canela Trial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 21.6px */
  letter-spacing: 3px;
`;
const Footer = () => {
  const ifMobile = useMobile();

  return (
    <Container className="flex flex-col gap-40" style={{ marginTop: ifMobile ? '60px' : '172px' }}>
      {ifMobile ? (
        <img src={getImageUrl('@/assets/images/_global/m-footer.svg')} alt="" />
      ) : (
        <img
          style={{ maxWidth: '1390px', margin: 'auto' }}
          src={getImageUrl('@/assets/images/_global/footer.svg')}
          alt=""
        />
      )}

      <span>MARKET@TAROTPI.COM</span>
    </Container>
  );
};

export default Footer;
