import React from "react";
import { Search } from "lucide-react";
import Button from "../common/Button";


const JobSearch = () => (
  <div className="bg-white font-neueRoman rounded-md p-4 mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
    <input
      type="text"
      placeholder="Job Title, Company, or Keywords"
      className="w-full sm:w-auto flex-1 p-2 px-3  border-0  border-gray-300 text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
    />

    <select className="w-full sm:w-auto p-2 px-3  border-0 border-l border-gray-300 text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
      <option>Select Location</option>
    </select>

    <select className="w-full sm:w-auto p-2 px-3  border-0 border-l border-gray-300 text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
      <option>Job Type</option>
    </select>

    <Button className="w-full sm:w-auto px-6 py-2 flex items-center justify-center bg-primary hover:bg-primary-dark text-white">
      <Search className="mr-2" /> Search
    </Button>
  </div>
);

export default JobSearch;