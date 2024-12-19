import React from 'react';

const Stats = ({totalCount}) => {
    return (
        <div>
            <p className='bg-gray-300 p-2 rounded-md'>Total Count: <span className='bg-red-200 p-1 px-2 rounded-md'>{totalCount}</span></p>
        </div>
    );
};

export default Stats;