import { Variants } from "framer-motion";

// Apple-like easing
export const appleEasing = [0.25, 0.1, 0.25, 1] as const;
export const expoEasing = [0.16, 1, 0.3, 1] as const;

// Fade in up - standard reveal
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: expoEasing,
    },
  },
};

// Fade in - simple opacity
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: appleEasing,
    },
  },
};

// Scale up - for hero images
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: expoEasing,
    },
  },
};

// Stagger container - for lists
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger item - for list children
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: expoEasing,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: expoEasing,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: expoEasing,
    },
  },
};

// Scale in (legacy support)
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: expoEasing,
    },
  },
};

// Bento card reveal - for grid items
export const bentoCardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: expoEasing,
    },
  },
};

// Text character reveal - for headlines
export const charReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: expoEasing,
    },
  },
};

// Word reveal container
export const wordRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Parallax values for scroll-linked animations
export const parallaxConfig = {
  slow: { offset: ["start end", "end start"], yRange: [0, -50] },
  medium: { offset: ["start end", "end start"], yRange: [0, -100] },
  fast: { offset: ["start end", "end start"], yRange: [0, -150] },
};

// Hero scroll animation config
export const heroScrollConfig = {
  scaleRange: [1, 0.9] as [number, number],
  opacityRange: [1, 0] as [number, number],
  yRange: [0, -50] as [number, number],
};

// Section reveal config
export const sectionRevealConfig = {
  viewport: { once: true, margin: "-100px" },
  initial: "hidden",
  whileInView: "visible",
};
