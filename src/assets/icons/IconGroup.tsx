/* eslint-disable max-len */
import * as React from 'react';

// ===========================================
// ============= Global ======================
// ===========================================
interface Props extends Omit<React.SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: React.CSSProperties = {
  display: 'inline-block',
};

const getIconColor = (color: string | string[] | undefined, index: number, defaultColor: string) => {
  return color ? (typeof color === 'string' ? color : color[index] || defaultColor) : defaultColor;
};

export const IconGlobalSpin: React.FC<Props> = ({ size = 16, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 22 22" width={`${size}px`} height={`${size}px`} style={style} {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z"
        fill={getIconColor(color, 1, '#ffffff')}
        fillOpacity="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C17.0745 0 22 4.92549 22 11H20C20 6.03006 15.9699 2 11 2V0Z"
        fill={getIconColor(color, 1, '#ffffff')}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 11 11"
          to="360 11 11"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

// ===========================================
// ============= Component ===================
// ===========================================
export const IconComponentCheck: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" {...props}>
      <path d="M8.30835 0.17806C8.05823 -0.0645613 7.65878 -0.0584783 7.41616 0.191647L3.34166 4.39215L3.33756 4.39628C3.28591 4.44616 3.20359 4.44516 3.15318 4.39383L1.08113 2.28405L1.06855 2.27162L1.06542 2.26865C0.819996 2.03542 0.432198 2.03703 0.188839 2.27604C-0.0597728 2.52021 -0.0633717 2.91969 0.180801 3.1683L2.25287 5.27806L2.26811 5.29333L2.2696 5.2948C2.81005 5.82699 3.67941 5.82928 4.22259 5.2958C4.23062 5.28792 4.23855 5.27993 4.24639 5.27186L8.32197 1.07028L8.33384 1.05768L8.33667 1.05455C8.5642 0.803552 8.5533 0.415662 8.30835 0.17806Z" />
    </svg>
  );
};

export const IconPaginationArrowLeft: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M10.4685 6.65362L4.30527 1.83976C4.28917 1.82708 4.26981 1.8192 4.24943 1.81702C4.22905 1.81485 4.20847 1.81846 4.19005 1.82746C4.17164 1.83645 4.15613 1.85046 4.14531 1.86787C4.1345 1.88528 4.12881 1.90539 4.12891 1.92589V2.98272C4.12891 3.04972 4.16035 3.11397 4.21231 3.15499L9.13417 6.99815L4.21231 10.8413C4.15899 10.8823 4.12891 10.9466 4.12891 11.0136V12.0704C4.12891 12.162 4.23418 12.2126 4.30527 12.1566L10.4685 7.34269C10.5209 7.30182 10.5633 7.24955 10.5924 7.18985C10.6216 7.13015 10.6367 7.06459 10.6367 6.99815C10.6367 6.93172 10.6216 6.86616 10.5924 6.80646C10.5633 6.74675 10.5209 6.69448 10.4685 6.65362Z" />
    </svg>
  );
};

export const IconPaginationArrowRight: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
      <path d="M9.8987 2.98284V1.926C9.8987 1.8344 9.79343 1.78381 9.72233 1.83987L3.55905 6.65374C3.50669 6.69446 3.46431 6.74661 3.43517 6.8062C3.40602 6.86579 3.39087 6.93125 3.39087 6.99758C3.39087 7.06392 3.40602 7.12938 3.43517 7.18897C3.46431 7.24856 3.50669 7.30071 3.55905 7.34143L9.72233 12.1553C9.7948 12.2114 9.8987 12.1608 9.8987 12.0692V11.0123C9.8987 10.9453 9.86726 10.8811 9.8153 10.8401L4.89343 6.99827L9.8153 3.1551C9.86726 3.11409 9.8987 3.04983 9.8987 2.98284Z" />
    </svg>
  );
};

export const IconArrowSort: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" {...props}>
      <path d="M7.94188 4.57036L4.21022 0.0960542C4.1034 -0.0320181 3.89773 -0.0320181 3.78978 0.0960542L0.0581151 4.57036C-0.0805157 4.7372 0.0444792 4.9816 0.268334 4.9816H7.73167C7.95552 4.9816 8.08052 4.7372 7.94188 4.57036Z" />
      <path d="M7.73167 7.0184H0.268334C0.0444792 7.0184 -0.0805157 7.2628 0.0581151 7.42964L3.78978 11.9039C3.89659 12.032 4.10227 12.032 4.21022 11.9039L7.94188 7.42964C8.08052 7.2628 7.95552 7.0184 7.73167 7.0184Z" />
    </svg>
  );
};

