import React from 'react'

type Props = {
    name:string
    
    type: string
    placeholder: string
}

const Input: React.FC<Props> = React.forwardRef((props, ref) => {

    const {name,  type, placeholder,  ...rest} = props

    return(
        <div >
           
            <input  
                type={type} 
                name={name}
                placeholder={placeholder ?? ""}
                ref={ref}
                />
            </div>
    )
})

export default Input
