"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <main className="w-screen h-screen flex flex-col md:flex-row justify-between overlflow-hidden bg-background md:bg-[url('/login.svg')] bg-no-repeat bg-center bg-cover">
      <section className="pb-20 md:h-full w-full md:w-[40vw] flex justify-center items-center bg-background">
        <div className="w-[200px] mm:w-[300px] h-max">
          <Image src={logo} alt="LSE BIG" />
        </div>
      </section>
      <section className="h-full w-full md:w-[50vw] py-40 flex items-center justify-center bg-white md:bg-transparent">
        <div className="md:px-52">
          <h1 className="text-3xl">Welcome to LSE BIG</h1>
          <h2 className="whitespace-nowrap text-lg md:text-3xl text-center mb-4">
            {session
              ? `Signed in as ${session?.user?.email}`
              : "Sign in to access to BIG resources"}
          </h2>
          <div className="flex flex-col text-center">
            <button
              onClick={() => (session ? signOut() : signIn("azure-ad"))}
              className="mb-2"
            >
              {session ? "Sign out" : "Sign in"}
            </button>
            <Link href="/" className=" text-background ">
              Return to home page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
