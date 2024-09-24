"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Input from "../../Components/Input";
import Link from "next/link";

const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email: string) => {
    const lseEmailRegex = /^[a-zA-Z0-9._%+-]+@lse.ac.uk$/;
    if (!lseEmailRegex.test(email)) {
      setEmailError("Please enter a valid @lse.ac.uk email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character."
      );
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateConfirmPassword = (
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as any;
    const emailValid = validateEmail(form.email.value);
    const passwordValid = validatePassword(form.password.value);
    const confirmPasswordValid = validateConfirmPassword(
      form.password.value,
      form.confirmPassword.value
    );

    if (emailValid && passwordValid && confirmPasswordValid) {
      // Proceed with form submission
    }
  };

  return (
    <main className="w-screen h-screen flex justify-between overlflow-hidden bg-[url('/login.svg')] bg-no-repeat bg-center bg-cover">
      <section className=" h-full w-[43vw] flex justify-center">
        <div className="w-[200px] mm:w-[300px] h-max">
          <Image src={logo} alt="LSE BIG" />
        </div>
      </section>
      <section className="h-full w-[50vw] py-40">
        <form className="flex flex-col px-52 py-40" onSubmit={handleSubmit}>
          <h1 className="whitespace-nowrap">Sign up to access resources</h1>
          <Input
            label="Email"
            type="email"
            validate={validateEmail}
            error={emailError}
            value={email}
            setValue={setEmail}
          />
          <Input
            label="Password"
            type="password"
            validate={validatePassword}
            error={passwordError}
            value={password}
            setValue={setPassword}
          />
          <Input
            label="Confirm Password"
            type="password"
            validate={(value) => validateConfirmPassword(password, value)}
            error={confirmPasswordError}
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <button type="submit" className="py-2 w-max px-8 mx-auto mb-3">
            Sign up
          </button>
          <div className="flex flex-col text-center">
            <Link href="/login" className=" text-background">
              Already have an account? Sign in
            </Link>
            <Link href="/" className=" text-background ">
              Return to home page
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Signup;
