"use client";
import Link from "next/link";
import Carousel from "./Carousel";
import { SpeakerInterface } from "@/Types";

const Speaker = ({ image }: { image: string }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <img src={image} alt="" className="w-[300px]" />
    </div>
  );
};

const SpeakerShowcase = ({
  showcaseSpeakers,
}: {
  showcaseSpeakers: SpeakerInterface[];
}) => {
  return (
    <section className="text-white pb-32">
      <h1 className="text-center lg:text-left lg:pl-80">Past Speakers</h1>
      <div className="px-4 md:px-10 lg:px-80">
        <Carousel
          gap="gap-8"
          offset="pl-6"
          paddingY={""}
          items={showcaseSpeakers}
          Component={Speaker}
        />
        <Link href="/past-speakers">
          <p className="mt-5 underline text-lg text-center lg:text-left">
            See All Speakers
          </p>
        </Link>
      </div>
    </section>
  );
};

export default SpeakerShowcase;
