/* import React from "react";

type Props = {
  name: string;

  type: string;
  placeholder: string;
};

const Input: React.FC<Props> = React.forwardRef((props, ref) => {
  const { name, type, placeholder, ...rest } = props;

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder ?? ""}
        ref={ref}
      />
    </div>
    
  );
});

export default Input;
 */

import React from "react";

type Props = {
  name: string;
  type: string;
  placeholder: string;
};

const Input: React.FC<Props> = React.forwardRef(({ name, type, placeholder, ...inputProps }, ref) => {
 

  return (
    <div>
      <input
        className="h-10 flex items-center gap-3 py-4 px-3 rounded w-full  bg-gray-800 focus-within:ring-1 ring-orange-500"
        type={type}
        name={name}
        placeholder={placeholder}

        ref={ref}
        {...inputProps}
      />
     
    </div>
  );
});

export default Input;
