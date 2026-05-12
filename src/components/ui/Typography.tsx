import React from 'react';
import { Text, TextProps } from 'react-native';
import { cn } from '@/utils/cn';

interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  weight?: 'normal' | 'medium' | 'bold';
  className?: string;
}

export function Typography({ variant = 'body', weight = 'normal', className, ...props }: TypographyProps) {
  const variantStyles = {
    h1: 'text-3xl',
    h2: 'text-2xl',
    h3: 'text-xl',
    body: 'text-base',
    caption: 'text-sm text-textSecondary',
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  return (
    <Text 
      className={cn('text-text', variantStyles[variant], weightStyles[weight], className)} 
      {...props} 
    />
  );
}
