import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx' ;
import { InputHTMLAttributes, ReactNode } from 'react';
import { Envelope } from 'phosphor-react'

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot(props: InputRootProps) {
return (
  <div className='h-12 flex items-center gap-3 py-4 px-3 rounded w-full  bg-gray-800 focus-within:ring-1 ring-orange-500'>
    {props.children}
  </div>
)
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return (
    <input
    className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none' {...props}/>
    
  )
}


export interface InputProps {
  children: ReactNode;
}

function InputIcon(props: InputProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      <Envelope/>
    </Slot>
    
  )
}


export const TextInput = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon,

}