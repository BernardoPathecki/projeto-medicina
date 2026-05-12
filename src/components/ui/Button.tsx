import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Typography } from './Typography';
import { cn } from '@/utils/cn';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'solid' | 'outline' | 'ghost';
  title: string;
  loading?: boolean;
}

export function Button({ variant = 'solid', title, loading, className, disabled, ...props }: ButtonProps) {
  const baseStyles = 'h-14 rounded-2xl items-center justify-center flex-row px-6 active:opacity-80';
  
  const variants = {
    solid: 'bg-accent',
    outline: 'border-2 border-accent bg-transparent',
    ghost: 'bg-transparent',
  };

  const textVariants = {
    solid: 'text-white',
    outline: 'text-accent',
    ghost: 'text-accent',
  };

  return (
    <TouchableOpacity 
      className={cn(baseStyles, variants[variant], (disabled || loading) && 'opacity-50', className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'solid' ? '#fff' : '#0a84ff'} />
      ) : (
        <Typography weight="bold" className={cn(textVariants[variant])}>
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
}
