'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  index?: number;
}

export function MotionWrapper({ children, index = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}
