import React from 'react';

const Count = ({count}) => {
    return (
        <div>
            <h1 className='text-center bg-gray-300 p-2 rounded-md mb-5'>{count}</h1>
        </div>
    );
};

export default Count;