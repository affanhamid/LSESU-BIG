import React from "react";

const MediaLogo = ({ icon }: { icon: any }) => {
  return (
    <div className="w-40 aspect-square flex justify-center items-center m-4 hover:scale-110 transition-all duration-200 rounded-lg overflow-hidden">
      <img src={icon} alt="" />
    </div>
  );
};

export default MediaLogo;
