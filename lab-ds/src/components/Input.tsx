import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx' ;
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot(props: InputRootProps) {
return (
  <div className='h-10 flex items-center gap-3 px-3 rounded w-full  bg-gray-800 focus-within:ring-1 ring-orange-500'>
    {props.children}
  </div>
)
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return (
    <input autoComplete='off'
    className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none' {...props}/>
    
  )
}


export interface InputProps {
  children: ReactNode;
}

function InputIcon(props: InputProps) {
  return (
    <Slot className='w-5 h-5 text-gray-400'>
      {props.children}
    </Slot>
    
  )
}


export const TextInput = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon,

}