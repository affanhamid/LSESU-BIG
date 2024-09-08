import React from "react";

const MediaLogo = ({ icon }: { icon: string }) => {
  return (
    <div className="w-40 aspect-square flex justify-center items-center hover:scale-110 transition-all duration-200 rounded-lg overflow-hidden">
      <img src={icon} alt="" />
    </div>
  );
};

export default MediaLogo;
