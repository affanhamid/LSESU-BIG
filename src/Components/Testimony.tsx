import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import { TestimonyProps } from '@/Types/types';

const Testimony: React.FC<TestimonyProps> = ({ name, description }) => {
    return (
        <div className="relative flex flex-col border-2 border-white rounded-lg w-[500px] aspect-video px-10 py-20">
            <p className="text-xl flex-1">{description}</p>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 aspect-square rounded-full bg-black border-2 border-white flex items-center justify-center'>Profile</div>
            <div className='flex items-center gap-1'>
                <h2 className="text-lg text-right">{name}</h2>
            </div>
            <div className='absolute bottom-10 right-10 text-4xl'><FaQuoteRight /></div>
        </div>
    )
}

export default Testimony