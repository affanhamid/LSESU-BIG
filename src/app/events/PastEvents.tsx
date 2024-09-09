"use client";
import React, { useState } from "react";
import Link from "next/link";
import { pastEvents } from "@/Database";
import { PastEventInterface } from "@/Types";

const Event = ({ event }: { event: PastEventInterface }) => {
  return (
    <div className="flex flex-col break:flex-row  border border-gray-300 rounded-lg overflow-hidden w-max break:w-full items-center">
      <div className="w-[300px] break:w-[175px] md:w-[200px] lg:w-[250px] aspect-square bg-gray-600 flex-shrink-0">
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
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-lg text-gray-500">{`${event.Month} ${event.Day}`}</div>
        <div className="text-xl md:text-2xl font-bold mt-2">{event.title}</div>
        {event["speakers"] ? (
          <div className="text-lg text-gray-700 mt-1">
            Speakers: {event["speakers"]}
          </div>
        ) : (
          <></>
        )}
        <Link href={event.postLink || ""}>
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
  const [index, setIndex] = useState(0);
  return (
    <section className="bg-gray-50 py-32">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
        Past Events
      </h1>
      <div className="flex justify-center text-xl mb-10 px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-96">
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
      <div className="flex flex-col items-center px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-96 gap-10">
        {pastEvents[index.toString() as "0" | "1"].map(
          (event: PastEventInterface) => (
            <Event event={event} />
          )
        )}
      </div>
    </section>
  );
};

export default PastEvents;
