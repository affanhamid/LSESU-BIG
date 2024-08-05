import React from "react";
import { FaCheck } from "react-icons/fa";
import { PackagesInterface } from "@/Types/types";

const SponsorshipTable = ({ packages }: { packages: PackagesInterface }) => {
  return (
    <div className="mx-auto p-4 md:p-8 overflow-x-scroll">
      <table className="min-w-full md:w-[90%] text-sm md:text-lg mx-auto border-collapse">
        <thead className="text-base md:text-xl sticky top-24 bg-background z-10">
          <tr>
            <th className="p-4 border-b border-white"></th>
            {Object.keys(packages.items[0].packages).map((packageType) => (
              <th
                key={packageType}
                className="border-l border-b border-white p-4"
              >
                <div className="flex flex-col text-center gap-1 md:gap-3">
                  <span>{packageType}</span>
                  <span className="text-lg md:text-2xl text-nowrap">
                    {
                      packages.prices[
                        packageType as keyof typeof packages.prices
                      ]
                    }{" "}
                    <small>/Yr</small>
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {packages.items.map((item, index) => (
            <React.Fragment key={item.name}>
              {item.is_title_row ? (
                <tr className={`border-b border-white`}>
                  <td
                    className="p-4 font-bold"
                    colSpan={Object.keys(packages.items[0].packages).length + 1}
                  >
                    {item.name}
                  </td>
                </tr>
              ) : (
                <tr className={`${index % 2 === 0 ? "bg-gray-700" : ""}`}>
                  <td className="p-4 border-b border-white">{item.name}</td>
                  {Object.keys(packages.items[0].packages).map(
                    (packageType) => (
                      <td
                        key={packageType}
                        className="p-4 text-center border-l border-b border-white"
                      >
                        {item.packages[
                          packageType as keyof typeof item.packages
                        ] ? (
                          <FaCheck className="text-green-500 mx-auto" />
                        ) : (
                          ""
                        )}
                      </td>
                    )
                  )}
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SponsorshipTable;
