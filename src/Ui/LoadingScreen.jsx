import React, { useEffect, useState } from 'react'

function LoadingScreen({onComplete}) {
    const [text,setText] = useState("");
    const fulltext= "Welcome to my personal portfolio...";

    useEffect(()=>{
        let index=0;
        const interval = setInterval(()=>{
            setText(fulltext.substring(0,index));
            index++;
            if(index >= fulltext.length){
                clearInterval(interval);
                setTimeout(()=>{
                    onComplete();
                },1000)
            }
        },100)
        return ()=> clearInterval(interval)
    },[onComplete]);
  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center gap-5'>
        <div className='w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden'>
            <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar'></div>
        </div>
        <div className='mb-4 text-2xl font-mono font-semibold'>
            {text}
            <span className='animate-blink ml-1 text-2xl font-bold'>|</span>
        </div>
        <div className='w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden'>
            <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar'></div>
        </div>
    </div>
  )
}

export default LoadingScreen
