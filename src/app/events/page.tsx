import PastEvents from "@/app/events/PastEvents";
import UpcomingEvents from "./UpcomingEvents";
import { EventInterface } from "../../Types";
import Image from "next/image";
import eventsImage from "../../../public/events.jpeg";
import { Footer, Navbar } from "../../Components";

const Events = async () => {
  const upcomingEvents: EventInterface[] = [];
  return (
    <main className="">
      <header className="relative">
        <Navbar />
        <Image
          src={eventsImage}
          className="w-full h-[75vh] object-cover z-0 brightness-50"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl lg:text-5xl font-bold text-center my-10 z-60 text-white">
          Events
        </h1>
      </header>
      <UpcomingEvents />
      <PastEvents />
      <Footer />
    </main>
  );
};

export default Events;
