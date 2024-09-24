"use client";
import { useState, useEffect } from "react";

const Input = ({
  label,
  type,
  validate,
  error,
  value,
  setValue,
}: {
  label: string;
  type: string;
  validate: (value: string) => boolean;
  error: string;
  value: string;
  setValue: (value: string) => void;
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (value !== "") {
      validate(value);
    }
  }, [value]);

  return (
    <div className="w-full relative mb-10">
      <div
        className={`absolute -translate-y-1/2 bg-white px-1 py-1 transition-all duration-200 z-0 ${
          active ? "top-0 left-2" : "top-1/2 left-3"
        }`}
      >
        {label}
      </div>
      <input
        type={type}
        className="w-full py-3 px-3 outline-none border-2 border-background rounded-lg z-20"
        onFocus={() => setActive(true)}
        onBlur={(e) => {
          if (e.target.value !== "") {
            setValue(e.target.value);
          }
          if (e.target.value === "") {
            setActive(false);
          }
        }}
        onChange={(e) => {
          if (value !== "") {
            setValue(e.target.value);
          }
        }}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1 absolute top-full left-2">
          {error}
        </p>
      )}{" "}
    </div>
  );
};

export default Input;
