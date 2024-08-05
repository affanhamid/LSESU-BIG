import React from "react";
import { fetchEvents, fetchUpcomingEvents } from "../../Database/database";
import Navbar from "@/Components/Navbar";
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
}) => {
  return (
    <div className="relative z-10 flex items-center mb-10 md:mb-20">
      <div className="absolute left-0 transform -translate-x-full">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <div className="w-px h-full bg-black"></div>
      </div>
      <div className="ml-8">
        <div className="whitespace-nowrap text-sm md:text-base mb-2">
          {date}
        </div>
        <TimelineModal title={title} description={description} image={image} />
      </div>
    </div>
  );
};

const Timeline = ({ TimelineEvents }: { TimelineEvents: TimelineEvent[] }) => {
  return (
    <div className="flex justify-center py-20">
      <div className="relative">
        <div className="absolute w-px h-full bg-black left-0"></div>
        <div className="flex flex-col items-start pl-8">
          {TimelineEvents.map((event: TimelineEvent, index) => (
            <TimelineElement
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              image={event.image}
              isRight={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const UpcomingEvent = ({
  eventName,
  eventDate,
  eventVenue,
  eventDescription,
  registationLink,
}: {
  eventName: string;
  eventDate: string;
  eventVenue: string;
  eventDescription: string;
  registationLink: string;
}) => {
  return (
    <div className="border-1 bg-white border-2 rounded-md border-background w-full md:w-[80vw] lg:w-[60vw] xl:w-[50vw] h-auto md:h-32 text-black flex flex-col md:flex-row items-center mb-4">
      <div className="h-16 md:h-full md:border-r-2 flex items-center justify-center px-4 border-b-2 md:border-b-0">
        {eventDate}
      </div>
      <div className="flex-1 pl-5 py-2 md:py-0">
        <div className="flex flex-col gap-0">
          <span className="text-xl md:text-2xl font-bold mb-0">
            {eventName}
          </span>
          <span className="text-sm">{eventVenue}</span>
        </div>
        <div>
          {eventDescription}... <span className="underline">read more</span>
        </div>
      </div>
      <div className="py-2 md:py-0">
        <button className="bg-background px-3 py-2 text-white rounded mr-5">
          Register Now
        </button>
      </div>
    </div>
  );
};

const Events = async () => {
  const upcomingEvents = await fetchUpcomingEvents();
  const events = await fetchEvents();
  const timelineEvents: TimelineEvent[] = events.map((event) => ({
    title: event.title,
    date: event.date,
    description: event.description,
    image: event.image,
  }));

  return (
    <main className="bg-white pt-32">
      <Navbar />
      <section className="bg-white pt-20 pb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Upcoming Events
        </h1>
        <div className="flex flex-col items-center px-4">
          {upcomingEvents.map((upcomingEvent, idx) => (
            <UpcomingEvent
              eventName={upcomingEvent.name}
              eventDate={upcomingEvent.date}
              eventVenue={upcomingEvent.venue}
              eventDescription={upcomingEvent.description}
              registationLink={upcomingEvent.registationLink}
              key={idx}
            />
          ))}
        </div>
      </section>
      <section className="pt-20 pb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Past Events
        </h1>
        <Timeline TimelineEvents={timelineEvents} />
      </section>
    </main>
  );
};

export default Events;
