"use client";
import React, { useState } from "react";
import pastEvents from "./pastEvents.json";

type PastEventsType = {
  [key: string]: {
    title: string;
    speakers: string[];
    imageLink: string;
    postLink: string;
    month: string;
    day: number;
  }[];
};

const pastEventsTyped: PastEventsType = pastEvents;

const Event = ({ event }: { event: any }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full">
      <div className="w-[250px] aspect-square bg-gray-600 flex-shrink-0">
        {event.imageLink ? (
          <img
            src={event.imageLink}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-600"></div>
        )}
      </div>
      <div className="p-5 flex flex-col">
        <div className="text-lg text-gray-500">{`${event.month} ${event.day}`}</div>
        <div className="text-2xl font-bold mt-2">{event.title}</div>
        <div className="text-lg text-gray-700 mt-1">
          Speakers: {event["speakers"].join(", ")}
        </div>
        <button className="bg-background px-3 py-2 text-white rounded-lg mt-5 self-start">
          Learn more
        </button>
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
  setIndex: any;
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
  const [index, setIndex] = useState(0);
  return (
    <section className="bg-gray-50 py-32">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
        Past Events
      </h1>
      <div className="flex justify-center text-xl mb-10 px-96">
        <YearButton
          index={index}
          setIndex={setIndex}
          text="2023-2024"
          idx={0}
        />
        <YearButton
          index={index}
          setIndex={setIndex}
          text="2022-2023"
          idx={1}
        />
      </div>
      <div className="flex flex-col items-center px-96">
        {pastEventsTyped[index.toString()].map((event: any) => (
          <Event event={event} />
        ))}
      </div>
    </section>
  );
};

export default PastEvents;
