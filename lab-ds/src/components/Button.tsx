import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx' ;
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild: boolean;
    
}

export function Button({ children, asChild}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={clsx('py-2.5 bg-orange-500 rounded font-semibold text-white text-sm w-full hover:bg-orange-300 duration-300 ', {
       

        })}>{children}</Comp>
  )
}
