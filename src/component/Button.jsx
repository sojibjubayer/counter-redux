import React from 'react';

const Button = ({children,type,handler}) => {
    const style= type==="danger"?'bg-red-200 p-2 rounded-md':'bg-green-300 p-2 rounded-md';
    return (
        <div>
            <button  className={`btn ${style} `} onClick={handler}>{children}</button>
        </div>
    );
};

export default Button;