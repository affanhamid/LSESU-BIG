import React from 'react';

interface TimelineElementProps {
    title: string;
    date: string;
    description: string;
    image: string;
    isRight: boolean
}

interface TimelineModalProps {
    title: string;
    description: string;
    image: string;
}

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

const Timeline = () => {
    const events = [
        { title: 'Event 1', date: '2024-10-10', description: 'Description of Event 1', image: 'test1' },
        { title: 'Event 2', date: '2024-10-10', description: 'Description of Event 2', image: 'test2' },
        { title: 'Event 3', date: '2024-10-10', description: 'Description of Event 3', image: 'test3' },
        { title: 'Event 4', date: '2024-10-10', description: 'Description of Event 4', image: 'test4' },
        { title: 'Event 5', date: '2024-10-10', description: 'Description of Event 5', image: 'test5' },
        { title: 'Event 6', date: '2024-10-10', description: 'Description of Event 6', image: 'test6' },
    ];

    return (
        <div className='flex justify-center py-20'>
            <div className='relative'>
                <div className='absolute w-1 h-full bg-black left-1/2 transform -translate-x-1/2 rounded'></div>
                <div className='flex flex-col items-center gap-52 py-52'>
                    {events.map((event, index) => (
                        <TimelineElement key={index} date={event.date} title={event.title} description={event.description} image={event.image} isRight={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
