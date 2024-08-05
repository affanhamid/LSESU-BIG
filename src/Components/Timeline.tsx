import React from "react";
import Navbar from "@/Components/Navbar";
import { fetchEvents } from "@/Database/database";
import {
  TimelineModalProps,
  TimelineElementProps,
  TimelineEvent,
} from "@/Types/types";

const TimelineModal: React.FC<TimelineModalProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="w-60 md:w-80 h-auto p-4 rounded-xl bg-gray-100 border-2 border-black">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
      {/* <img src={image} alt={title} className='w-full h-auto mt-2 rounded' /> */}
    </div>
  );
};

const TimelineElement: React.FC<TimelineElementProps> = ({
  title,
  date,
  description,
  image,
  isRight,
}) => {
  return (
    <div className="relative z-10 w-12 h-12 border-black border-2 bg-white rounded-full flex items-center justify-center">
      <div
        className={`absolute ${isRight ? "right-20 md:right-32" : "left-20 md:left-32"
          } top-1/2 transform -translate-y-1/2`}
      >
        <TimelineModal title={title} description={description} image={image} />
      </div>
      <div
        className={`absolute ${isRight ? "left-10 md:left-16" : "right-10 md:right-16"
          } whitespace-nowrap top-1/2 transform -translate-y-1/2 text-sm md:text-base`}
      >
        {date}
      </div>
    </div>
  );
};

const Timeline = ({ TimelineEvents }: { TimelineEvents: TimelineEvent[] }) => {
  return (
    <div className="flex justify-center py-20">
      <div className="relative">
        <div className="absolute w-1 h-full bg-black left-1/2 transform -translate-x-1/2 rounded"></div>
        <div className="flex flex-col items-center gap-20 md:gap-52 py-20 md:py-52">
          {TimelineEvents.map((event: TimelineEvent, index) => (
            <TimelineElement
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              image={event.image}
              isRight={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelinePage = async () => {
  const events = await fetchEvents();
  const timelineEvents: TimelineEvent[] = events.map((event) => ({
    title: event.title,
    date: event.date,
    description: event.description,
    image: event.image,
  }));

  return (
    <main className="bg-white pt-20">
      <Navbar />
      <section className="pt-20 pb-10">
        <h1 className="text-3xl lg:text-7xl text-center">Past Events</h1>
        <Timeline TimelineEvents={timelineEvents} />
      </section>
    </main>
  );
};

export default TimelinePage;
