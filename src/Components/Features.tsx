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
      className={`bg-background text-white md:h-[520px] lg:h-[450px] xl:h-[470px] border w-full ${
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
        <p className="text-lg ml:text-lg md:text-xl">{text}</p>
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
        idx={0}
        title={"BIG Conversations"}
        text={
          "Our flagship event series, regularly brings high-profile guests to LSE, including CEOs, entrepreneurs, politicians, and executives. Our Corporate Relations team organise an array of exciting year-round keynotes, corporate presentations, panel discussions, and hands-on workshops. Past event topics have included public finance, the hedge fund and private equity industries, and micro-finance."
        }
        icon={<FaUsers />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={1}
        title={"M&A Group"}
        text={
          "The LSE M&A Group is the UK’s first student-run educational club which teaches the fundamentals of mergers and acquisitions. We offer weekly interactive lessons taught by a passionate and experienced executive team. The 2024/25 executive team is comprised of former LSE M&A Group analysts and will closely mentor our select class of new analysts to succeed in their spring week and internship applications."
        }
        icon={<FaUniversity />}
      />

      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={2}
        title={"BIG Capital"}
        text={
          "Our investment fund was launched in 2023. BIG Capital is split into several teams investing in equities and fixed-income securities. This year, we are introducing our flagship BIG Capital Analyst programme, in which a select number of first-year undergraduates will have the opportunity to be trained by seniors who have interned at Goldman Sachs, Morgan Stanley and Deutsche Bank."
        }
        icon={<FaChartLine />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={3}
        title={"London Strategy Group"}
        text={
          "Founded in 2017, the London Strategy Group (LSG) is a premier pro-bono strategy consultancy at the LSE. We are proud to be one of the UK’s largest strategy-focused student consultancies, serving clients ranging from FTSE 100 firms to start-ups and NGOs. Being part of LSG is an excellent opportunity to gain practical first-hand experience in consulting and receive exclusive training for our official partners."
        }
        icon={<FaHandshake />}
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={4}
        title={"LSE Focal Point"}
        text={
          "LSE Focal Point stands as the leading student-run business podcast, boasting over 200 influential speakers since its inception. Our guest list includes industry titans such as the Founders and Chairmen of Bank of America, Oaktree, and Evercore. The podcast continues to be a platform for thought-provoking discussions, offering exclusive insights into the business world."
        }
        icon={<FaPodcast />}
      />
    </motion.div>
  );
};

export default Features;
