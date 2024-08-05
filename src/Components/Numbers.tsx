import React from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaUserFriends,
  FaHandshake,
} from "react-icons/fa";

const Number = ({ text, icon }: { text: any; icon: any }) => {
  return (
    <div className="w-60 aspect-[7/8] bg-background text-white flex flex-col items-center justify-center pb-10">
      <div className="flex-1 flex items-center justify-center text-6xl">
        {icon}
      </div>
      <div className="mt-4 text-2xl">{text}</div>
    </div>
  );
};

const Numbers = () => {
  return (
    <div className="flex justify-center gap-10 mb-20">
      <Number text="900+ members" icon={<FaUsers />} />
      <Number text="50+ events" icon={<FaCalendarAlt />} />
      <Number text="7000+ followers" icon={<FaUserFriends />} />
      <Number text="10+ sponsors" icon={<FaHandshake />} />
    </div>
  );
};

export default Numbers;
