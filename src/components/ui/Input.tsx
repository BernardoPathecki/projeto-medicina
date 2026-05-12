import React, { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Typography } from './Typography';
import { cn } from '@/utils/cn';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export function Input({ label, error, containerClassName, className, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={cn('w-full', containerClassName)}>
      {label && (
        <Typography variant="caption" weight="medium" className="mb-2 ml-1">
          {label}
        </Typography>
      )}
      <View 
        className={cn(
          'h-14 px-4 rounded-2xl bg-secondary border-2 flex-row items-center',
          isFocused ? 'border-accent' : 'border-transparent',
          error && 'border-red-500'
        )}
      >
        <TextInput
          className={cn('flex-1 text-text text-base h-full', className)}
          placeholderTextColor="#8e8e93"
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
      </View>
      {error && (
        <Typography variant="caption" className="text-red-500 mt-1 ml-1">
          {error}
        </Typography>
      )}
    </View>
  );
}
