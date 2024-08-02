import React from "react";
import ResourcesDashboard from "@/Components/ResourcesDashboard";
import Navbar from "@/Components/Navbar";
import DatabaseTables from "@/Components/DatabaseTables";

const Resources = () => {
  return (
    <main>
      <Navbar />
      <ResourcesDashboard />
      <section className="pt-80 bg-white"></section>
    </main>
  );
};

export default Resources;