// ===========================================
// ============= Trade =======================
// ===========================================
export const IconArrowTop: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <path d="M5.20041 3.875C5.60021 3.375 6.39979 3.375 6.79958 3.875L9.29829 7C9.79246 7.61804 9.32232 8.5 8.4987 8.5L3.5013 8.5C2.67768 8.5 2.20754 7.61803 2.70171 7L5.20041 3.875Z" />
    </svg>
  );
};

export const IconArrowBottom: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
      <path d="M6.79959 8.125C6.39979 8.625 5.60021 8.625 5.20041 8.125L2.70171 5C2.20754 4.38197 2.67768 3.5 3.5013 3.5L8.4987 3.5C9.32232 3.5 9.79246 4.38197 9.29829 5L6.79959 8.125Z" />
    </svg>
  );
};

export const IconInputMinus: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <rect x="3.33301" y="9.375" width="13.3333" height="1.25" rx="0.625" />
    </svg>
  );
};

export const IconInputPlus: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M10.6247 9.37467V3.95801C10.6247 3.61283 10.3449 3.33301 9.99967 3.33301C9.6545 3.33301 9.37467 3.61283 9.37467 3.95801V9.37467H3.95801C3.61283 9.37467 3.33301 9.6545 3.33301 9.99967C3.33301 10.3449 3.61283 10.6247 3.95801 10.6247H9.37467V16.0413C9.37467 16.3865 9.6545 16.6663 9.99967 16.6663C10.3449 16.6663 10.6247 16.3865 10.6247 16.0413V10.6247H16.0413C16.3865 10.6247 16.6663 10.3449 16.6663 9.99967C16.6663 9.6545 16.3865 9.37467 16.0413 9.37467H10.6247Z" />
    </svg>
  );
};

// export const IconSelectArrow: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
//   return (
//     <svg width="12" height="6" viewBox="0 0 12 6" fill="none" {...props}>
//       <path d="M0.91389 0.163933C1.10544 -0.0347736 1.40519 -0.0528378 1.61642 0.10974L1.67693 0.163933L6.0003 4.64894L10.3237 0.163933C10.5152 -0.0347736 10.815 -0.0528378 11.0262 0.10974L11.0867 0.163933C11.2783 0.362639 11.2957 0.673582 11.139 0.892695L11.0867 0.95547L6.38182 5.83607C6.19027 6.03477 5.89052 6.05284 5.6793 5.89026L5.61878 5.83607L0.91389 0.95547C0.703182 0.736893 0.703182 0.38251 0.91389 0.163933Z" />
//     </svg>
//   );
// };

export const IconWallet: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="icon-wallet">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.25 4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H18C19.2427 2.25 20.25 3.25737 20.25 4.5V7.37803C21.1239 7.68691 21.75 8.52034 21.75 9.5V14.5C21.75 15.4797 21.1239 16.3131 20.25 16.622V19.5C20.25 20.7427 19.2427 21.75 18 21.75H4.5C3.25736 21.75 2.25 20.7427 2.25 19.5V4.5ZM18.75 4.5V7.25H12.5C11.2574 7.25 10.25 8.25736 10.25 9.5V14.5C10.25 15.7426 11.2574 16.75 12.5 16.75H18.75V19.5C18.75 19.9142 18.4142 20.25 18 20.25H4.5C4.08578 20.25 3.75 19.9142 3.75 19.5V4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H18C18.4142 3.75 18.75 4.08578 18.75 4.5ZM12.5 8.75C12.0858 8.75 11.75 9.08579 11.75 9.5V14.5C11.75 14.9142 12.0858 15.25 12.5 15.25H19.5C19.9142 15.25 20.25 14.9142 20.25 14.5V9.5C20.25 9.08579 19.9142 8.75 19.5 8.75H12.5ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11Z"
          fill="white"
          fillOpacity="0.45"
        />
      </g>
    </svg>
  );
};

