'use client';

import { MotionConfig } from 'motion/react';

/** Respeita a opção "reduzir movimento" do sistema em todas as animações do motion. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
