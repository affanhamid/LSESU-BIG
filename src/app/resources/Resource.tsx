import Link from "next/link";
import React from "react";

interface ResourceInterface {
  link: string;
  thumbnail?: string;
}

const Resource = ({ link, thumbnail }: ResourceInterface) => {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center justify-center w-max rounded-xl overflow-hidden border-4 border-black gap-4 mx-10 my-10 hover:scale-105 transition-all duration-100">
        <div>
          {thumbnail ? (
            <img src={thumbnail} className="w-[400px] aspect-[4/5]" />
          ) : (
            <div className="bg-gray-700 w-[400px] aspect-[4/5]"></div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Resource;
