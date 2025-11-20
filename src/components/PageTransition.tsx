'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

const variants = {
  hidden: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function PageTransition({ children }: PropsWithChildren<{}>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"      // start hidden for incoming page
        animate="enter"
        exit="exit"
        transition={{ duration: 0.45, ease: 'easeInOut' }}
        className="min-h-screen w-full" // keep full height so layout doesn't jump
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