export const IconAccount: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="icon-Account">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.96875C9.65279 2.96875 7.75 4.87154 7.75 7.21875C7.75 9.56596 9.65279 11.4688 12 11.4688C14.3472 11.4688 16.25 9.56596 16.25 7.21875C16.25 4.87154 14.3472 2.96875 12 2.96875ZM9.25 7.21875C9.25 5.69997 10.4812 4.46875 12 4.46875C13.5188 4.46875 14.75 5.69997 14.75 7.21875C14.75 8.73754 13.5188 9.96875 12 9.96875C10.4812 9.96875 9.25 8.73754 9.25 7.21875ZM9.4 13.9688H9.367H9.36699C8.27485 13.9687 7.40936 13.9687 6.71175 14.0257C5.99836 14.084 5.39474 14.2056 4.84357 14.4864L4.84356 14.4864C3.94977 14.9419 3.22311 15.6685 2.76772 16.5623C2.48688 17.1135 2.36527 17.7171 2.30699 18.4305C2.24999 19.1281 2.24999 19.9936 2.25 21.0857V21.1187V21.7188C2.25 22.133 2.58579 22.4688 3 22.4688H21C21.4142 22.4688 21.75 22.133 21.75 21.7188V21.1187V21.0857C21.75 19.9936 21.75 19.1281 21.693 18.4305C21.6347 17.7171 21.5131 17.1135 21.2323 16.5623L21.2323 16.5623C20.7769 15.6685 20.0502 14.9419 19.1564 14.4864L19.1564 14.4864C18.6053 14.2056 18.0016 14.084 17.2883 14.0257C16.5906 13.9687 15.7251 13.9687 14.633 13.9688H14.633H14.6H9.4ZM4.10423 17.2433C4.41582 16.6318 4.913 16.1346 5.52453 15.823H18.4755C19.087 16.1346 19.5842 16.6318 19.8958 17.2433C20.0509 17.5478 20.1473 17.932 20.198 18.5526C20.2471 19.1539 20.2498 19.9147 20.25 20.9688H3.75001C3.75015 19.9147 3.75288 19.1539 3.80201 18.5526C3.85271 17.932 3.94909 17.5478 4.10423 17.2433ZM6.83389 15.5208C6.21327 15.5715 5.82902 15.6678 5.52454 15.823L18.4755 15.823C18.171 15.6678 17.7867 15.5715 17.1661 15.5208C16.5367 15.4693 15.7325 15.4688 14.6 15.4688H9.4C8.26752 15.4688 7.46327 15.4693 6.83389 15.5208Z"
          fill="white"
          fillOpacity="0.45"
        />
      </g>
    </svg>
  );
};

