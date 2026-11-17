'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'a'>, 'children'> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function Button({
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      href={href}
      className={cn(
        'h-16 px-12 rounded-full bg-primary text-white-ink font-body font-medium text-[20px] leading-titulo flex items-center justify-center shadow-button hover:opacity-95 transition-all whitespace-nowrap',
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
