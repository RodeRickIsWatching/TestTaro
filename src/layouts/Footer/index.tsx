import { getImageUrl } from "@/utils/tools";
import { styled } from "styled-components";

const Container = styled.div`
 margin-top: 172px;
 margin-bottom: 62px;
  &.gap-40 {
    gap: 40px;
  }

  color: var(--white-white-stich, #fffffd);
  text-align: center;
  font-family: Canela Trial;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 21.6px */
  letter-spacing: 3px;
`;
const Footer = () => {
  return (
    <Container className="flex flex-col gap-40">
      <img src={getImageUrl("@/assets/images/_global/footer.svg")} alt="" />
      <span>MARKET@TAROTPI.COM</span>
    </Container>
  );
};

export default Footer;
