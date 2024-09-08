import Link from "next/link";
import React from "react";
import { GalleryEventInterface, GalleryPhotoInterface } from "@/Types";

const Photo = ({ imageLink, title, link }: GalleryPhotoInterface) => {
  return (
    <Link href={link}>
      <div className="group cursor-pointer transform transition-transform duration-200 mr-4 mb-4 border-b-2 border-white relative">
        <img
          src={imageLink}
          alt={title}
          // crossOrigin="anonymous"
          className="object-cover group-hover:brightness-75 w-full h-auto max-h-80"
        />
        <p className="hidden group-hover:flex absolute top-0 left-0 right-0 bottom-0 items-center justify-center text-white p-10 text-center bg-black bg-opacity-50">
          <span>{title}</span>
        </p>
      </div>
    </Link>
  );
};

const Gallery = ({ events }: { events: GalleryEventInterface[] }) => {
  return (
    <main className="">
      <section className="bg-white text-black border-b border-white mb-10">
        <h1>Gallery</h1>
        <div className="flex justify-center">
          <div className="relative h-[75vh] overflow-y-scroll w-full flex flex-wrap justify-center my-20">
            {events.map((event: GalleryEventInterface, idx: number) => (
              <div className="flex-initial" key={idx}>
                <Photo
                  imageLink={event.imageLink}
                  link={event.postLink}
                  title={event.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
