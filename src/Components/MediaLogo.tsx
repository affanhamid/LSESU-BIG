import React from "react";

const MediaLogo = ({ icon }: { icon: any }) => {
  return (
    <div className="w-40 aspect-square flex justify-center items-center m-4">
      <img src={icon} alt="" />
    </div>
  );
};

export default MediaLogo;
