// import { useState, useEffect } from "react";
import TrackerNavigation from "./TrackerNavigation";
import PublicGoogleSheetsParser from "public-google-sheets-parser";

const introSheet = "1Zk13bgREvD2Fev2XKJasyyx-BV2SYimA";

const sheetNames = {
  "Big Opportunities": "BIG Opportunities",
  "First-Year Summer Internships": "First-Year Summer 2025",
  "Spring Weeks": "2025 Spring Intern",
  "Summer Analyst Programme": "2025 Summer Analyst",
  "Off-Cycle Internships": "2025 Off-Cycle",
  "Graduate Schemes": "2025 Grad Scheme",
  "Law Vacation Schemes": "2025 Law Vacation Schemes",
};

const Sheet = () => {
  // const [sheets, setSheets] = useState<string[]>([]);
  // const [selected, setSelected] = useState(sheets[0]);

  // useEffect(() => {
  //   const getSheets = async () => {
  //     const parser = new PublicGoogleSheetsParser(introSheet);
  //     const data: string[] = await parser.parse();
  //     setSheets(data.slice(1, 8).map((item) => Object.values(item)[0]));
  //   };
  //   getSheets();
  // }, []);

  // useEffect(() => {
  //   const getSheet = async () => {
  //     const parser = new PublicGoogleSheetsParser(introSheet, {
  //       sheetName: sheetNames[selected as keyof typeof sheetNames] as string,
  //       useFormat: true,
  //     });

  //     const data: string[] = await parser.parse();
  //     console.log(data);
  //   };
  //   getSheet();
  // }, [selected]);

    return (
      <section className="p-5 bg-white">
        <iframe
          className="w-full h-[80vh] outline-none"
          src="https://docs.google.com/spreadsheets/d/1Zk13bgREvD2Fev2XKJasyyx-BV2SYimA/preview?gid=1922076053#gid=1922076053"
        ></iframe>
      </section>
    );
  };  

export default Sheet;
