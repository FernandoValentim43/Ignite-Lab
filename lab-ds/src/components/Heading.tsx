import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx' ;
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg' | 'xs';
    children: ReactNode;
    asChild: boolean;
    
}

export function Heading({ size = 'md', children, asChild}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';



  return (
    <Comp className={clsx('text-gray-200 font-bold', {
        'text-lg' : size === 'sm',
        'text-xl' : size === 'md',
        'text-2xl' : size === 'lg',
        'text-xs' : size === 'xs',

        })}>{children}</Comp>
  )
}
