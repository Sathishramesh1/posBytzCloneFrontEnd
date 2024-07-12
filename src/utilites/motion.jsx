import { delay as framerDelay } from "framer-motion";

export const fadeIn = (i,customDelay) => ({
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,   
        delay: customDelay || 0   ,
        ease: 'easeInOut',
      },
    },
  });