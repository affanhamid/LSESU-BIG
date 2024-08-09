"use client";
import { useState } from "react";
import {
  FaUniversity,
  FaChartLine,
  FaUsers,
  FaPodcast,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const FeatureItem = ({
  selectedFeature,
  setSelectedFeature,
  idx,
  title,
  text,
  icon,
}: {
  selectedFeature: number;
  setSelectedFeature: (idx: number) => void;
  idx: number;
  title: string;
  text: string;
  icon: JSX.Element;
}) => {
  return (
    <motion.div
      className={`bg-background text-white md:h-[40vh] xl:h-[50vh] border w-full ${
        selectedFeature === idx
          ? "md:w-[400px] lg:w-[500px] xl:w-[570px]"
          : "md:w-[11vw] lg:w-28 xl:w-32"
      } ${
        selectedFeature !== idx ? "hover:bg-background/80 cursor-pointer" : ""
      } transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg`}
      onClick={() => setSelectedFeature(idx)}
      // variants={itemVariants}
    >
      <div className={`${selectedFeature === idx ? "block" : "hidden"} p-10`}>
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-3xl font-bold mb-5">{title}</h2>
        <p className="text-xl">{text}</p>
      </div>
      <div
        className={`w-full h-full flex justify-center items-center ${
          selectedFeature === idx ? "hidden" : "block"
        }`}
      >
        <span className="md:rotate-90 text-2xl font-semibold text-nowrap py-10 md:py-0">
          {title}
        </span>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-1 xl:gap-4 pb-20 pd:mb-2"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={0}
        title={"BIG Capital"}
        text={
          "We are an exclusive student-run club focused on producing original and meticulous research under 3 key divisions: Equities, Fixed Income, and Macro strategies."
        }
        icon={<FaUniversity />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={1}
        title={"M&A Group"}
        text={
          "Flagship analyst program (30+ first-year students, rigorously selected. Weekly sessions on accounting, deal rationale, financial metrics and valuation methodologies)"
        }
        icon={<FaChartLine />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={2}
        title={"Speaker Events"}
        text={
          "50+ Speaker events, Averaging 2-3 each week, from September to April, Range of events: solo events to panels, analysts to founders."
        }
        icon={<FaUsers />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={3}
        title={"LSE Focal Point"}
        text={
          "#1 student-run business podcast, 200+ Speakers since inception in, Speakers have included: Founders and Chairmen of Bank of America, Oaktree and Evercore"
        }
        icon={<FaPodcast />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={4}
        title={"Networking (BIG Ball, socials)"}
        text={
          "BIG Ball will bring together [number] students from across the UK to [event value] for an evening of entertainment and networking, Socials: bowling, ice staking, treasurer hunt (helps first yrs to get to know exec team etc)"
        }
        icon={<FaHandshake />}
      />
    </motion.div>
  );
};

export default Features;
