"use client";
import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";

const DropDownLi = ({
  setState,
  liYear,
  setOpen,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
  liYear: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <li
      className="py-4 px-5 text-xl hover:bg-gray-200 cursor-pointer"
      onClick={() => {
        setState(liYear);
        setOpen(false); // Close the dropdown after selecting
      }}
    >
      {liYear}
    </li>
  );
};

const Dropdown = ({
  state,
  setState,
  options,
}: {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="relative">
        <button
          className="inline-flex items-center w-max gap-2 rounded-md bg-background text-white px-6 py-3 text-lg font-semibold shadow-lg focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {state}
          <FaChevronDown className="w-6 h-6 text-white" />
        </button>

        <ul
          className={`origin-top absolute top-full w-max right-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-out overflow-hidden ${
            open ? `h-[${60 * options.length}px]` : "h-0 ring-0"
          }`}
        >
          {options.map((option, index) => (
            <DropDownLi
              setState={setState}
              liYear={option}
              setOpen={setOpen}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