export const IconSettings: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Iconly/Light-outline/Arrow - Down 8">
        <g id="Setting">
          <path
            id="Setting_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6161 2.71875H11.3811C10.6855 2.71875 10.0186 2.9903 9.52796 3.47332C9.09307 3.90145 8.82704 4.46591 8.77575 5.06656L8.76724 5.26056C8.75775 5.89227 8.24742 6.38509 7.62101 6.38503C7.47895 6.38355 7.33141 6.35113 7.19559 6.29005L7.06235 6.22046C5.83155 5.52892 4.23128 5.95251 3.50918 7.18041L2.85989 8.2257C2.16949 9.39923 2.51001 10.8735 3.62449 11.6328L3.77948 11.7303C4.16149 11.9471 4.37987 12.3177 4.37987 12.7188C4.37987 13.0876 4.19491 13.4324 3.88645 13.6416L3.78115 13.7062C2.62651 14.36 2.17157 15.8029 2.75197 17.0032L2.83679 17.1629L3.47412 18.2411C3.80539 18.8271 4.37306 19.2684 5.04445 19.4554C5.63953 19.6211 6.2746 19.5753 6.83762 19.3272L7.01565 19.2401C7.31529 19.0703 7.62484 19.0297 7.91538 19.1058C8.20591 19.182 8.45336 19.3687 8.6027 19.6245C8.68504 19.7606 8.73337 19.901 8.75063 20.0464L8.75912 20.1941C8.75765 21.568 9.93219 22.7188 11.3811 22.7188H12.6164C13.9845 22.7188 15.12 21.6891 15.231 20.3602L15.2391 20.1885C15.2383 19.8566 15.3582 19.5711 15.5727 19.361C15.7872 19.1508 16.0786 19.0334 16.382 19.0348C16.5214 19.0386 16.6746 19.0728 16.8166 19.135L16.9527 19.2037C18.1011 19.8531 19.6058 19.5195 20.3808 18.4276L20.4803 18.2758L21.1399 17.1992C21.495 16.6021 21.5912 15.9005 21.4119 15.2417C21.253 14.6579 20.8887 14.1485 20.3843 13.8028L20.2174 13.698C19.9272 13.5337 19.736 13.2895 19.658 13.0031C19.58 12.7167 19.6218 12.4117 19.7742 12.1555C19.8585 12.0113 19.9706 11.8913 20.1051 11.7994L20.3624 11.641C21.4043 10.948 21.7945 9.58394 21.2461 8.43717L21.1892 8.32549C21.1769 8.29637 21.1627 8.26797 21.1465 8.24049L20.5333 7.19803C19.8511 6.03793 18.3759 5.58772 17.146 6.15425L16.9821 6.23714C16.6882 6.40563 16.3779 6.44822 16.0857 6.37389C15.7935 6.29956 15.5435 6.11442 15.3908 5.85929C15.3124 5.72991 15.2641 5.58954 15.2468 5.4441L15.2383 5.29641C15.2599 4.66843 14.9925 3.99556 14.4983 3.49746C14.0041 2.99936 13.3251 2.71846 12.6161 2.71875ZM11.3811 4.16649H12.6164C12.9264 4.16636 13.2229 4.28904 13.4387 4.50658C13.6546 4.72412 13.7713 5.01798 13.7624 5.32124L13.7756 5.57329C13.8203 5.95859 13.9357 6.29379 14.1181 6.59491C14.4673 7.1784 15.0423 7.60421 15.7143 7.77516C16.3863 7.94611 17.1001 7.84816 17.6983 7.5029L17.8015 7.4514L17.9125 7.40785C18.4009 7.24728 18.9764 7.4505 19.253 7.92083L19.8378 8.91601L19.8505 8.94404L19.9212 9.07759C20.1578 9.57379 19.9601 10.2015 19.448 10.4949L19.2873 10.5941C18.9464 10.8261 18.6849 11.1059 18.4946 11.4314C18.1471 12.0158 18.0509 12.7174 18.2302 13.3761C18.3932 13.975 18.7716 14.4935 19.2922 14.8383L19.5645 15.0069C19.7566 15.1394 19.915 15.3609 19.9841 15.6148C20.0621 15.9012 20.0203 16.2062 19.868 16.4624L19.2236 17.5145L19.1511 17.6255C18.8529 18.0446 18.2647 18.2002 17.7687 17.9869L17.4528 17.8288C17.1004 17.6734 16.7556 17.5965 16.4053 17.5873C15.6914 17.5838 15.0212 17.8539 14.5279 18.3373C14.0345 18.8207 13.7588 19.4772 13.7621 20.1608L13.7565 20.2699C13.7099 20.8211 13.2137 21.271 12.6164 21.271H11.3811C10.7905 21.271 10.3043 20.8332 10.2421 20.2708L10.2219 19.9172C10.1772 19.5319 10.0618 19.1967 9.87937 18.8956C9.54028 18.3147 8.96861 17.8833 8.29737 17.7073C7.62614 17.5313 6.91096 17.6253 6.3108 17.9684L6.20208 18.0206C5.98569 18.1151 5.70831 18.1352 5.44842 18.0628C5.1552 17.9811 4.90728 17.7884 4.75952 17.5272L4.13027 16.4637L4.07398 16.3571C3.83562 15.8627 4.03354 15.235 4.54639 14.9444L4.70219 14.8484C5.43413 14.3528 5.85754 13.5633 5.85754 12.7188C5.85754 11.8617 5.42197 11.0654 4.70395 10.5898L4.44324 10.428C3.98256 10.1134 3.83377 9.46919 4.13128 8.9633L4.78057 7.918C5.1049 7.3669 5.8038 7.1819 6.3519 7.4896L6.54427 7.58901C6.90355 7.75168 7.25588 7.82909 7.61326 7.83273C8.99969 7.83291 10.1334 6.78962 10.2368 5.46025L10.2503 5.15536C10.2706 4.92616 10.3863 4.68071 10.5753 4.49457C10.7887 4.28456 11.0786 4.16649 11.3811 4.16649ZM12.0032 9.45057C10.161 9.45057 8.66748 10.9138 8.66748 12.7188C8.66748 14.5237 10.161 15.9869 12.0032 15.9869C13.8455 15.9869 15.339 14.5237 15.339 12.7188C15.339 10.9138 13.8455 9.45057 12.0032 9.45057ZM12.0032 10.8983C13.0294 10.8983 13.8613 11.7133 13.8613 12.7188C13.8613 13.7242 13.0294 14.5392 12.0032 14.5392C10.977 14.5392 10.1452 13.7242 10.1452 12.7188C10.1452 11.7133 10.977 10.8983 12.0032 10.8983Z"
            fill="white"
            fillOpacity="0.45"
          />
        </g>
      </g>
    </svg>
  );
};

