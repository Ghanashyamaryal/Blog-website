import React, { forwardRef, useId } from 'react';

const Input = forwardRef(({
    label,
    type = "text",
    className = "",
    ...props
}, ref) => {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 '
                htmlFor={id}>
                {label}
            </label>}
            <input
                className={`${className}`}
                type={type}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
})

export default Input;
