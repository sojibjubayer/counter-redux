import React from 'react';
import Count from './Count';
import Button from '../Button';



const Counter = ({count,onIncrement,onDecrement}) => {
   
   
    return (
        <div>
            <Count count={count} />
            <div className='flex gap-10'>
            <Button handler={onIncrement} >increment</Button>
            <Button handler={onDecrement} type="danger">decrement</Button>
            </div>
        </div>
    );
};

export default Counter;