
import React from 'react'
import { SpeakerProps, BigSpeakerProps } from '@/Types/types'

export const Speaker: React.FC<SpeakerProps> = ({ name, topic, date }) => {
    return (
        <div className='relative'>
            <div className='w-[600px] aspect-video bg-gray-500'></div>
            <div className='absolute bottom-0 w-full bg-black/20 px-10 py-5'>
                <p>{name}</p>
                <p>{topic}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export const BigSpeaker: React.FC<BigSpeakerProps> = ({ name, topic, description, reverse }) => {
    return (
        <div className={`flex my-10 ${reverse ? 'flex-row-reverse' : ''} justify-evenly`}>
            <div className='w-[500px] h-[500px] bg-gray-500 flex-shrink-0'></div>
            <div className='p-10 flex flex-col gap-1 w-[50%]'>
                <h3 className='text-3xl'>{name}</h3>
                <h4 className='text-xl'>{topic}</h4>
                <p>{description}</p>
                <p>{reverse}</p>
            </div>
        </div>
    )
}

export const SpeakerWrapper: React.FC<SpeakerProps> = (props) => <Speaker {...props} />;
