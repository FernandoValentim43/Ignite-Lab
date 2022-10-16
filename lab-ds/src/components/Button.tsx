import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   text?: string;
    
}

export function Button(props: ButtonProps) {
  return (
   <button className="py-2.5 bg-orange-500 rounded font-semibold text-white text-sm w-full hover:bg-orange-300 duration-300" {...props}>
    {props.text}
   </button>
  )
}
