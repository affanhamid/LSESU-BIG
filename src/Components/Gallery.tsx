import React from "react";
// import { fetchEvents, fetchUpcomingEvents } from "../../Database/database";
import Navbar from "@/Components/Navbar";

const Photo = ({
  imageLink,
  title,
  link,
}: {
  imageLink: string;
  title: string;
  link: string;
}) => {
  return (
    <div className="group relative w-[300px] bg-black h-[300px] clip-hexagon -mx-[14px] hover:scale-110 duration-200 transition-all cursor-pointer">
      <img
        src={imageLink}
        alt=""
        crossOrigin="anonymous"
        className="object-cover"
      />
      <p className="hidden group-hover:flex absolute top-0 left-0 right-0 bottom-0 z-30 items-center justify-center text-white p-10">
        <span>{title}</span>
      </p>
    </div>
  );
};

const Gallery = ({ events }: { events: any }) => {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <section className="pt-20 pb-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-10 text-gray-900">
          Gallery
        </h1>
        <div className="h-screen">
          <div className="flex w-max pt-10">
            {events.map((event: any, idx: number) => (
              <Photo
                imageLink={event.imageLink}
                link={event.postLink}
                title={event.title}
                key={idx}
              />
            ))}
          </div>
          <div className="flex w-max -translate-x-[136px] -translate-y-[74px]">
            {[1, 2, 3, 4, 5, 6, 7].map((a, idx) => (
              <Photo imageLink={""} link={""} title={""} key={idx} />
            ))}
          </div>
          <div className="flex w-max -translate-y-[147px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a, idx) => (
              <Photo imageLink={""} link={""} title={""} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
