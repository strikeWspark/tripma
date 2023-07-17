import React from "react";


export const InputField =  ({ ...props}) => {
    return (
        <div>
            
            <input className='p-3 flex w-full rounded-md text-black border-2 border-grey-900 solid' type="text" {...props}/>
        </div>
    )
}

export default InputField;



