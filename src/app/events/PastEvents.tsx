"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PastEventInterface } from "../../Types";
import { fetchPastEvents } from "@/Database/fetchPastEvents";

const Event = ({ event }: { event: PastEventInterface }) => {
  return (
    <div className="flex flex-col break:flex-row  border border-gray-300 rounded-lg overflow-hidden break:w-full items-center">
      <div className="w-[300px] break:w-[175px] md:w-[200px] lg:w-[250px] aspect-square bg-gray-600 flex-shrink-0">
        {event.ImageLink ? (
          <img
            src={event.ImageLink}
            alt={event.Title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-600"></div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-lg text-gray-500">{`${event.Month} ${event.Day} ${event.Year}`}</div>
        <div className="text-xl md:text-2xl mt-2 flex flex-col">
          <span className="font-bold text-xl">{event.Title}</span>
          <span className="text-lg">{event.Speakers}</span>
        </div>

        <span className="text-base">{event.Position}</span>
        <Link href={event.Link || ""}>
          <button className="bg-background px-3 py-2 text-white rounded-lg mt-5 self-start">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

const YearButton = ({
  index,
  setIndex,
  text,
  idx,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  idx: number;
}) => {
  return (
    <span
      className={`${
        index === idx ? "bg-background text-white" : ""
      } w-full text-center py-2 cursor-pointer`}
      onClick={() => setIndex(idx)}
    >
      {text}
    </span>
  );
};

const PastEvents = () => {
  const [index, setIndex] = useState(2023);
  const [pastEvents, setPastEvents] = useState({});
  useEffect(() => {
    const setEventsData = async () => {
      const result = await fetchPastEvents();
      setPastEvents(result);
    };
    setEventsData();
  }, []);
  return (
    <section className="bg-gray-50 py-32">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
        Past Events
      </h1>
      <div className="flex justify-center text-xl mb-10 px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-96">
        {[2022, 2023].map((year, idx: number) => (
          <YearButton
            key={idx}
            index={index}
            setIndex={setIndex}
            text={`${year}-${year + 1}`}
            idx={year}
          />
        ))}
      </div>
      <div className="flex flex-col items-center px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-96 gap-10">
        {pastEvents[index as keyof typeof pastEvents]?.map(
          (event: PastEventInterface, index: number) => (
            <Event key={index} event={event} />
          ),
        )}
      </div>
    </section>
  );
};

export default PastEvents;
