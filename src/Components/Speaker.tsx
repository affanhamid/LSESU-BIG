import React from 'react'

interface SpeakerProps {
    name: string;
    topic: string;
    date: string;
}

const Speaker: React.FC<SpeakerProps> = ({ name, topic, date }) => {
    return (
        <div className='relative'>
            <div className='w-[400px] aspect-video bg-gray-500'></div>
            <div className='absolute bottom-0'>
                <p>{name}</p>
                <p>{topic}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Speaker