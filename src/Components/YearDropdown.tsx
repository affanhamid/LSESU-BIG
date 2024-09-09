"use client"; // Ensure it's a client component since it handles UI interactions

import { Menu } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa"; // Import the Chevron Down icon from FontAwesome
import React from "react";
import Link from "next/link"; // Use Next.js Link for client-side navigation

const YearDropdown: React.FC = () => {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {/* Button: Solid blue background with white text */}
        <Menu.Button className="inline-flex items-center gap-2 rounded-md bg-[#0C1A3B] text-white px-6 py-3 text-lg font-semibold shadow-lg focus:outline-none">
          Select Year
          <FaChevronDown className="w-6 h-6 text-white" /> {/* FontAwesome ChevronDown in white */}
        </Menu.Button>
        
        {/* Menu Items: Smooth opening, modern look */}
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-200 ease-out transform scale-95">
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about/2022-2023"
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-6 py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-lg transition ease-in-out duration-200`}
                >
                  22/23
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about-23-24"
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-6 py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-lg transition ease-in-out duration-200`}
                >
                  23/24
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about"
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-6 py-3 text-lg text-gray-800 hover:bg-gray-100 rounded-lg transition ease-in-out duration-200`}
                >
                  24/25
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default YearDropdown;
