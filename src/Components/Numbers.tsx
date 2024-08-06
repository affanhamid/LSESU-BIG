import React from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaUserFriends,
  FaHandshake,
} from "react-icons/fa";

const Number = ({
  text,
  icon,
  description,
}: {
  text: string;
  icon: any;
  description: string;
}) => {
  return (
    <div className="w-64 rounded-lg aspect-[7/8] bg-background text-white flex flex-col items-center justify-center pb-10 group transition-all duration-200 px-3 cursor-pointer select-none">
      <div className="flex-1 flex items-center justify-center text-6xl">
        {icon}
      </div>
      <div className="mt-4 text-2xl">{text}</div>
      <div className="h-0 overflow-hidden group-hover:h-[100px] transition-all duration-200 mt-2">
        {description}
      </div>
    </div>
  );
};

const Numbers = () => {
  return (
    <div className="flex justify-center gap-10 mb-20">
      <Number
        text="900+ members"
        icon={<FaUsers />}
        description={
          "This is a sample description of many words to explain the metric in more detail for potential users so that they undersatnd better"
        }
      />
      <Number
        text="50+ events"
        icon={<FaCalendarAlt />}
        description={
          "This is a sample description of many words to explain the metric in more detail for potential users so that they undersatnd better"
        }
      />
      <Number
        text="7,000+ followers"
        icon={<FaUserFriends />}
        description={
          "This is a sample description of many words to explain the metric in more detail for potential users so that they undersatnd better"
        }
      />
      <Number
        text="10+ sponsors"
        icon={<FaHandshake />}
        description={
          "This is a sample description of many words to explain the metric in more detail for potential users so that they undersatnd better"
        }
      />
    </div>
  );
};

export default Numbers;
