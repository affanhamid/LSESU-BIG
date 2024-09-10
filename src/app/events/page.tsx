import PastEvents from "@/app/events/PastEvents";
import Link from "next/link";
import { EventInterface } from "@/Types";
import Image from "next/image";
import eventsImage from "/public/events.jpg";

const UpcomingEvent = ({ event }: { event: EventInterface }) => {
  return (
    <div className="flex flex-col break:flex-row  border border-gray-300 rounded-lg overflow-hidden w-max break:w-full items-center">
      <div className="w-[300px] break:w-[175px] md:w-[200px] lg:w-[250px] aspect-square bg-gray-600 flex-shrink-0">
        {event.imageLink ? (
          <img
            src={event.imageLink}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-600"></div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-lg text-gray-500">{`${event.month} ${event.day}`}</div>
        <div className="text-xl md:text-2xl font-bold mt-2">{event.name}</div>
        <div className="text-md md:text-lg text-gray-700">{event.venue}</div>
      </div>
      <div className="p-5">
        <Link
          className="bg-background px-3 py-2 text-2xl text-white rounded-lg"
          href={event.registrationLink}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

const Events = async () => {
  const upcomingEvents: EventInterface[] = [];
  return (
    <main className="">
      <header className="relative">
        <Image
          src={eventsImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Events
        </h1>
      </header>
      <section className="bg-gray-50 pt-20 pb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
          Upcoming Events
        </h1>
        <div className="flex flex-col items-center px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-96">
          {upcomingEvents.map((upcomingEvent, idx) => (
            <UpcomingEvent event={upcomingEvent} key={idx} />
          ))}
        </div>
      </section>
      <PastEvents />
    </main>
  );
};

export default Events;
