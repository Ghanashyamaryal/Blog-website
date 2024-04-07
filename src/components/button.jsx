import React from 'react';

const Button = ({
    childern,
    type = "button",
    bgcolor = "bg-blue-600",
    ...props
}) => {
    return (
        <button className={`px-4 ${type} ${bgcolor} `} {...props}>
            {childern}
        </button>
    );
}

export default Button;
