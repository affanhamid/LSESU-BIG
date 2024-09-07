import Navbar from "@/Components/Navbar";
import React from "react";

const Login = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-52 pb-10 h-[70vh] bg-white flex flex-col items-center justify-center">
        <h1 className="text-background text-4xl text-center">
          Welcome back to BIG
        </h1>
        <h2 className="">Login to access the resources</h2>
      </section>
    </main>
  );
};

export default Login;
