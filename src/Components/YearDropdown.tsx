"use client";
import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";

const DropDownLi = ({
  setYear,
  liYear,
}: {
  setYear: React.Dispatch<React.SetStateAction<string>>;
  liYear: string;
}) => {
  return (
    <li
      className="py-4 px-5 text-xl hover:bg-gray-200 cursor-pointer"
      onClick={() => setYear(liYear)}
    >
      {liYear}
    </li>
  );
};
const YearDropdown = ({
  year,
  setYear,
}: {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="inline-flex items-center gap-2 rounded-md bg-background text-white px-6 py-3 text-lg font-semibold shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        Year: {year}
        <FaChevronDown className="w-6 h-6 text-white" />
      </button>

      <ul
        className={`origin-top-right absolute top-full right-0 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-out overflow-hidden ${
          open ? "h-[180px]" : "h-0"
        }`}
      >
        <DropDownLi setYear={setYear} liYear="2022/23" />
        <DropDownLi setYear={setYear} liYear="2023/24" />
        <DropDownLi setYear={setYear} liYear="2024/25" />
      </ul>
    </div>
  );
};

export default YearDropdown;