export const IconOverviewCard: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="card">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.4987 3.16406C2.40665 3.16406 2.33203 3.23868 2.33203 3.33073V3.33371V4.83371H14.6654V3.33073C14.6654 3.23868 14.5908 3.16406 14.4987 3.16406H2.4987ZM2.33203 5.83371V8.66704V12.6641C2.33203 12.7561 2.40665 12.8307 2.4987 12.8307H14.4987C14.5908 12.8307 14.6654 12.7561 14.6654 12.6641V5.83371H2.33203ZM1.33203 8.66704V5.33371V3.33371V3.33073C1.33203 2.6864 1.85437 2.16406 2.4987 2.16406H14.4987C15.1276 2.16406 15.6402 2.66163 15.6645 3.28455C15.666 3.30072 15.6669 3.31712 15.6669 3.33371V8.66704C15.6669 8.68012 15.6664 8.69308 15.6654 8.70591V12.6641C15.6654 13.3084 15.143 13.8307 14.4987 13.8307H2.4987C1.85437 13.8307 1.33203 13.3084 1.33203 12.6641V8.66704ZM9.49944 10.1641C9.2233 10.1641 8.99944 10.3879 8.99944 10.6641C8.99944 10.9402 9.2233 11.1641 9.49944 11.1641H12.4994C12.7756 11.1641 12.9994 10.9402 12.9994 10.6641C12.9994 10.3879 12.7756 10.1641 12.4994 10.1641H9.49944Z"
        />
      </g>
    </svg>
  );
};

export const IconOverviewWallet: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="icon-wallet">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 2.61538C1 1.72323 1.72323 1 2.61538 1H12.3077C13.1999 1 13.9231 1.72324 13.9231 2.61538V4.68166C14.5505 4.90342 15 5.50178 15 6.20513V9.79487C15 10.4982 14.5505 11.0966 13.9231 11.3183V13.3846C13.9231 14.2768 13.1999 15 12.3077 15H2.61538C1.72323 15 1 14.2768 1 13.3846V2.61538ZM12.8462 2.61538V4.58974H8.35897C7.46682 4.58974 6.74359 5.31298 6.74359 6.20513V9.79487C6.74359 10.687 7.46682 11.4103 8.35897 11.4103H12.8462V13.3846C12.8462 13.682 12.6051 13.9231 12.3077 13.9231H2.61538C2.31799 13.9231 2.07692 13.682 2.07692 13.3846V2.61538C2.07692 2.318 2.318 2.07692 2.61538 2.07692H12.3077C12.6051 2.07692 12.8462 2.318 12.8462 2.61538ZM8.35897 5.66667C8.06159 5.66667 7.82051 5.90774 7.82051 6.20513V9.79487C7.82051 10.0923 8.06159 10.3333 8.35897 10.3333H13.3846C13.682 10.3333 13.9231 10.0923 13.9231 9.79487V6.20513C13.9231 5.90774 13.682 5.66667 13.3846 5.66667H8.35897ZM10.1538 7.28205C9.75733 7.28205 9.4359 7.60349 9.4359 8C9.4359 8.39651 9.75733 8.71795 10.1538 8.71795C10.5504 8.71795 10.8718 8.39651 10.8718 8C10.8718 7.60349 10.5504 7.28205 10.1538 7.28205Z"
        />
      </g>
    </svg>
  );
};

export const IconOverviewSwap: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Icon / SwapOutlined">
        <path
          id="Vector"
          d="M13.7486 9.25H2.87517C2.80642 9.25 2.75017 9.30625 2.75017 9.375V10.3125C2.75017 10.3812 2.80642 10.4375 2.87517 10.4375H12.3314L10.0767 13.2969C10.0127 13.3781 10.0705 13.5 10.1752 13.5H11.308C11.3845 13.5 11.4564 13.4656 11.5049 13.4047L14.1424 10.0594C14.4002 9.73125 14.1674 9.25 13.7486 9.25ZM14.1252 5.5625H4.66892L6.92361 2.70312C6.98767 2.62188 6.92986 2.5 6.82517 2.5H5.69236C5.6158 2.5 5.54392 2.53438 5.49548 2.59531L2.85798 5.94063C2.60017 6.26875 2.83298 6.75 3.25017 6.75H14.1252C14.1939 6.75 14.2502 6.69375 14.2502 6.625V5.6875C14.2502 5.61875 14.1939 5.5625 14.1252 5.5625Z"
        />
      </g>
    </svg>
  );
};