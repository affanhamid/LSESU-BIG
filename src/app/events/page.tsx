import Timeline from "../../Components/Timeline";
import React from "react";
import { fetchEvents, fetchUpcomingEvents } from "../../Database/database";
import Navbar from "@/Components/Navbar";

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  image: string;
}

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
    <div className="border-1 bg-white border-2 rounded-md border-background w-[50vw] h-32 text-black  flex items-center">
      <div className="h-full border-r-2 flex items-center justify-center px-4">
        {eventDate}
      </div>
      <div className="flex-1 pl-5">
        <div className="flex flex-col gap-0">
          <span className="text-2xl text-bold mb-0">{eventName}</span>
          <span className="text-sm">{eventVenue}</span>
        </div>
        <div>
          {eventDescription}... <span className="underline">read more</span>
        </div>
      </div>
      <div>
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
    <main className="bg-white pt-20">
      <Navbar />
      <section className="bg-white pt-20 pb-10">
        <h1 className="text-7xl text-center mb-10">Upcoming Events</h1>
        <div className="flex flex-col items-center">
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
        <h1 className="text-7xl text-center">Past Events</h1>
        <Timeline TimelineEvents={timelineEvents} />
      </section>
    </main>
  );
};

export default Events;
