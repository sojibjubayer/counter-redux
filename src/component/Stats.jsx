import React from 'react';
import { useSelector } from 'react-redux';

const Stats = () => {
    const counters=useSelector((state)=>state.counters);
    const totalCount=counters.reduce((sum,current)=>sum+current.value,0);
    return (
        <div>
            <p className='bg-gray-300 p-2 rounded-md'>Total Count: <span className='bg-red-200 p-1 px-2 rounded-md'>{totalCount}</span></p>
        </div>
    );
};

export default Stats;