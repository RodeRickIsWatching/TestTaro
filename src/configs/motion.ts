import { Variant, HTMLMotionProps } from 'framer-motion';

export type MotionVariants<T extends string> = Record<T, Variant>;

export const easings = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
};

// fade
type FadeMotionVariant = MotionVariants<'enter' | 'exit'>;

const fadeVariants: FadeMotionVariant = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: easings.easeOut,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easings.easeIn,
    },
  },
};

export const fadeConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: fadeVariants,
};

// scale
type ScaleMotionVariant = MotionVariants<'enter' | 'exit'>;

const scaleVariants: ScaleMotionVariant = {
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: 'easeout',
    },
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const scaleConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: scaleVariants,
};

type MotionVariant = MotionVariants<'enter' | 'exit'>;

// ===========================================
// ============= Global ======================
// ===========================================

const globalCollapseVariants: MotionVariant = {
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
  enter: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
    },
  },
};

export const globalCollapseConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: globalCollapseVariants,
};

const globalBreadthVariants: MotionVariant = {
  exit: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 0.3,
    },
  },
  enter: {
    opacity: 1,
    width: '100%',
    transition: {
      duration: 0.3,
    },
  },
};

export const globalBreadthConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: globalBreadthVariants,
};

// ===========================================
// ============= Components ==================
// ===========================================
// mask
const maskVariants: MotionVariant = {
  exit: {
    opacity: 0,
    transition: {
      // delay: 0.36,
      delay: 0.24,
      // duration: 1.2,
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easings.easeIn,
    },
  },
};

export const maskConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: maskVariants,
};

// drawer
const drawerVariants: MotionVariant = {
  exit: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: 0.2,
      ease: easings.easeOut,
    },
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easings.easeIn,
    },
  },
};

export const drawerConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: drawerVariants,
};

// modal
const modalVariants: MotionVariant = {
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: easings.easeOut,
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easings.easeIn,
    },
  },
};

// const slideInModalVariants: MotionVariant = {
//   exit: {
//     opacity: 1,
//     y: 100,
//     transition: {
//       duration: 0.2,
//       ease: easings.easeOut,
//     },
//   },
//   enter: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.3,
//       ease: easings.easeIn,
//     },
//   },
// };

export const modalConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: modalVariants,
};

// popup
const popupVariants: MotionVariant = {
  exit: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: 0.2,
      ease: easings.easeOut,
    },
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easings.easeIn,
    },
  },
};

export const popupConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: popupVariants,
};

// message
const messageVariants: MotionVariant = {
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.1,
      ease: easings.easeOut,
    },
  },
  enter: {
    opacity: 1,
    y: 18,
    transition: {
      duration: 0.2,
      ease: easings.easeIn,
    },
  },
};

export const messageConfig: HTMLMotionProps<any> = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: messageVariants,
};
