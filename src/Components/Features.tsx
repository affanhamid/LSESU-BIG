"use client";
import { useState } from "react";

const FeatureItem = ({
  selectedFeature,
  setSelectedFeature,
  idx,
  title,
  text,
}: {
  selectedFeature: number;
  setSelectedFeature: (idx: number) => void;
  idx: number;
  title: string;
  text: string;
}) => {
  return (
    <div
      className={`bg-background text-white h-[50vh] border ${
        selectedFeature === idx ? "w-[700px]" : "w-32"
      } ${
        selectedFeature !== idx ? "hover:bg-gray-500 cursor-pointer" : ""
      } transition-all duration-300 ease-in-out overflow-hidden`}
      onClick={() => setSelectedFeature(idx)}
    >
      <div className={`${selectedFeature === idx ? "block" : "hidden"} p-10`}>
        <h2 className="text-3xl font-bold mb-5">{title}</h2>
        <p>{text}</p>
      </div>
      <div
        className={`w-full h-full flex justify-center items-center ${
          selectedFeature === idx ? "hidden" : "block"
        }`}
      >
        <span className="rotate-90 text-lg font-semibold text-nowrap">
          {title}
        </span>
      </div>
    </div>
  );
};

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  return (
    <div className="flex justify-center items-center flex-wrap">
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={0}
        title={"NETWORKING"}
        text={
          "Members build relationships with firm representatives at networking events, getting to know the firm culture and open opportunities. Moreover, we have strong networks across the membership base, where members support each other in application processes."
        }
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={1}
        title={"CAREER GUIDANCE"}
        text={
          "At our events previous successful applicants share their experiences of programmes across a wide variety of divisions whilst providing members a comprehensive understanding of the recruitment process, tips, and tricks."
        }
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={2}
        title={"INDUSTRY INSIGHTS"}
        text={
          "We give our members insight into a variety of different fields and divisions of finance through technical workshops, insight talks, and panels with alumni and industry professionals."
        }
      />
      <FeatureItem
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        idx={3}
        title={"RESEARCH GROUP"}
        text={
          "The Research Group and its analysts execute thorough research and provide insight into the world of finance through their research reports and articles."
        }
      />
    </div>
  );
};

export default Features;
