import axios from "axios";
import Papa from "papaparse";

const fetchCSVData = async (googleSheetsURL: string) => {
  try {
    const result = await axios.get(googleSheetsURL);
    console.log(result);
    const parsedData = Papa.parse(result.data, {
      delimiter: ",", // change this to ',' if your data is comma-separated
      header: true,
      skipEmptyLines: true,
    });
    return parsedData;
  } catch (err) {
    console.error(err);
  }
};

export default fetchCSVData;
