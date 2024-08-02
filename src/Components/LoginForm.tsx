"use client";
import { useState } from "react";

const LoginForm = () => {
  const [selected, setSelected] = useState(false);
  const [email, setEmail] = useState("");
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitHandler = () => {
    if (!validateEmail(email)) {
      alert("Invalid Email");
    } else if (email === "affanhamid007@gmail.com") {
      alert("Correct email");
    }
  };

  return (
    <div className="py-10 flex flex-col gap-8">
      <div className="relative">
        <input
          className="px-5 py-2 text-xl outline-none border-2 border-background rounded-lg w-96"
          onFocus={() => setSelected(true)}
          onBlur={() => email === "" && setSelected(false)}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <div
          className="absolute transform -translate-y-1/2 left-5 bg-white transition-all duration-100"
          style={{ top: selected ? "0" : "50%" }}
        >
          Email
        </div>
      </div>
      <button
        className="bg-background text-white px-5 py-2 rounded-lg"
        onClick={() => submitHandler()}
      >
        Continue with email
      </button>
    </div>
  );
};

export default LoginForm;
