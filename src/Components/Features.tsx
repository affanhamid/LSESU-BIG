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
      className={`bg-background text-white md:h-[44vh] xl:h-[50vh] border w-full ${
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
        <span className="md:rotate-90 text-2xl font-semibold text-nowrap py-10 px-10">
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
        idx={1}
        title={"M&A Group"}
        text={
          "The M&A Group at the LSE offers an unparalleled experience for first-year students, with over 30 highly-selected analysts engaging in weekly sessions covering accounting, financial analysis, deal rationale, and valuation techniques. Our ‘Deal Snapshots’ series provides in-depth analysis of recent M&A transactions, and our LBO workshops, in collaboration with Financial Edge, offer practical insights from experts who train analysts at top financial institutions."
        }
        icon={<FaChartLine />}
      />

      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={0}
        title={"BIG Capital"}
        text={
          "BIG Capital is a premier student-managed investment find at the LSE, known for its rigorous research across Equities, Fixed Income, and Macro strategies. We pride ourselves on delivering thorough and original analysis, guided by a team of highly selective portfolio managers"
        }
        icon={<FaUniversity />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={2}
        title={"Speaker Events"}
        text={
          "Our Speaker Events are a cornerstone of the BIG experience, featuring over 50 high-profile engagements from September to April each year. Averaging 2-3 events per week, we host a diverse range of speakers, from industry-leading analysts to innovative founders. Our spotlight speakers over the past two years include Ken Griffen (Founder and CEO, Citadel Securities) and Stephan Feldgoise (Global Co-Head of M&A, Goldman Sachs.)"
        }
        icon={<FaUsers />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={3}
        title={"LSE Focal Point"}
        text={
          "LSE Focal Point stands as the leading student-run business podcast, boasting over 200 influential speakers since its inception. Our guest list includes industry titans such as the Founders and Chairmen of Bank of America, Oaktree, and Evercore. The podcast continues to be a platform for thought-provoking discussions, offering exclusive insights into the business world."
        }
        icon={<FaPodcast />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={4}
        title={"Networking"}
        text={
          "The BIG Ball is a highlight of our networking calendar, bringing together students from across the UK for an unforgettable evening of entertainment and professional networking. Our social events over the past year have included bowling, ice skating, and treasure hunts, are designed to help first-year members connect with the executive team and each other, encouraging a strong sense of community from the very start."
        }
        icon={<FaHandshake />}
      />
    </motion.div>
  );
};

export default Features;
