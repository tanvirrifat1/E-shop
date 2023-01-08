import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-full'>
                <p className='text-6xl font-thin'>L</p>
                <div className='w-8 h-8 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-700'></div>
                <p className='text-6xl font-thin'>ading ....</p>
            </div>
        </div>
    );
};

export default Loading;