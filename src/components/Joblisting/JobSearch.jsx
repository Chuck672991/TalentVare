import React from "react";
// import { Search } from "lucide-react";
import Button from "../common/Button";

const SearchIcon = ({ className }) => (
  <svg
    className={`${className}`}
    width="19"
    height="19"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.25 17L13.6566 14.4066"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M12.8477 7.5487C12.8428 8.96647 12.3401 10.3375 11.4274 11.4224C10.5146 12.5072 9.24973 13.237 7.85367 13.4842C6.45762 13.7315 5.01908 13.4805 3.78925 12.775C2.55943 12.0696 1.61647 10.9546 1.12504 9.62471C0.63362 8.29482 0.624957 6.83456 1.10057 5.49894C1.57618 4.16331 2.50583 3.0372 3.7272 2.31723C4.94857 1.59726 6.38403 1.32921 7.78292 1.55986C9.18181 1.79051 10.4552 2.50521 11.3808 3.57917"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

const JobSearch = () => (
  <div className="bg-white  font-medium  text-gray-600 !text-sm font-neueRoman rounded-md p-4 mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
    <input
      type="text"
      placeholder="Job Title, Company, or Keywords"
      className="w-full sm:w-auto flex-1 p-2 px-3  border-0  border-gray-300  focus:outline-none focus:border-primary focus:ring-0 focus:ring-primary"
    />

    <select className="w-full sm:w-auto p-2 px-5  border-0 border-l border-gray-300  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
      <option>Select Location</option>
    </select>

    <select className="w-full sm:w-auto p-2 px-5  border-0 border-l border-gray-300  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
      <option>Job Type</option>
    </select>

    <Button className="w-full sm:w-auto  sm:px-1 md:px-4 lg:px-8 py-2 flex items-center justify-center bg-primary hover:bg-primary-dark text-white">
      {/* <Search className="mr-0 xs:mr-10 md:mr-2" /> */}
      <SearchIcon className="mr-0  md:mr-2" />
      <span className="md:hidden sm:hidden xs:block xs:ml-2 md:ml-0 lg:block"> Search </span>
    </Button>
  </div>
);

export default JobSearch;
