import fetchCSVData from "./fetchGoogleSheets";
import { PastEventInterface } from "@/Types";

const PRECEDENCE = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// A helper to get the index of a month
const monthIndex = (month: string): number => PRECEDENCE.indexOf(month);

const segregatePastEvents = (pastEvents: PastEventInterface[]) => {
  const parsedEvents: Record<string, PastEventInterface[]> = {};

  // Get unique years as numbers and sort them (optional)
  const uniqueYears = Array.from(
    new Set(pastEvents.map((event) => Number(event.Year))),
  ).sort((a, b) => a - b);

  uniqueYears.forEach((year) => {
    // Use the year as the key (as a string)
    parsedEvents[year] = pastEvents.filter((event) => {
      const eventYear = Number(event.Year);
      const eventMonthIdx = monthIndex(event.Month);

      // For the academic year starting in `year`:
      if (eventYear === year) {
        // The event must be in September or later in the same year.
        return eventMonthIdx >= monthIndex("Sep");
      } else if (eventYear === year + 1) {
        // The event must be before September in the next year.
        return eventMonthIdx < monthIndex("Sep");
      }
      return false;
    });
  });

  return parsedEvents;
};

export const fetchPastEvents = async () => {
  const pastEventsURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTWyHE9B7LIljaT0qRxLbSSFG5b6q34DPMGKpWNL6F-6t0xoaHeQVff0OtdoE-ijIRFaO2_pa87pQl/pub?output=csv";
  const CSVData = await fetchCSVData(pastEventsURL);
  const segregatedEvents = segregatePastEvents(CSVData.data);
  return segregatedEvents;
};

export const fetchUpcomingEvents = async () => {
  const upcomingEventsURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTWyHE9B7LIljaT0qRxLbSSFG5b6q34DPMGKpWNL6F-6t0xoaHeQVff0OtdoE-ijIRFaO2_pa87pQl/pub?gid=494444679&single=true&output=csv";
  const CSVData = await fetchCSVData(upcomingEventsURL);
  return CSVData.data;
};
