import React from 'react';
import { TimelineModalProps, TimelineElementProps, TimelineEvent } from '@/Types/types';

const TimelineModal: React.FC<TimelineModalProps> = ({ title, description, image }) => {
    return (
        <div className='w-[300px] h-[200px] p-5 rounded-xl bg-gray-100 border-2 border-black'>
            <h2>{title}</h2>
            <p>{description}</p>
            {/* <img src="https://picsum.photos/300/200" /> */}
        </div>
    );
};

const TimelineElement: React.FC<TimelineElementProps> = ({ title, date, description, image, isRight }) => {
    return (
        <div className='z-10 w-[50px] aspect-square border-black border-2 bg-white rounded-full relative'>
            <div className={`absolute ${isRight ? 'right-32' : 'left-32'} top-1/2 transform -translate-y-1/2`}>
                <TimelineModal title={title} description={description} image={image} />
            </div>
            <div className={`absolute ${isRight ? 'left-16' : 'right-16'} whitespace-nowrap top-1/2 transform -translate-y-1/2`}>{date}</div>
        </div>
    );
};


const Timeline = ({ TimelineEvents }: { TimelineEvents: TimelineEvent[] }) => {

    return (
        <div className='flex justify-center py-20'>
            <div className='relative'>
                <div className='absolute w-1 h-full bg-black left-1/2 transform -translate-x-1/2 rounded'></div>
                <div className='flex flex-col items-center gap-52 py-52'>
                    {TimelineEvents.map((event: TimelineEvent, index) => (
                        <TimelineElement key={index} date={event.date} title={event.title} description={event.description} image={event.image} isRight={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
