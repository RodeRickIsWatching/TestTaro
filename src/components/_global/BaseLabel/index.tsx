import { css, styled } from 'styled-components';

const Container = styled.div<{ light?: boolean; size?: string }>`
  &::before {
    content: '';
    width: 105%;
    height: 105%;
    position: absolute;
    top: -5%;
    left: -2.5%;
    bottom: -5%;
    right: -0%;
    display: inline-block;

    border-radius: 36px;

    opacity: ${({ light }) => (light ? 1 : 0.5)};

    background: linear-gradient(153deg, rgba(255, 211, 77, 0.8) 0%, rgba(255, 211, 77, 0.1) 100%);
    filter: blur(3.6276848316192627px);
  }
  padding: 3px 10px;
  position: relative;
  border: 1px solid rgba(139, 115, 46, 0.5);
  border-radius: 36px;
  backdrop-filter: blur(3px);

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `}/* opacity: 0.5; */

  /* filter: blur(3.6276848316192627px); */

  /* opacity: 0.5; */
`;

const BaseLabel = ({
  children,
  light,
  size,
  onClick,
}: {
  children: any;
  light?: boolean;
  size?: string;
  onClick?: any;
}) => {
  return (
    // <svg
    //   width="92"
    //   height="44"
    //   viewBox="0 0 92 44"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g filter="url(#filter0_f_6510_859)">
    //     <rect
    //       x="8"
    //       y="8"
    //       width="76"
    //       height="28"
    //       rx="14"
    //       fill="url(#paint0_linear_6510_859)"
    //     />
    //   </g>
    //   <rect
    //     x="8.45346"
    //     y="8.45346"
    //     width="75.0931"
    //     height="27.0931"
    //     rx="13.5465"
    //     stroke="#8B732E"
    //     stroke-width="0.906921"
    //   />
    //   {/* {children} */}
    //   <defs>
    //     <filter
    //       id="filter0_f_6510_859"
    //       x="0.74463"
    //       y="0.74463"
    //       width="90.5107"
    //       height="42.5107"
    //       filterUnits="userSpaceOnUse"
    //       color-interpolation-filters="sRGB"
    //     >
    //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //       <feBlend
    //         mode="normal"
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       />
    //       <feGaussianBlur
    //         stdDeviation="3.62768"
    //         result="effect1_foregroundBlur_6510_859"
    //       />
    //     </filter>
    //     <linearGradient
    //       id="paint0_linear_6510_859"
    //       x1="46"
    //       y1="8"
    //       x2="49.7936"
    //       y2="40.049"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stop-color="#FFD34D" stop-opacity="0.6" />
    //       <stop offset="1" stop-color="#FFD34D" stop-opacity="0" />
    //     </linearGradient>
    //   </defs>
    // </svg>

    <Container light={light} size={size} onClick={onClick}>
      {/* <div className="bg" /> */}
      {children}
    </Container>
  );
};

export default BaseLabel;
