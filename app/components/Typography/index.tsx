import {
  BASE_CLASS,
  TVariant,
  VARIANTS,
} from '@/app/components/Typography/variants.constants';
import { cn } from '@/app/lib';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TVariant;
  className?: string;
}

const Typography: React.FC<IProps> = ({
  variant = 'p',
  className,
  children,
}) => {
  const Component =
    variant === 'code'
      ? 'code'
      : variant === 'blockquote'
        ? 'blockquote'
        : ['h1', 'h2', 'h3', 'h4'].includes(variant)
          ? (variant as keyof JSX.IntrinsicElements)
          : 'p';

  return (
    <Component className={cn(BASE_CLASS, VARIANTS[variant] || '', className)}>
      {children}
    </Component>
  );
};

export default Typography;
