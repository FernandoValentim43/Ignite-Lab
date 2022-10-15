import { clsx } from 'clsx' ;
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <div className='py-4 px-3 rounded w-full outline-none bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 focus:ring-2 ring-orange-500'>
       
     <input className={clsx('')} {...props}/>
    </div>
  )
}
