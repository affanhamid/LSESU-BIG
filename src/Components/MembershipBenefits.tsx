"use client";
import React from "react";
import { BenefitProps } from "@/Types/types";
import { useSpring, animated, config } from "react-spring";
import {
  FaNetworkWired,
  FaBriefcase,
  FaUniversity,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Benefit: React.FC<BenefitProps> = ({
  title,
  description,
  icon,
  highlighted,
}) => {
  const styles = useSpring({
    boxShadow: highlighted
      ? "0px 0px 15px rgba(255,255,255,0.8)"
      : "0px 0px 5px rgba(0,0,0,0.3)",
    border: highlighted ? "2px solid white" : "1px solid white",
    config: config.gentle,
  });

  return (
    <animated.div
      style={styles}
      className="p-8 rounded-lg flex flex-col items-center text-center shadow-lgborder px-4"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-nowrap">
        {title}
      </h2>
      <p className="text-sm md:text-base">{description}</p>
    </animated.div>
  );
};

const MembershipBenefits = () => {
  const [index, setIndex] = React.useState(0);
  const benefits = [
    {
      title: "Exclusive networking sessions",
      description:
        "Networking events to connect members with industry professionals and like-minded students.",
      icon: <FaNetworkWired />,
    },
    {
      title: "Top-tier recruitment opportunities",
      description:
        "Recruitment events, CV drop-ins, and info sessions from the leading financial firms.",
      icon: <FaBriefcase />,
    },
    {
      title: "Application workshops",
      description:
        "Technical training sessions, CV reviews, and panel events for all job programmes.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Inter-university competitions",
      description:
        "Varsity-level stock pitches and M&A competitions organised with universities across the globe.",
      icon: <FaUniversity />,
    },
  ];

  const order = [0, 1, 3, 2];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % order.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [order.length]);

  return (
    <section className="text-white pt-32 pb-32">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
        Membership Benefits
      </h1>
      <div className="relative w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-16">
        {benefits.map((benefit, i) => (
          <Benefit
            key={i}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            highlighted={i === order[index]}
          />
        ))}
      </div>
      <div className="text-center mt-20">
        <p className="text-xl">
          If you want to learn more about membership benefits, get in touch
        </p>
        <button className="mt-4 px-4 py-2 rounded border-2 border-white">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default MembershipBenefits;
