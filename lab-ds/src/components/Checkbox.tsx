import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {

}
export const CheckboxComp = () => {
  return (
    <Checkbox.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'  required={true}  >
        <Checkbox.CheckboxIndicator asChild>
            <Check weight='bold' className='h-5 w-5 text-orange-500'/>
        </Checkbox.CheckboxIndicator>
    </Checkbox.Root>
  )
}
